import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
      'main tab': 'Main',
      'map tab': 'Map',
      'history tab': 'History',
      'settings tab': 'Settings',
      'sign out': 'Sign Out',
      'locked status': 'Locked',
      'unlocked status': 'Unlocked',
      'open map': 'Open map',
      'action field': 'Action',
      'time field': 'Time',
      'user field': 'User',
      'Car was locked': 'Car was locked',
      'Car was unlocked': 'Car was unlocked',
      'signed in': 'signed in',
      'signed up': 'signed up',
      'signed out': 'signed out',
      'sign out msg': 'Are you sure you want to sign out?',
      'y msg': 'Yes',
      'cancel msg': 'Cancel',
      'change lng': 'Change language',
      'name field': 'Name',
      'email field': 'Email',
      'password field': 'Password',
      'sign in': 'Sign In',
      'sign up': 'Sign Up',
      'no acc': `Don't have an account?`,
      'yes acc': `Already have an account?`,
    },
  },
  ru: {
    translation: {
      'Welcome to React': 'Добро пожаловать',
      'main tab': 'Главная',
      'map tab': 'Карта',
      'history tab': 'Журнал',
      'settings tab': 'Настройки',
      'sign out': 'Выйти',
      'locked status': 'Закрыто',
      'unlocked status': 'Открыто',
      'open map': 'Открыть карту',
      'action field': 'Действие',
      'time field': 'Время',
      'user field': 'Пользователь',
      'Car was locked': 'Автомобиль закрыт',
      'Car was unlocked': 'Автомобиль открыт',
      'signed in': 'вошёл',
      'signed up': 'зарегестрировался',
      'signed out': 'вышел',
      'sign out msg': 'Вы уверены, что хотите выйти?',
      'y msg': 'Да',
      'cancel msg': 'Отмена',
      'change lng': 'Сменить язык',

      'name field': 'Имя',
      'email field': 'Эл. почта',
      'password field': 'Пароль',
      'sign in': 'Войти',
      'sign up': 'Зарегистрироваться',
      'no acc': `Нет аккаунта?`,
      'yes acc': `Уже есть аккаунт?`,
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
