# 🎮 Tic-Tac-Toe: 3-in-a-Row Champion

> **Modern twist on the timeless classic** – Enhanced Tic-Tac-Toe with immersive audio, smooth animations, and clean UI.


## ✨ Features

- **🎭 Custom Player Names** – Personalized gaming experience
- **🎵 Rich Audio** – Background music, click sounds, victory celebrations
- **🎨 Responsive Design** – Works beautifully on any device
- **⚡ Pure JavaScript** – No frameworks, maximum performance
- **🔄 Smart Controls** – Rematch or restart with new players

## 🚀 Quick Start

```bash
# Clone and play instantly
git clone https://github.com/yourusername/tic-tac-toe-game.git
cd tic-tac-toe-game
open index.html
```

1. Enter player names → Start Game → Play!
2. Get 3 in a row to win 🎉
3. Use "Rematch" or "Start Over" for more games

## 📁 Project Structure

```
tic-tac-toe-game/
├── index.html          # Player setup screen
├── game.html           # Main game board  
└── assets/
    ├── css/            # Styling
    ├── js/             # Game logic
    └── audio/          # Sound effects
```

## 🛠️ Tech Stack

- **HTML5** – Structure & forms
- **CSS3** – Styling & animations  
- **JavaScript** – Game logic & interactivity
- **Font Awesome** – UI icons

## 🎓 What I Learned

### Object-Oriented Programming (OOP) Concepts

**Constructor Functions vs Classes:**
- Used constructor function `Player(name, symbol)` for simple objects
- Implemented ES6 `class Game` for complex game logic with multiple methods
- Learned when to use each approach based on complexity needs

**Real Implementation:**
```javascript
// Constructor function for simple data objects
function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
}

// ES6 Class for complex behavior
class Game {
    constructor() {
        this.cells = document.querySelectorAll('.cell');
        this.currentPlayer = player1;
        this.gameOver = false;
    }
    
    updateCell(i) { /* handles moves */ }
    checkwinner() { /* win detection logic */ }
    switchPlayer() { /* alternates turns */ }
}
```

**Encapsulation in Practice:**
- All game state (cells, currentPlayer, gameOver) contained within Game class
- Methods like `backgroundColorWin()` handle specific UI updates internally
- Audio controls encapsulated with `playAudio()` and `stopAudio()` methods

**Method Organization:**
- **Game Flow:** `startGame()`, `rematchGame()`, `startOver()`
- **Game Logic:** `updateCell()`, `checkwinner()`, `switchPlayer()`
- **UI Updates:** `backgroundColorWin()`, status text updates
- **Audio Management:** `playAudio()`, `stopAudio()` with volume control

**Key OOP Benefits Experienced:**
- **State Management** – Game state centralized, preventing inconsistencies
- **Method Reusability** – `backgroundColorWin()` used for all winning combinations
- **Code Organization** – Clear separation between player data and game behavior
- **Event Handling** – Arrow functions `() =>` maintain proper `this` context in callbacks

### JavaScript Fundamentals Reinforced

- **URL Parameters** – Used `URLSearchParams` to pass player data between pages
- **Event Handling** – Arrow functions `() =>` for proper `this` binding in class methods
- **DOM Manipulation** – Dynamic content updates, style changes, class toggling
- **Array Methods** – `forEach()` for iterating cells and checking game state
- **Conditional Logic** – Complex win condition checking with multiple if-else statements
- **Asynchronous Programming** – `setTimeout()` for loading animations and transitions

### Technical Challenges Overcome

**Cross-Page Data Transfer:**
- Learned URL parameters to pass player names between HTML pages
- Implemented proper parameter parsing with `window.location.href`

**Audio Integration:**
- Managed multiple audio files (background music, clicks, victory sounds)
- Handled browser audio policies requiring user interaction
- Implemented volume controls and audio state management

**Event Context Issues:**
- Solved `this` binding problems using arrow functions in event listeners
- Learned difference between regular functions and arrow functions in class methods

## 🌟 Perfect For

- **Learning OOP concepts** in vanilla JavaScript
- **Portfolio projects** showcasing clean code architecture
- **Understanding game development** fundamentals
- **Practicing DOM manipulation** without frameworks

## 🤝 Contributing

Improvements welcome! Focus areas:
- 🎮 Game variants (larger boards, AI opponent)
- 🎨 Theme customization
- ♿ Accessibility enhancements

---

<div align="center">

**[Play Now](https://abdirxhmxn.github.io/tic-tac-toe)** | **[View Code](https://github.com/abdirxhmxn/tic-tac-toe)**

*Built with ❤️ to explore OOP in JavaScript*

</div>
