# 📄 Portfolio App

Tu portfolio personal instalable como APK. Sin Play Store.

## 🚀 Setup

```bash
npm install
npx expo start
```

## ✏️ Personalizar

**Todo lo que necesitás editar está en UN solo archivo:**
```
src/data/portfolio.js
```

Buscá los comentarios `← TODO` para saber qué cambiar:

```js
photo:    null,           // ← TODO: URL de tu foto
github:   'https://github.com/tu-usuario',   // ← TODO
linkedin: 'https://linkedin.com/in/...',     // ← TODO
email:    'tu@email.com',                    // ← TODO
whatsapp: '+591XXXXXXXXX',                   // ← TODO
```

Para cambiar la foto, podés:
- Ponerle la URL de una foto online: `photo: 'https://...'`
- O dejar `null` para mostrar las iniciales AQ

## 📱 Generar APK

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

## 📁 Estructura

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
