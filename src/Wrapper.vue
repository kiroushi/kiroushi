<template>
  <div class="p-8">
    <div class="font-semibold text-xl mb-2">Test the memory leak</div>
    <div class="flex gap-4 text-blue-500 underline">
      <RouterLink to="/">Empty</RouterLink>
      <RouterLink to="/memory-safe">Memory safe</RouterLink>
      <RouterLink to="/memory-leak">Memory unsafe</RouterLink>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <router-view />
  </div>
</template>