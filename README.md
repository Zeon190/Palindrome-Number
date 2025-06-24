# Palindrome Number Checker (Java)

This repository contains a Java application designed to check whether a given number is a **palindrome**.  
A number is considered a palindrome if it reads the same backward as forward (e.g., `121`, `1331`, `12321`).

The project offers two ways to interact with the palindrome logic:  
a classic **console-based application** and a modern **JavaFX Graphical User Interface (GUI)**.

---

## 🚀 Features

### Console Application (`palindrome.java`)

This is the original, simple command-line interface:

- Prompts the user to enter an integer.
- Reverses the entered number using arithmetic operations.
- Compares the reversed number to the original number.
- Displays whether the entered number is a palindrome or not directly in the console.

### JavaFX GUI Application (`PalindromeFXApp.java`)

This is a new, user-friendly graphical interface for checking palindromes:

- Provides an intuitive window for numerical input.
- Features a **"Check Now!"** button for instant validation.
- Dynamically displays the result (palindrome or not) with visual feedback.

---

## 📋 Examples

### Console Application Example:

```bash
$ java palindrome
Enter a number: 121
121 is a Palindrome

$ java palindrome
Enter a number: 112
112 is not a Palindrome
```

### JavaFX GUI Application Example:

Once launched, a window will appear where you can enter numbers and click the **"Check Now!"** button to see the result.

---

## 📂 Project Structure

```
Palindrome-Number/
├── pom.xml                                  # Maven project configuration for GUI
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── module-info.java             # Java Module Declaration for GUI
│   │   │   ├── com/
│   │   │   │   └── palindromeGUI/           # Package for the JavaFX GUI application
│   │   │   │       └── PalindromeFXApp.java # Your JavaFX Application code
│   │   │   └── palindrome.java              # Original Console Application code
│   │   └── resources/                       # (Optional) For FXML, CSS, images, etc.
│   └── test/                                # (Optional) For unit tests
├── .gitignore
└── README.md
```

---
