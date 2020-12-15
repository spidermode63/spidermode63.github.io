<!DOCTYPE html>
<html>
<head>
  <title>Store form data in .txt file</title>
</head>
<body>
  <form method="post">
    OOGA BOOGA<br>
    <input type="text" name="textdata"><br>
    <input type="submit" name="submit">
    
  </form>

</body>
</html>


<?php
              
if(isset($_POST['textdata']))
{
$data=$_POST['textdata'];

$fp = fopen('data.txt', 'a');

fwrite($fp, $data);
fclose($fp);
}
?>

$.ajax({
        async:false,
        url: 'data.txt',
        dataType: 'text',
        success: function(data) 
        {
        $('element').append(data);
            }
        });