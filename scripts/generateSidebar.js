import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import matter from 'gray-matter'
import { minimatch } from 'minimatch'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

// ---------- 加载配置文件 ----------
let config = {}
const configPath = path.resolve(__dirname, '../docs/.vitepress/sidebar.config.js')

if (fs.existsSync(configPath)) {
  try {
    const imported = await import(configPath)
    config = imported.default || imported
  } catch (e) {
    try {
      let rawConfig = require(configPath)
      if (rawConfig && typeof rawConfig === 'object' && rawConfig.default && typeof rawConfig.default === 'object') {
        rawConfig = rawConfig.default
      }
      config = rawConfig
    } catch (err) {
      console.warn(`加载配置文件失败: ${err.message}`)
      config = { sidebars: {} }
    }
  }
} else {
  console.warn('未找到 sidebar.config 文件，使用默认配置（空侧边栏）')
  config = { sidebars: {} }
}

// ---------- 解构配置 ----------
const {
  rootDir = 'docs',
  sidebars = {},
  exclude = ['**/index.md'],
  useTitleFromFrontmatter = true,
  hyphenToSpace = true,
  collapsed = true,
  sort = 'asc',
  sortFn = null,
} = config

const projectRoot = path.resolve(__dirname, '..')
const docsRoot = path.join(projectRoot, rootDir)
const outputDir = path.join(docsRoot, '.vitepress')

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// ---------- 工具函数 ----------
function shouldExclude(filePath) {
  for (const pattern of exclude) {
    if (minimatch(filePath, pattern, { dot: true })) {
      return true
    }
  }
  return false
}

function getTitle(filePath, content) {
  let title = null
  if (useTitleFromFrontmatter) {
    try {
      const { data } = matter(content)
      if (data.title) {
        // 如果 title 是 Date 对象，转为格式化字符串（如 '2025-08-30'）
        if (data.title instanceof Date) {
          // 转成 YYYY-MM-DD 格式（也可按需调整）
          const d = data.title
          const year = d.getFullYear()
          const month = String(d.getMonth() + 1).padStart(2, '0')
          const day = String(d.getDate()).padStart(2, '0')
          title = `${year}-${month}-${day}`
        } else {
          title = String(data.title) // 其他类型强制转字符串
        }
        return title
      }
    } catch (_) {}
  }
  // 回退到文件名
  let name = path.basename(filePath, path.extname(filePath))
  if (hyphenToSpace) {
    name = name.replace(/-/g, ' ')
  }
  return name
}

function compareItems(a, b) {
  console.log(a, b);
  if (sortFn) return sortFn(a, b)
  const direction = sort === 'desc' ? -1 : 1
  return direction * a.text.localeCompare(b.text)
}

// ---------- 递归生成侧边栏项 ----------
function generateSidebarItems(dirPath, relativeFromScan, pathPrefix) {
  const items = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  const files = []
  const dirs = []

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name)
    const relativeFromDocs = path.relative(docsRoot, entryPath).replace(/\\/g, '/')

    if (shouldExclude(relativeFromDocs)) continue

    if (entry.isDirectory()) {
      dirs.push({ name: entry.name, path: entryPath })
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push({ name: entry.name, path: entryPath })
    }
  }

  for (const file of files) {
    const content = fs.readFileSync(file.path, 'utf-8')
    const relPath = path.relative(docsRoot, file.path).replace(/\\/g, '/')
    const title = getTitle(relPath, content)

    const fileNameWithoutExt = file.name.replace(/\.md$/, '')
    const linkPath = relativeFromScan
      ? `${relativeFromScan}/${fileNameWithoutExt}`
      : fileNameWithoutExt
    const link = pathPrefix + linkPath

    items.push({ text: title, link })
  }

  for (const dir of dirs) {
    const nextRelative = relativeFromScan
      ? `${relativeFromScan}/${dir.name}`
      : dir.name
    const childItems = generateSidebarItems(dir.path, nextRelative, pathPrefix)
    if (childItems.length === 0) continue

    const dirTitle = getTitle(dir.name, '')
    items.push({
      text: dirTitle,
      collapsed: collapsed,
      items: childItems,
    })
  }

  items.sort(compareItems)
  return items
}

// ---------- 主循环 ----------
for (const [pathPrefix, { dir, output }] of Object.entries(sidebars)) {
  const scanDir = path.join(docsRoot, dir)
  if (!fs.existsSync(scanDir)) {
    console.warn(`扫描目录不存在：${scanDir}，跳过`)
    continue
  }

  const sidebarItems = generateSidebarItems(scanDir, '', pathPrefix)
  const outputPath = path.join(outputDir, output)
  fs.writeFileSync(outputPath, JSON.stringify(sidebarItems, null, 2), 'utf-8')
}