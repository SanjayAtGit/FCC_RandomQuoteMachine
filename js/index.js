  $(document).ready(function() {
    $("#getNextQuote").on("click", function() {
      $.getJSON("https://api.myjson.com/bins/22tbx",function(json) {
          var html = "";
          var keys = "";
          var values = [];
          var randomNum = 0;
          json.forEach(function(val) {
            keys = Object.keys(val);
            keys.forEach(function(key) {
              values.push(val[key]);
            });
          });
        html += "<div>"; 
        randomNum = Math.floor(Math.random() * values.length);
        html += values[randomNum];
        html += "</div>"; 
      $(".quote").html(html);
      });
    });
  });