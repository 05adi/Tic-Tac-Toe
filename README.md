# Tic-Tac-Toe Web Application

A sleek, responsive **Tic-Tac-Toe** game built using JavaScript, HTML5, and CSS3. This project demonstrates clean DOM manipulation and game state logic with a modern "Glassmorphism" design aesthetic.

## 🚀 Features
* **Real-time Gameplay**: Seamlessly switches turns between Player X and Player O.
* **Win Detection**: Identifies winning combinations and highlights the specific boxes that triggered the win.
* **Tie Handling**: Detects when all grid positions are filled without a winner and declares a draw.
* **Glassmorphism UI**: Utilizes `backdrop-filter` and semi-transparent backgrounds for a modern look.
* **Responsive Grid**: Built with CSS Grid to ensure the game remains functional and visually appealing on various screen sizes.

## 🛠️ Technical Overview

### Game Logic
The core logic relies on a 1D array, `gameGrid`, to track the state of the board. After every move, the script evaluates the board against a set of eight predefined winning positions:

| Type | Winning Indices |
| :--- | :--- |
| **Rows** | `[0, 1, 2]`, `[3, 4, 5]`, `[6, 7, 8]` |
| **Columns** | `[0, 3, 6]`, `[1, 4, 7]`, `[2, 5, 8]` |
| **Diagonals** | `[0, 4, 8]`, `[2, 4, 6]` |

### Key Functions
* `initialize()`: Resets the game state, clears the UI, and prepares the board for a new game.
* `swap()`: Handles the logic for alternating turns between players.
* `checkGameOver()`: Scans the `winningPositions` to determine if a win or tie has occurred.

## 📂 Project Structure
* `index.html`: Contains the structural layout, including the game info display and the $3 \times 3$ grid.
* `style.css`: Manages the visual presentation, utilizing the "Poppins" font and custom CSS properties for the glass effect.
* `index.js`: Manages the game's interactivity, event listeners, and algorithmic logic.

## 🔧 Installation & Usage
1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/tic-tac-toe.git](https://github.com/your-username/tic-tac-toe.git)
    ```
2.  Navigate to the project folder and open `index.html` in your browser.

---
