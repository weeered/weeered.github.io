<?php
if (isset($_POST["submit"])) {
    // Retrieve the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $message = $_POST["message"];

    // Set the header variables

    $headers =
        "От : $name" .
        "" .
        "\r\n" .
        "Email: $email" .
        "\r\n" .
        "Телефон: $tel" .
        "\r\n" .
        "Сообщение: $message";

    // Create a method to send email

    if (
        mail(
            "info@culinarycup.bcmagazine.by",
            "Message Form",
            "Message has been sent", 
            $headers
        )
    ) {
        echo "Message sent succesfully";
    } else {
      echo "Message error";
    }
}

?>
