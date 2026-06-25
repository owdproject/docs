<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <p class="docs-footer-line">
    Copyright © {{ year }}
    ·
    <a
      href="https://github.com/owdproject/client"
      target="_blank"
      rel="noopener noreferrer"
      class="docs-footer-brand"
    >Open Web Desktop</a>
    ·
    <a
      href="https://github.com/owdproject/client"
      target="_blank"
      rel="noopener noreferrer"
    >Get it now</a>
    ·
    <a
      href="https://github.com/sponsors/owdproject"
      target="_blank"
      rel="noopener noreferrer"
    >Support</a>
  </p>
</template>