<template>
  <div>Memory safe component ({{ model.data.length }} items)</div>
</template>

<script setup lang="ts">
import { LargeModel } from './models'

const model = new LargeModel()
</script>