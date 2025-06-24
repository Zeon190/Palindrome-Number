// src/main/java/module-info.java
module com.palindrome.GUI {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.graphics;

    // Open your GUI package to JavaFX for reflection (needed for FXML and app
    // launch)
    opens com.palindrome.GUI to javafx.fxml, javafx.graphics; // Add javafx.graphics for the Application class

    // Export your application's package
    exports com.palindrome.GUI;
}