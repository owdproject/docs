<template>
  <div class="flex items-center gap-2">
    <UButton
      to="https://github.com/topics/owd-apps"
      target="_blank"
      color="neutral"
      variant="ghost"
      icon="i-lucide-package"
      class="hidden lg:inline-flex"
      title="Apps"
    />
    <UButton
      to="https://github.com/topics/owd-themes"
      target="_blank"
      color="neutral"
      variant="ghost"
      icon="i-lucide-palette"
      class="hidden lg:inline-flex"
      title="Themes"
    />
    <UButton
      to="https://github.com/topics/owd-modules"
      target="_blank"
      color="neutral"
      variant="ghost"
      icon="i-lucide-boxes"
      class="hidden lg:inline-flex"
      title="Modules"
    />

    <UButton
      to="/getting-started/introduction"
      color="primary"
      variant="soft"
      size="sm"
      trailing-icon="i-lucide-arrow-right"
      class="hidden sm:inline-flex ml-2"
    >
      Get started
    </UButton>
  </div>
</template>
