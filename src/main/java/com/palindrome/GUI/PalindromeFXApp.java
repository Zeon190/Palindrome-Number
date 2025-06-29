package com.palindrome.GUI; //package for the JavaFX app

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.stage.Stage;

public class PalindromeFXApp extends Application {

    private TextField numberInput;
    private Label resultLabel;

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("🔢 Palindrome Checker");

        Label titleLabel = new Label("Is it a Palindrome?");
        titleLabel.setFont(Font.font("Arial", FontWeight.BOLD, 24));
        titleLabel.setTextFill(Color.DARKBLUE);

        Label instructions = new Label("Enter a whole number:");
        instructions.setFont(Font.font("Arial", FontWeight.NORMAL, 14));

        numberInput = new TextField();
        numberInput.setPromptText("e.g., 121, 565");
        numberInput.setMaxWidth(250);
        numberInput.setFont(Font.font("Arial", FontWeight.NORMAL, 16));
        numberInput.setAlignment(Pos.CENTER);

        Button checkButton = new Button("Check Now!");
        checkButton.setFont(Font.font("Arial", FontWeight.BOLD, 16));
        checkButton.setPrefWidth(150);
        checkButton.setStyle("-fx-background-color: #4CAF50; -fx-text-fill: white; -fx-background-radius: 5;");

        resultLabel = new Label("Enter a number above to check.");
        resultLabel.setFont(Font.font("Arial", FontWeight.BOLD, 18));
        resultLabel.setTextFill(Color.GRAY);

        checkButton.setOnAction(e -> checkPalindrome());

        VBox root = new VBox(15);
        root.setAlignment(Pos.CENTER);
        root.setPadding(new Insets(30));
        root.setStyle("-fx-background-color: #F0F8FF;");

        root.getChildren().addAll(titleLabel, instructions, numberInput, checkButton, resultLabel);

        Scene scene = new Scene(root, 450, 300);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    // --- Palindrome Logic (Copied from the original, but extracted to a reusable
    // method) ---
    private boolean isPalindrome(int number) {
        int originalNumber = number; // Renamed 'b' to 'originalNumber' for clarity
        int reversedNumber = 0; // Renamed 's' to 'reversedNumber' for clarity

        while (number > 0) {
            int remainder = number % 10;
            reversedNumber = (reversedNumber * 10) + remainder;
            number = number / 10;
        }
        return originalNumber == reversedNumber;
    }

    // --- Action when Check Button is Pressed ---
    private void checkPalindrome() {
        String input = numberInput.getText().trim();
        if (input.isEmpty()) {
            resultLabel.setText("Please enter a number!");
            resultLabel.setTextFill(Color.ORANGE);
            return;
        }

        try {
            int number = Integer.parseInt(input);
            // ⭐⭐⭐ Calling the internal isPalindrome method ⭐⭐⭐
            if (isPalindrome(number)) {
                resultLabel.setText(number + " is a PALINDROME! 🎉");
                resultLabel.setTextFill(Color.web("#28A745"));
            } else {
                resultLabel.setText(number + " is NOT a palindrome. 😢");
                resultLabel.setTextFill(Color.web("#DC3545"));
            }
        } catch (NumberFormatException ex) {
            resultLabel.setText("Invalid input! Please enter a valid number.");
            resultLabel.setTextFill(Color.RED);
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}