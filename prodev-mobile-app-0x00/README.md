Here’s the full **`README.md`** file content exactly as you need it 👇

---

## 📂 `README.md`

````markdown
# prodev-mobile-setup – App 0x00

## 🎯 Objective
Set up a first mobile application using the **Expo Router** template, understand its file structure, and document the scaffolding process.

---

## 🚀 Steps for Scaffolding

1. **Navigate to project directory**
   ```bash
   cd prodev-mobile-setup
````

2. **Initialize Expo Router project**

   ```bash
   npx create-expo-app@latest .
   ```

   * Selected the **Expo Router template** when prompted.
   * This created the base React Native application with routing support.

3. **Modify the Home Screen**

   * Opened `app/(tabs)/index.tsx`.
   * Changed:

     ```tsx
     <Text>Welcome!</Text>
     ```

     to

     ```tsx
     <Text> First App Created </Text>
     ```

4. **Run the development server**

   ```bash
   npx expo start
   ```

   * On **iOS**: scanned QR code with Camera app.
   * On **Android**: scanned QR code with **Expo Go**.

---

## 🔄 Resetting the Project

Ran:

```bash
npm run reset-project
```

### 🔍 Observations

* The script **clears Metro bundler’s cache** and **resets node\_modules**.
* Removes temporary build files, cached assets, and watchman state.
* After reset, the app reloads as if it’s freshly initialized.
* Useful for fixing issues caused by caching or corrupted dependencies.

---

## 📁 File Structure Overview

After scaffolding, the main directories/files are:

```
app-example/
 ├─ app/
 │   ├─ (tabs)/
 │   │   └─ index.tsx   # Home screen (modified text here)
 │   └─ _layout.tsx     # Router layout
 ├─ constants/
 │   └─ Colors.tsx      # Theme colors
 ├─ assets/             # Images, fonts, icons
 ├─ package.json
 ├─ README.md           # Project documentation
```

---

## ✅ Deliverables

* **README.md** (this file)
* **Modified file:** `app-example/app/(tabs)/index.tsx`
* **Supporting file:** `app-example/constants/Colors.tsx`
