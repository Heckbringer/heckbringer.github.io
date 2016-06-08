

function getUrlValue(varSearch){
  var searchString = window.location.search.substring(1);
  var variableArray = searchString.split('&');
  for (i = 0; i < variableArray.length; i++) {
    var keyValuePair = variableArray[i].split('=');
    if (keyValuePair[0] == varSearch) {
      return keyValuePair[1];
    }
  }
}

var pageCode = '<!doctype html><html><head><title>Request small file every 2 seconds to test TCP latency</title></head><body><h1>Request small file every 2 seconds to test TCP latency</h1><script type="text/javascript">function sleep(milliseconds){var start = new Date().getTime();var keep_looping = true;while (keep_looping) {if ((new Date().getTime() - start)> milliseconds) {keep_looping = false;}}}</script>'

numberOfImages = 3;
if (getUrlValue("images")) {
  numberOfImages = getUrlValue("images");
}
maxClusters = 10;
if (getUrlValue("iterations")) {
  maxClusters = getUrlValue("iterations");
}
var randomizer = 0;


for (y = 0; y < maxClusters; y++) {
  pageCode = pageCode + '<script>sleep(2000);';

  for (x = 0; x < numberOfImages; x++) {
    if (x != 0) {
      pageCode = pageCode + '<script>';
    }
    pageCode = pageCode + 'document.write("<img src=';
    console.log (pageCode);
    pageCode = pageCode + "'";
    console.log (pageCode);
    pageCode = pageCode + 'https://s.yimg.com/dh/ap/default/130909/y_200_a.png?req='
    console.log (pageCode);
    pageCode = pageCode + ((randomizer + 1) * 2 - 1);
    console.log (pageCode);
    pageCode = pageCode + "rnd=";
    console.log (pageCode);
    pageCode = pageCode + Math.random();
    console.log (pageCode);
    pageCode = pageCode + "'";
    console.log (pageCode);
    pageCode = pageCode + '>");';
    console.log (pageCode);
    randomizer = randomizer + 10;
    pageCode = pageCode + '</script>';
  }
 
        
}

pageCode = pageCode + "</body></html>";
