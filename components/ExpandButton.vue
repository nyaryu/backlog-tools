<script setup lang="ts">

  const { t } = useI18n();

  const expandGanttChart = () => {
    document.querySelectorAll('.gantt-table').forEach((el) => {
      (el as HTMLElement).removeAttribute('style')
    });
  };

</script>

<template>
  <div>
    <input type="button" @click="expandGanttChart" :value="t('expand-button')" class="expand-button">
  </div>
</template>

<style scoped>
.expand-button{
  background-color: #ffffff;
  border: solid 2px #adadad;;
  color: #00759b;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 15px;
  border-radius: 4px;
  font-size: 1.4rem;
  line-height: 2.8rem;
  min-height: 2.8rem;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  outline: 0;
}
</style>
