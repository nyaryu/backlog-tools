import { I18nSchema } from '@/utils/i18n';
import { I18nLocales } from '@/data/types';
import { useI18n } from 'vue-i18n';

export default function () {
  return useI18n<[I18nSchema], I18nLocales>();
}
