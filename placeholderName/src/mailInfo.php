<?php

if (isset($_POST["submit"])) {
    // Retrieve the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $message = $_POST["message"];

    if ($tel == "") {
        $tel = "не указан";
    }

    $messageComposed =
        "От: $name" .
        "\r\n" .
        "Почта: $email" .
        "\r\n" .
        "Телефон: $tel" .
        "\r\n" .
        "Сообщение: " .
        "\r\n" .
        "$message";

    $headers = "Content-type: text/html; charset=UTF-8" . "\r\n";

    $messageHTML = nl2br($messageComposed);

    // Create a method to send email

    if (
        mail(
            "info@culinarycup.bcmagazine.by",
            "Формы culinarycup.bcmagazine.by",
            $messageHTML,
            $headers,
        )
    ) {
        header("Location: ./pages/formSuccess.html");
        die();
    } else {
        header("Location: ./pages/formFailure.html");
        die();
    }
}

?>
