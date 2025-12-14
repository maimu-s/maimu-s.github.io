import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // PNG画像を自動的にWebPに変換
        if (url.searchParams.has('webp') || url.pathname.endsWith('.png')) {
          return new URLSearchParams({
            format: 'webp;png', // WebPとPNGの両方を生成（フォールバック用）
            quality: '80',
            w: '1920', // 最大幅を制限
          })
        }
        return new URLSearchParams()
      }
    })
  ],
  root: 'src',
  envDir: '..',  // プロジェクトルートの.envを読み込む
  base: '/',  // GitHub Pages プロジェクトサイト
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.error'],
      },
      mangle: {
        toplevel: true,
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      },
      output: {
        manualChunks: undefined,
      },
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Twitch RSSのCORSエラーを回避
      '/api/twitch-rss': {
        target: 'https://twitchrss.appspot.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/twitch-rss/, '')
      }
    }
  },
  preview: {
    port: 4173,
    open: true
  }
})
