<script lang="ts" setup>
  import {languageStorage} from "@/utils/storage";
  import {defaultLanguage} from "@/data/language";
  import {onBeforeMount, ref} from "vue";

  const { t, locale } = useI18n();

  const language = ref<string>('');

  onBeforeMount(async () => {
    language.value = (await languageStorage.getValue()) ?? defaultLanguage;
  })

  const changeLanguage = () => {
    locale.value = language.value as 'en' | 'ja';
    languageStorage.setValue(language.value);
  };

</script>

<template>
  <div>
    <h2>simple backlog tools</h2>
    <label>{{ t('language-label') }} : </label>
    <input type="radio" id="en" name="languageRadio" value="en" v-model="language" @change="changeLanguage">
    <label for="en">{{ t('language-label-en') }}</label>
    <input type="radio" id="ja" name="languageRadio" value="ja" v-model="language" @change="changeLanguage">
    <label for="ja">{{ t('language-label-ja') }}</label>
  </div>
</template>

<style scoped>

</style>
