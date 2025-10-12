# 🧭 Mine 💣

Welcome to the **10x10 Grid Challenge**! Your mission is to find the single **safe path** from one side of the grid to the other.

Every square in the grid is a **Mine (💣)** except for the safe route.

## The Rules of Movement 🚶

1.  The grid is a **10x10** square of coordinates (e.g., A1 to J10).
2.  You must start from the first row or column and travel to the opposite side.
3.  You can only move to a **"nearest hub"**—meaning you can move **Horizontally** or **Vertically** to an adjacent square. **Diagonal moves are not allowed.**
4.  If you step on a **Mine (💣)** the game is immediately over.
5.  If you successfully find the safe path to the opposite side you win.

---

## 🗺️ The Grid Map (Example)

The grid below shows the layout. The **green path (✅)** is the safe route. The **red squares (💣)** are mines.

| **0** | 1  | 2 | 3  | 4 | 5  | 6 | 7  | 8 | 9  | 10 |
| :---: |:---|---|:---|---|:---|---|:---|---|:---|---|
| **A** | ✅ | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 |
| **B** | ✅ | ✅ | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 |
| **C** | 💣 | ✅ | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 |
| **D** | 💣 | ✅ | ✅ | ✅ | ✅ | ✅ | 💣 | 💣 | 💣 | 💣 |
| **E** | 💣 | 💣 | 💣 | 💣 | 💣 | ✅ | 💣 | 💣 | 💣 | 💣 |
| **F** | 💣 | 💣 | 💣 | 💣 | 💣 | ✅ | 💣 | 💣 | 💣 | 💣 |
| **G** | 💣 | 💣 | 💣 | 💣 | 💣 | ✅ | 💣 | 💣 | 💣 | 💣 |
| **H** | 💣 | 💣 | 💣 | 💣 | 💣 | ✅ | ✅ | 💣 | 💣 | 💣 |
| **I** | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | ✅ | ✅ | ✅ | 💣 |
| **J** | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | 💣 | ✅ | ✅ |

*(Note: In the actual game the player would only see the blank 10x10 grid. This visual is for demonstration only.)*

---

## **Example Gameplay Walkthrough**

**Goal:** Travel from Row A (Start) to Row J (Finish).

| Player Move | Coordinate | Status | Reason |
| :---: | :---: | :---: | :---: |
| **Start** | A1 | Safe | The start point is always safe. |
| **Move 1** | B1 | Safe | Moved **Vertically** from A1. |
| **Move 2** | B2 | Safe | Moved **Horizontally** from B1. |
| **Move 3** | C2 | Safe | Moved **Vertically** from B2. |
| **Move 4** | C3 | Mine 💣 | **Game Over!** You stepped on a mine. You should have moved to D2. |

## Moves 
left 
right
up
down

special cases for edge element;
