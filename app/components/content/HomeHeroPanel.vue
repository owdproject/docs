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
    <!-- Desktop Icons -->
    <div class="desktop-icons">
      <div class="icon-item">
        <div class="icon-box bg-blue-500/20 text-blue-400">
          <UIcon name="i-lucide-folder" class="w-6 h-6" />
        </div>
        <span>Projects</span>
      </div>
      <div class="icon-item">
        <div class="icon-box bg-green-500/20 text-green-400">
          <UIcon name="i-lucide-terminal" class="w-6 h-6" />
        </div>
        <span>CLI</span>
      </div>
      <div class="icon-item">
        <div class="icon-box bg-purple-500/20 text-purple-400">
          <UIcon name="i-lucide-settings" class="w-6 h-6" />
        </div>
        <span>Config</span>
      </div>
    </div>

    <!-- Main Window (Editor) -->
    <div class="window window-editor" :class="{ 'window--active': activeWindow === 'code' }" @click="activeWindow = 'code'">
      <div class="window__header">
        <div class="window__controls">
          <span class="dot red" />
          <span class="dot yellow" />
          <span class="dot green" />
        </div>
        <div class="window__title">desktop.config.ts</div>
      </div>
      <div class="window__body">
        <pre><code>{{ configCode }}</code></pre>
      </div>
    </div>

    <!-- Secondary Window (Terminal) -->
    <div class="window window-terminal" :class="{ 'window--active': activeWindow === 'terminal' }" @click="activeWindow = 'terminal'">
      <div class="window__header">
        <div class="window__controls">
          <span class="dot red" />
          <span class="dot yellow" />
          <span class="dot green" />
        </div>
        <div class="window__title">Terminal</div>
      </div>
      <div class="window__body">
        <div class="terminal-line">
          <span class="prompt">~/client $</span>
          <span class="typing">{{ terminalLine }}</span>
          <span class="cursor">_</span>
        </div>
        <div class="terminal-output">
          ┌  Building Nuxt for production...<br>
          ●  Nuxt 4.0.0 (with Nitro 2.9.1)<br>
          ✔  Nitro server built
        </div>
      </div>
    </div>

    <!-- Taskbar -->
    <div class="taskbar">
      <div class="taskbar__start">
        <UIcon name="i-lucide-layout-grid" class="w-5 h-5" />
      </div>
      <div class="taskbar__apps">
        <div class="taskbar__app active"><UIcon name="i-lucide-code" class="w-4 h-4" /></div>
        <div class="taskbar__app"><UIcon name="i-lucide-terminal" class="w-4 h-4" /></div>
        <div class="taskbar__app"><UIcon name="i-lucide-globe" class="w-4 h-4" /></div>
      </div>
      <div class="taskbar__time">12:00 PM</div>
    </div>
  </div>
</template>

<style scoped>
.desktop-mockup {
  position: relative;
  width: 100%;
  height: 480px;
  background: url('/mountains.webp') center/cover no-repeat;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Icons */
.desktop-icons {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s;
}

.icon-item:hover .icon-box {
  transform: scale(1.1);
}

.icon-item span {
  font-size: 10px;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  font-weight: 500;
}

/* Windows */
.window {
  position: absolute;
  background: rgba(30, 31, 46, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
}

.window--active {
  z-index: 20;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  border-color: rgba(0, 220, 130, 0.3);
}

.window-editor {
  top: 40px;
  right: 40px;
  width: 320px;
}

.window-terminal {
  bottom: 80px;
  left: 100px;
  width: 300px;
}

.window__header {
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 12px;
}

.window__controls {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.window__title {
  font-size: 11px;
  color: #a6adc8;
  font-family: var(--font-mono);
}

.window__body {
  padding: 15px;
  font-family: var(--font-mono);
  font-size: 12px;
}

/* Editor Styles */
pre {
  margin: 0;
  color: #cdd6f4;
  line-height: 1.4;
}

/* Terminal Styles */
.terminal-line {
  color: #cdd6f4;
  margin-bottom: 8px;
}
.prompt { color: #a6e3a1; margin-right: 8px; }
.cursor {
  animation: blink 1s infinite;
}
.terminal-output {
  color: #6c7086;
  font-size: 10px;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* Taskbar */
.taskbar {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 15px;
}

.taskbar__start {
  color: white;
  cursor: pointer;
}

.taskbar__apps {
  display: flex;
  gap: 8px;
}

.taskbar__app {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #a6adc8;
  cursor: pointer;
}

.taskbar__app.active {
  background: rgba(0, 220, 130, 0.2);
  color: #00dc82;
  border: 1px solid rgba(0, 220, 130, 0.3);
}

.taskbar__time {
  font-size: 11px;
  color: white;
  margin-left: 10px;
}

@media (max-width: 640px) {
  .window-terminal { display: none; }
  .window-editor { right: 20px; left: 20px; width: auto; }
}
</style>
