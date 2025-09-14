<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libraries/PHPMailer-6.10.0/src/Exception.php';
require 'libraries/PHPMailer-6.10.0/src/PHPMailer.php';
require 'libraries/PHPMailer-6.10.0/src/SMTP.php'; // Добавьте эту строку

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'libraries/phpmailer/language/');
$mail->IsHTML(true);

// Настройки SMTP (обязательно!)
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru'; // SMTP сервер mail.ru
$mail->SMTPAuth = true;
$mail->Username = 'uncertaint00@mail.ru'; // Ваш email
$mail->Password = 'Berkut1504'; // Ваш пароль от почты
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

// Настройки отправителя и получателя
$mail->setFrom('roma.mitrofanov.12@mail.ru', 'Форма обратной связи');
$mail->addAddress('mitrofanovan@mail.ru');
$mail->Subject = 'Новый клиент хочет связаться с тобой!';

// Формирование тела письма
$body = '<h1>Новое сообщение с формы</h1>';
if(!empty(trim($_POST['name']))){
    $body .= '<p><strong>Имя: </strong>'.htmlspecialchars($_POST['name']).'</p>';
}
if(!empty(trim($_POST['email']))){
    $body .= '<p><strong>Email: </strong>'.htmlspecialchars($_POST['email']).'</p>';
}
if(!empty(trim($_POST['message']))){
    $body .= '<p><strong>Сообщение: </strong>'.htmlspecialchars($_POST['message']).'</p>';
}

$mail->Body = $body;

// Отправка
$response = [];
try {
    $mail->send();
    $response['message'] = 'Данные отправлены!';
} catch (Exception $e) {
    $response['message'] = 'Ошибка отправки: ' . $mail->ErrorInfo;
}

header('Content-type: application/json');
echo json_encode($response);
?>