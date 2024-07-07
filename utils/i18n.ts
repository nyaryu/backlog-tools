import { createI18n } from 'vue-i18n';
import type schema from '~/assets/locales/ja.json';
import messages from '@intlify/unplugin-vue-i18n/messages';
import {defaultLanguage} from "@/data/language";

export type I18nSchema = typeof schema;
export type I18nLocales = 'ja' | 'en';

export default createI18n<[I18nSchema], I18nLocales>({
    locale: defaultLanguage,
    messages: messages as any,
});
