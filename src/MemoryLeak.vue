<template>
  <div>
    <div class="mb-2">Memory leaking component! ({{ model.data.length }} items)</div>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="copy(model.data.length)">
      Copy data length
    </button>
  </div>
</template>

<script setup lang="ts">
import { ExtraLargeModel } from './models'
import { useClipboard } from '@vueuse/core'

const model = new ExtraLargeModel()

const { copy } = useClipboard()
</script>