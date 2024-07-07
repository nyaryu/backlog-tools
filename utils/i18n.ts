import { createI18n } from 'vue-i18n';
import { defaultLanguage } from "@/data/language";
import { I18nLocales } from "@/data/types";
import type schema from '~/assets/locales/ja.json';
import messages from '@intlify/unplugin-vue-i18n/messages';


export type I18nSchema = typeof schema;

export default createI18n<[I18nSchema], I18nLocales>({
    locale: defaultLanguage,
    messages: messages as any,
});
