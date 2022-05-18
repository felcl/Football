import i18n from "i18next";
import enUsTrans from "./en.json";
import zhCnTrans from "./zh.json";
import {
  initReactI18next
} from 'react-i18next';
export const zh = 'zh'
export const en = 'en'
i18n.use(initReactI18next) //init i18next
.init({
  //引入资源文件
  resources: {
    zh: {
        translation: zhCnTrans
      },
    en: {
        translation: enUsTrans
    }
  },
  //选择默认语言，选择内容为上述配置中的key，即en/zh
  fallbackLng: window.localStorage.getItem("lang") || "en",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})

export default i18n;