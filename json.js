var gifs;

var api = 'http://api.giphy.com/v1/gifs/search?q=';
var apiKey = '&api_key=dc6zaTOxFJmzC';

var input;

function setup() {
  noCanvas();
  noLoop();

  var button = select('#search');
  button.mousePressed(apiAsk);

  input = select('#searchterm');  
}

function apiAsk() {
  var url = api + input.value() + apiKey ;
  loadJSON(url, gotData);

  removeElements();
}

function gotData(data) {
  gifs = data;

  //console.log(gifs);
  //console.log(gifs.data[0].images.original.url);

  createElement('h2', input.value() );  //make an <h2> element

  for( var i=0; i< gifs.data.length; i++) {
    //createImg( gifs.data[i].images.original.url ); //original size
    createImg( gifs.data[i].images.fixed_height.url ); //fixed_height
    //img elements are being styled in the html page, under the <style> tag

    //createA(gifs.data[i].images.original.url, createImg(gifs.data[i].images.fixed_height.url), '_blank' );
    //above is a failed attempt to create a link around the image

  }
  createElement('br', 'text'); //insert line-break <br>
  createElement('br');
  createElement('br');
  createElement('br');

}

function wiki() {
         $("#searchterm").keyup(function(e){
        var q = $("#searchterm").val();
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          $("#results").append("<p>Results for <b>" + q + "</b></p>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a><br>" + item.snippet + "<br><br></div>");
          });
        });
      });
    }
