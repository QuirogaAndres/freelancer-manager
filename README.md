# Freelance Manager

Tu portfolio personal instalable como APK. Sin Play Store.

## Setup

```bash
npm install
npx expo start
```

## Personalizar

**Todo lo que necesitás editar está en UN solo archivo:**
```
src/data/portfolio.js
```

Buscá los comentarios `← TODO` para saber qué cambiar:

```js          
github:   'https://github.com/QuirogaAndres',   
linkedin: 'www.linkedin.com/in/andrés-quiroga-850a92362',     
email:    'andres.quiroga.remote@gmail.com',                    
```


## Generar APK

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

## Estructura

```
portfolio-app/
├── src/
│   ├── data/
│   │   └── portfolio.js   ← ⭐ ÚNICO archivo que editar
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ContactSection.jsx
│   └── screens/
│       └── PortfolioScreen.jsx
```
