# 🎮 GameHub – Simple Gaming Website

GameHub is a beginner-friendly **gaming website** developed using **HTML, CSS, and JavaScript**.  
This project is designed as a **semester project** and includes multiple mini-games with a clean user interface and basic game logic.

The purpose of this project is to understand:
- Frontend web development
- JavaScript game logic
- User interaction handling
- Basic project structuring

---

## 🚀 Features

- 🎨 Clean and simple UI
- 🏠 Home page with project overview
- 🎲 Games listing page
- 🐍 Fully functional Snake Game
  - Wall collision detection
  - Self-collision detection
  - Score tracking
  - Game over handling
- ❌ Tic Tac Toe Game
  - Two-player mode
  - Win detection
  - Draw detection
  - Restart option
- 🔙 Styled Back buttons for easy navigation
- 📱 Beginner-friendly and lightweight (no backend)

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home Page](gaming/images/home.png)

### 🎮 Games Page
![Games Page](gaming/images/games.png)

### ❌ Tic Tac Toe Game
![Tic Tac Toe](gaming/images/tictactoe.png)

---

## 🧩 Technologies Used

- **HTML5** – Structure of the website
- **CSS3** – Styling and layout
- **JavaScript (Vanilla)** – Game logic and interactivity
- **Canvas API** – Used for Snake game rendering

---

## 📁 Project Structure
```bash
GameHub/
│
├── index.html # Home Page
├── games.html # Games Listing Page
├── style.css # Common styling
│
├── games/
│ ├── snake/
│ │ ├── snake.html # Snake game UI
│ │ ├── snake.css # Snake game styling
│ │ └── snake.js # Snake game logic
│ │
│ ├── tictactoe/
│ │ ├── tictactoe.html # Tic Tac Toe UI
│ │ ├── tictactoe.css # Tic Tac Toe styling
│ │ └── tictactoe.js # Tic Tac Toe logic
│
└── gaming/
└── images/
├── home.png
├── games.png
└── tictactoe.png
```

---

## 🐍 Snake Game – Logic Overview

**Game Flow:**

```bash

Start Game
↓
Move Snake
↓
Check Collision
├── Wall → Game Over
├── Self → Game Over
└── Food → Increase Score


**Key Concepts Used:**
- Canvas rendering
- Keyboard input handling
- Collision detection
- Game loop using `setInterval()`
```
---

## ❌ Tic Tac Toe – Logic Overview

**Game Flow:**
```bash


Player Turn
↓
Place Mark
↓
Check Winner
├── Win → Show Winner
├── Draw → Show Draw
└── Continue Game

```
**Winning Conditions:**
- Rows
- Columns
- Diagonals

---

## 📊 System Diagram (High-Level)

```bash

User
│
▼
Browser
│
▼
HTML Pages
│
├── CSS (Styling)
│
└── JavaScript
├── Snake Logic
└── Tic Tac Toe Logic

```
---

## 🎯 Learning Outcomes

Through this project, I learned:
- How to structure a frontend project
- How JavaScript controls game behavior
- How to handle user input
- How basic games work logically
- How to manage navigation between pages

---

## 🧪 How to Run the Project

1. Download or clone the project
2. Open the `GameHub` folder
3. Double-click `index.html`
4. Play games directly in your browser  
   ✅ No installation required

---

## 📌 Future Improvements

- Add AI to Tic Tac Toe
- Add sound effects
- Add high score system
- Improve animations
- Add user authentication

---

## 👨‍🎓 Project Information

- **Project Type:** Semester Project
- **Category:** Web-Based Gaming Website
- **Difficulty Level:** Beginner
- **Technologies:** HTML, CSS, JavaScript

---

## 📜 License

This project is created for **educational purposes only**.

---

### ⭐ Thank you for checking out GameHub!