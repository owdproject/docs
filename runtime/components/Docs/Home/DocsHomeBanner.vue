<script setup lang="ts">
import {useTemplateRef} from "vue"
import {computed} from "@vue/reactivity"
import {useApplicationManager} from "@owdproject/core/runtime/composables/useApplicationManager"

const applicationManager = useApplicationManager()
const menu = useTemplateRef('menu')

const demoApps = [
  ['org.owdproject.todo', 'todo'],
  ['org.owdproject.debug', 'debug'],
  ['org.owdproject.wasmboy', 'wasmboy'],
];

const menuItems = computed(() => {
  const commands = [];
  demoApps.forEach((app, index) => {
    commands.push({
      label: `Demo ${index + 1}`,
      command: () => applicationManager.execAppCommand(...app)
    });
  });

  return commands;
})

function toggle(event: Event) {
  menu.value?.toggle(event)
}
</script>

<template>
  <div class="owd-docs-container">
    <div class="grid grid-flow-col py-12">
      <div>

        <div class="text-3xl opacity-50">
          A new way to shape digital spaces — for showcasing,<br />
          learning, and building full windowed experiences.
        </div>

      </div>
      <div class="grid items-center justify-end">

        <Button
            type="button" icon="pi pi-ellipsis-v" @click="toggle"
            aria-haspopup="true" aria-controls="overlay_menu"
        >
          <Icon name="mdi:apps" :size="24" />
        </Button>
        <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.p-button {
  width: 56px;
  height: 56px;
}
</style>