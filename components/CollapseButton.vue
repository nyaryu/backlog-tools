<script setup lang="ts">

const collapseGanttChart = () => {
  document.querySelectorAll('.gantt-table').forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });
};

</script>

<template>
  <div>
    <input type="button" @click="collapseGanttChart" value="collapse" class="collapse-button">
  </div>
</template>

<style scoped>
.collapse-button{
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
