import { storage } from "wxt/storage";
import { I18nLocales } from "@/data/types";

export const languageStorage =
    storage.defineItem<I18nLocales>("local:language")
