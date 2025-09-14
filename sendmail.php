<?php
  use PHPMailer\PHPMaier\PHPMaier;
  use PHPMailer\PHPMaier\Exception;

  require 'libraries/PHPMailer-6.10.0/src/Exception.php'
  require 'libraries/PHPMailer-6.10.0/src/PHPMailer.php'

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'libraries/phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('roma.mitrofanov.12@mail.ru')
  $mail->addAddress('mitrofanovan@mail.ru')
  $mail->setFrom('Новый клиент хочет связаться с тобой!')

  $body = '<h1>Заголовок письма</h1>'
  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя: </strong>'.$_POST['name'].'</p> '
  }
  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email: </strong>'.$_POST['email'].'</p> '
  }
  if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение: </strong>'.$_POST['message'].'</p> '
  }

  $mail->Body = $body;

  if (!$mail->send()){
    $message = 'Ошибка!';
  } else{
    $message = 'Данные отправлены!';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);