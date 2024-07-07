import { languageStorage } from "@/utils/storage";
import { defaultLanguage } from "@/data/language";

export default defineBackground(async() => {
    await languageStorage.setValue(defaultLanguage);
});
