// 🌐 MAGICAT LANGUAGE SYSTEM (READY TO UPLOAD)

const translations = {
  id: {
    welcome: "Selamat datang di MAGICAT",
    buy: "Beli MAGICAT",
    join: "Gabung Komunitas",
    login: "Login",
    register: "Daftar",
    dashboard: "Dashboard",
    logout: "Keluar",
    settings: "Pengaturan"
  },

  en: {
    welcome: "Welcome to MAGICAT",
    buy: "Buy MAGICAT",
    join: "Join Community",
    login: "Login",
    register: "Register",
    dashboard: "Dashboard",
    logout: "Logout",
    settings: "Settings"
  },

  jp: {
    welcome: "MAGICATへようこそ",
    buy: "購入",
    join: "参加",
    login: "ログイン",
    register: "登録",
    dashboard: "ダッシュボード",
    logout: "ログアウト",
    settings: "設定"
  },

  cn: {
    welcome: "欢迎来到MAGICAT",
    buy: "购买",
    join: "加入社区",
    login: "登录",
    register: "注册",
    dashboard: "仪表板",
    logout: "退出",
    settings: "设置"
  },

  ar: {
    welcome: "مرحبا بكم في MAGICAT",
    buy: "شراء",
    join: "انضم",
    login: "تسجيل الدخول",
    register: "تسجيل",
    dashboard: "لوحة التحكم",
    logout: "تسجيل الخروج",
    settings: "الإعدادات"
  },

  ru: {
    welcome: "Добро пожаловать",
    buy: "Купить",
    join: "Присоединиться",
    login: "Войти",
    register: "Регистрация",
    dashboard: "Панель",
    logout: "Выйти",
    settings: "Настройки"
  },

  br: {
    welcome: "Bem-vindo",
    buy: "Comprar",
    join: "Entrar",
    login: "Entrar",
    register: "Registrar",
    dashboard: "Painel",
    logout: "Sair",
    settings: "Configurações"
  }
};

// 🌐 GET LANGUAGE
export function getLang(){
  return localStorage.getItem("lang") || "id";
}

// 🌐 SET LANGUAGE
export function setLang(lang){
  localStorage.setItem("lang", lang);
  location.reload();
}

// 🌐 TRANSLATE
export function t(key){
  const lang = getLang();
  return translations[lang]?.[key] || translations.en[key] || key;
}

// 🌐 AUTO APPLY KE SEMUA ELEMENT
export function applyLang(){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = t(key);
  });
}