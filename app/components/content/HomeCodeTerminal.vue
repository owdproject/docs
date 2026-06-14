<script setup lang="ts">
const command = 'npm create owd@latest'
const copied = ref(false)

function copy() {
  navigator.clipboard.writeText(command)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<template>
  <div class="code-terminal" @click="copy">
    <div class="code-terminal__content">
      <span class="prompt">$</span>
      <span class="command">{{ command }}</span>
    </div>
    <div class="code-terminal__action">
      <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'" class="w-4 h-4" :class="{ 'text-green-400': copied }" />
    </div>
    
    <!-- Tooltip hint -->
    <div class="code-terminal__hint">Click to copy</div>
  </div>
</template>

<style scoped>
.code-terminal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #181825;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 20px;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: all 0.2s;
  max-width: 400px;
  margin: 2rem 0;
}

.code-terminal:hover {
  border-color: #079b9b;
  background: #1e1e2e;
  transform: translateY(-2px);
}

.code-terminal__content {
  display: flex;
  gap: 12px;
  font-size: 14px;
}

.prompt {
  color: grey;
  user-select: none;
}

.command {
  color: #cdd6f4;
}

.code-terminal__action {
  color: #6c7086;
}

.code-terminal:hover .code-terminal__action {
  color: #a6adc8;
}

.code-terminal__hint {
  position: absolute;
  top: -25px;
  right: 0;
  font-size: 10px;
  color: #6c7086;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0;
  transition: opacity 0.2s;
}

.code-terminal:hover .code-terminal__hint {
  opacity: 1;
}
</style>
