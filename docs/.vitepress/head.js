// docs/.vitepress/config/head.js
export default [
    // 基础兼容：.ico 文件
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  
    // 现代浏览器：32x32 PNG
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  
    // 现代浏览器：16x16 PNG
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  
    // iOS 设备：180x180
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  
    // Android 设备：192x192
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' }],
  
    // Android 设备：512x512
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }],
  ]