#!/bin/bash

wget http://code.jquery.com/jquery-2.1.4.min.js -P ./js
wget http://underscorejs.org/underscore-min.js -P ./js
wget http://backbonejs.org/backbone-min.js -P ./js

cat > index.html <<EOL
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Open+Sans:400,600' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>Document</title>
</head>

<body>
  <div class="container">


    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/underscore-min.js"></script>
    <script src="js/backbone-min.js"></script>

    <script>
      // Insert JavaScript in here
    </script>

</body>
</div>


</html>
EOL

cat index.html


cat > styles.css <<EOL
* {
  box-sizing: border-box;
}

h1 {
  font-family: 'Roboto Slab', serif;
  text-align: center;
}

body {
  font-family: 'Open Sans', sans-serif;
}

.container {
  width: 80%;
  margin: 0 auto;
}
EOL
