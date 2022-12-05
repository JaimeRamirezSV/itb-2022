# Quasar App (itb-2022)

## Instalar dependencias

```bash
npm install
```

### Encender servidor SPA dev

```bash
quasar dev
```

### Configurar iconos para android e ios

## Instalar Capacitor

```bash
quasar mode add capacitor
```
```bash
cd src/capacitor
```
```bash
npx cap add android
```
```bash
npx cap add ios
```

## Permisos para Capasitor en mac

```bash
sudo chmod +x src-capacitor/node_modules/@capacitor/cli/bin/capacitor
```
```bash
sudo chmod +x src-capacitor/ios/App/Pods/Target\ Support\ Files/Pods-App/Pods-App-frameworks.sh
```
```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

## Generar icons para android y ios
```bash
https://appicon.co
```

## Reemplazar imagenes de:

```bash
src-capacitor/android/app/src/main/res/
```
```bash
src-capacitor/ios/App/App/Assets.xcassets/AppIcon.appiconset
```