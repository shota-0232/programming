<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Ajax練習</title>
</head>
<body>
  
  <form method="post" action="" class="formArea js-formArea">
    <div id="ajaxArea" class="js-set-html">
      <p>ここだけが入れ替わります。</p>
      <h1>
        名前は<span class="js-set-name"></span>です。
        年齢は<span class="js-set-age"></span>です。
      </h1>
    </div>
    <p><?php echo date('Y/M/d H:i:s'); ?></p>
    名前
    <input type="text" name="name" class="inputText js-get-val-name" autocomplete="off">
    年齢
    <input type="number" name="age" class="inputText inputText--s js-get-val-age" autocomplete="off">

    <input type="submit" value="送信" class="btn">
  </form>

  <!--jQuery-->
  <script 
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" 
    integrity="sha512-3P8rXCuGJdNZOnUx/03c1jOTnMn3rP63nBip5gOP2qmUh5YAdVAvFZ1E+QLZZbC1rtMrQb+mah3AfYW11RUrWA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="app.js"></script>
</body>
</html>