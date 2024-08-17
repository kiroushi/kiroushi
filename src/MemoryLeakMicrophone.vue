<template>
  <div>
    <div class="mb-2">Memory leaking component! ({{ model.data.length }} items)</div>

    {{ microphoneAccess }}
  </div>
</template>

<script setup lang="ts">
import { ExtraLargeModel } from './models'
import { usePermission } from '@vueuse/core'

const microphoneAccess = usePermission('microphone')

const model = new ExtraLargeModel()
</script>