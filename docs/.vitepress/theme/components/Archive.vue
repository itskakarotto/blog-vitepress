<template>
    <div class="timeline-archive">
      <header class="archive-header">
        <h1>📚 文章归档</h1>
        <span class="count-badge">{{ posts.length }}</span>
      </header>
  
      <div v-if="posts.length === 0" class="empty-state">
        <p>✨ 还没有文章，期待你的第一篇</p>
      </div>
  
      <div v-else class="timeline">
        <div
          v-for="group in groupedPosts"
          :key="group.key"
          class="group"
        >
          <h2 class="group-title">
            {{ group.label }}
            <span class="group-count">{{ group.posts.length }}</span>
          </h2>
  
          <div
            v-for="post in group.posts"
            :key="post.url"
            class="timeline-item"
          >
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <time class="date">{{ formatDate(post.date) }}</time>
              <a :href="post.url" class="post-link">{{ post.title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { data } from '../posts.data'
  
  export default {
    name: 'TimelineArchive',
    data() {
      return {
        posts: data
      }
    },
    computed: {
      groupedPosts() {
        const groups = {}
        this.posts.forEach(post => {
          const date = new Date(post.date)
          const year = date.getFullYear()
          const month = String(date.getMonth() + 1).padStart(2, '0')
          const key = `${year}-${month}`
          if (!groups[key]) {
            groups[key] = {
              key,
              label: `${year}年${parseInt(month)}月`,
              posts: []
            }
          }
          groups[key].posts.push(post)
        })
  
        Object.keys(groups).forEach(key => {
          groups[key].posts.sort((a, b) => new Date(b.date) - new Date(a.date))
        })
  
        return Object.keys(groups)
          .sort((a, b) => b.localeCompare(a))
          .map(key => groups[key])
      }
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      }
    }
  }
  </script>
  
  <style scoped>
  /* ===== 全局重置 ===== */
  .timeline-archive {
    max-width: 820px;
    margin: 0 auto;
    padding: 2rem 1.8rem 2.8rem;
    background: #ffffff;
    border-radius: 28px;
    box-shadow: 0 12px 48px -12px rgba(0, 0, 0, 0.08);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1e293b;
    transition: box-shadow 0.3s ease;
  }
  
  .timeline-archive:hover {
    box-shadow: 0 20px 64px -16px rgba(0, 0, 0, 0.12);
  }
  
  /* ===== 头部 ===== */
  .archive-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid #f1f5f9;
  }
  
  .archive-header h1 {
    font-size: 1.9rem;
    font-weight: 650;
    letter-spacing: -0.02em;
    color: #0f172a;
    margin: 0;
  }
  
  .count-badge {
    background: #eef2ff;
    color: #4f46e5;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.2rem 1rem;
    border-radius: 100px;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }
  
  /* ===== 空状态 ===== */
  .empty-state {
    text-align: center;
    padding: 4rem 1rem;
    color: #94a3b8;
    font-size: 1.05rem;
    background: #fafbfc;
    border-radius: 20px;
    border: 1.5px dashed #e2e8f0;
  }
  
  /* ===== 时间轴容器 ===== */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
  }
  
  /* ===== 分组 ===== */
  .group {
    position: relative;
  }
  
  .group-title {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-size: 1.2rem;
    font-weight: 620;
    color: #0f172a;
    margin-bottom: 1.2rem;
    padding-left: 0.4rem;
  }
  
  .group-title::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4f46e5;
    opacity: 0.5;
    flex-shrink: 0;
  }
  
  .group-count {
    font-weight: 400;
    font-size: 0.75rem;
    color: #94a3b8;
    background: #f1f4f9;
    padding: 0.05rem 0.7rem;
    border-radius: 100px;
    letter-spacing: 0.02em;
  }
  
  /* ===== 每个条目 ===== */
  .timeline-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 0.6rem 0.5rem 0.6rem 0;
    border-radius: 10px;
    transition: background 0.2s ease, transform 0.15s ease;
    cursor: default;
  }
  
  .timeline-item:hover {
    background: #f8fafc;
    transform: translateX(6px);
  }
  
  /* ===== 圆点 & 连接线 ===== */
  .timeline-dot {
    flex: 0 0 16px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #e2e8f0;
    border: 2.5px solid #ffffff;
    box-shadow: 0 0 0 2.5px #cbd5e1;
    margin-top: 0.2rem;
    position: relative;
    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
  }
  
  .timeline-item:hover .timeline-dot {
    background: #4f46e5;
    box-shadow: 0 0 0 3.5px #c7d2fe;
    transform: scale(1.12);
  }
  
  /* 纵向连接线（仅非最后一项） */
  .timeline-item:not(:last-child) .timeline-dot::after {
    content: '';
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 2.5px;
    height: calc(100% + 0.8rem);
    background: #e9edf3;
    border-radius: 2px;
    transition: background 0.25s ease;
  }
  
  .timeline-item:hover .timeline-dot::after {
    background: #c7d2fe;
  }
  
  /* ===== 内容 ===== */
  .timeline-content {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem 1.2rem;
    flex: 1;
    min-width: 0;
  }
  
  .date {
    font-size: 0.78rem;
    font-weight: 500;
    color: #64748b;
    background: #f1f4f9;
    padding: 0.1rem 0.8rem;
    border-radius: 100px;
    letter-spacing: 0.02em;
    white-space: nowrap;
    transition: background 0.2s ease, color 0.2s ease;
  }
  
  .timeline-item:hover .date {
    background: #e9edf4;
    color: #334155;
  }
  
  .post-link {
    font-size: 1rem;
    font-weight: 500;
    color: #1e293b;
    text-decoration: none;
    border-bottom: 1.5px solid transparent;
    transition: color 0.2s ease, border-color 0.25s ease;
    word-break: break-word;
  }
  
  .post-link:hover {
    color: #4f46e5;
    border-bottom-color: #a5b4fc;
  }
  
  /* ===== 响应式 ===== */
  @media (max-width: 640px) {
    .timeline-archive {
      padding: 1.5rem 1.2rem 2rem;
      border-radius: 20px;
    }
  
    .archive-header h1 {
      font-size: 1.6rem;
    }
  
    .timeline-item {
      gap: 0.7rem;
      padding: 0.5rem 0.2rem;
    }
  
    .timeline-content {
      gap: 0.3rem 0.8rem;
    }
  
    .date {
      font-size: 0.7rem;
      padding: 0.05rem 0.6rem;
    }
  
    .post-link {
      font-size: 0.95rem;
    }
  
    .timeline-dot {
      flex: 0 0 14px;
      width: 14px;
      height: 14px;
    }
  
    .timeline-item:not(:last-child) .timeline-dot::after {
      top: 22px;
      height: calc(100% + 0.5rem);
    }
  }
  
  @media (max-width: 420px) {
    .timeline-archive {
      padding: 1.2rem 0.9rem 1.6rem;
    }
  
    .timeline-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.1rem;
    }
  
    .post-link {
      font-size: 0.9rem;
    }
  }
  
  /* ===== 入场动画（可选） ===== */
  .timeline-item {
    opacity: 0;
    animation: fadeSlideUp 0.45s ease forwards;
  }
  
  /* 为每个条目添加延迟（最多支持 12 个，可自行扩展） */
  .timeline-item:nth-child(1)  { animation-delay: 0.02s; }
  .timeline-item:nth-child(2)  { animation-delay: 0.05s; }
  .timeline-item:nth-child(3)  { animation-delay: 0.08s; }
  .timeline-item:nth-child(4)  { animation-delay: 0.11s; }
  .timeline-item:nth-child(5)  { animation-delay: 0.14s; }
  .timeline-item:nth-child(6)  { animation-delay: 0.17s; }
  .timeline-item:nth-child(7)  { animation-delay: 0.20s; }
  .timeline-item:nth-child(8)  { animation-delay: 0.23s; }
  .timeline-item:nth-child(9)  { animation-delay: 0.26s; }
  .timeline-item:nth-child(10) { animation-delay: 0.29s; }
  .timeline-item:nth-child(11) { animation-delay: 0.32s; }
  .timeline-item:nth-child(12) { animation-delay: 0.35s; }
  
  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>