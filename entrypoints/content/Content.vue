<script setup lang="ts">
import CollapseButton from '@/components/CollapseButton.vue';
import ExpandButton from '@/components/ExpandButton.vue';
</script>

<template>
  <div class="plugin-content">
    <CollapseButton/>
    <ExpandButton/>
  </div>
</template>

<style scoped>
.plugin-content{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
