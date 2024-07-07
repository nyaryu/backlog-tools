<script lang="ts" setup>
  import {languageStorage} from "@/utils/storage";
  import {defaultLanguage} from "@/data/language";
  import {onBeforeMount, ref, watch} from "vue";

  const language = ref<string>('');

  onBeforeMount(async () => {
    language.value = (await languageStorage.getValue()) ?? defaultLanguage;
  })

  const changeLanguage = () => {
    languageStorage.setValue(language.value);
  };

</script>

<template>
  <div>
    <h2>simple backlog tools</h2>
    <label>Language:</label>
    <input type="radio" id="en" name="languageRadio" value="en" v-model="language" @change="changeLanguage">
    <label for="en">English</label>
    <input type="radio" id="ja" name="languageRadio" value="ja" v-model="language" @change="changeLanguage">
    <label for="ja">Japanese</label>
  </div>
</template>

<style scoped>

</style>
