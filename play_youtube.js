const {TextInput, WebView, ui} = require('tabris');

// Create a web view to show a web page
const YOU_TUBE_VID ='<iframe width="560" height="315" src="https://www.youtube.com/embed/Qe_TTI64fJA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>;'

let BOOTTEMPLATE = '<!DOCTYPE html><html lang="en"><head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>??? Enter YOUR TITLE HERE</title> <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"> <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script> <link rel="shortcut icon" href="/path/to/icons/favicon.ico"> <link rel="icon" type="image/png" href="/path/to/icons/favicon-192x192.png" sizes="192x192"> <link rel="apple-touch-icon" sizes="180x180" href="/path/to/icons/apple-touch-icon-180x180.png"> <style>body{/* for nav bar*/ margin-top: 50px;}h1{color: #f00;}img{padding: 50px;}</style></head><body> <nav class="navbar navbar-inverse navbar-fixed-top"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">Project name</a> </div><div id="navbar" class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <li class="active"><a href="#">Home</a></li><li><a href="#about">About</a></li><li><a href="#contact">Contact</a></li></ul> </div></div></nav> <div class="container"> <h1>Hello World !</h1> <div class="row"> <div class="col-md-4"> <h2>About me</h2> <img src="http://100-pics.net/images/answers/en/movieheroes/movieheroes_30145_618109.jpeg" class="img-circle img-responsive" alt="Shrek"> <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class="btn btn-default" href="#" role="button">View details »</a></p></div><div class="col-md-4"> <h2>Heading</h2> <h3> Responsive 16:9 YouTube </h3> <div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe> </div><i class="fa fa-graduation-cap fa-5x" aria-hidden="true"></i> <i class="fas fa-chess fa-5x"></i> <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class="btn btn-default" href="#" role="button">View details »</a></p></div><div class="col-md-4"> <h2>Heading</h2> <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><p><a class="btn btn-default" href="#" role="button">View details »</a></p></div></div><hr> <footer class="text-center"> <p><a href="http://facebook.com/"><i class="fab fa-facebook-square fa-2x" ></i></a></p><p>© 2018 Company, Inc.</p></footer> </div><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script></body></html>';

let urlInput = new TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  text: 'http://en.wikipedia.org'
}).on('accept', loadUrl)
  .appendTo(ui.contentView);

let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(ui.contentView);

function loadUrl() {
  webView.html = BOOTTEMPLATE;
}

loadUrl();
