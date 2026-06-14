<script setup lang="ts">
const activeWindow = ref('code') // 'code' | 'terminal'

const configCode = `export default defineDesktopConfig({
  theme: '@owdproject/theme-paper',
  apps: ['@owdproject/app-terminal', '@owdproject/app-youtube'],
})`

const terminalLine = ref('pnpm desktop dev')
</script>

<template>
  <div class="desktop-mockup">
    <iframe src="https://atproto-os.pages.dev/" />
  </div>
</template>

<style scoped>
.desktop-mockup {
  position: relative;
  width: 640px;
  height: 480px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
