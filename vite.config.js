import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/icp-svd-mag4d-lidar-odometry/',
  server: {
    open: true,
  },
})
