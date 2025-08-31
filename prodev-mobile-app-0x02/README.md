# 📱 ProDev Mobile App 0x02

This project is a simple **React Native (Expo)** application that demonstrates the use of essential components such as **SafeAreaView, Image, ImageBackground, TouchableOpacity, and Dimensions**. The goal is to build a clean and responsive landing screen with a background image, logo, text, and buttons.

---

## 🚀 Objectives
- Learn how to use `SafeAreaView` and `SafeAreaProvider` to handle device notches safely.  
- Set a **full-screen background image** using `ImageBackground` and `Dimensions`.  
- Display a **company logo** at the center.  
- Add **title and description text elements**.  
- Create **styled buttons** with `TouchableOpacity`.  
- Add a **navigation prompt** at the bottom of the screen.  

---

## 🛠️ Setup Instructions

1. **Create a new Expo project**
   ```bash
   npx create-expo-app@latest prodev-mobile-app-0x02
   cd prodev-mobile-app-0x02
Reset any templates

bash
Copia el codi
npm run reset-project
Add images
Move the following files into the assets/images directory:

Logo.png

background-image.png

Your structure should look like:

arduino
Copia el codi
prodev-mobile-app-0x02/
├── app/
│   └── index.tsx
├── assets/
│   └── images/
│       ├── Logo.png
│       └── background-image.png
Install dependencies

bash
Copia el codi
npm install react-native-safe-area-context
Run the project

bash
Copia el codi
npm start
Or with Expo Go:

bash
Copia el codi
npx expo start
