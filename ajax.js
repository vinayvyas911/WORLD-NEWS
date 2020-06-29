
function loadNews() {


  if (window.XMLHttpRequest) {
      
      xmlhttp = new XMLHttpRequest();
   } else {
      
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  document.getElementsByClassName("news").innerHTML = "whoearowef";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementsByClassName("news").innerHTML = this.responseText;
    }
  };
  query = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=caa359513aa44094b95af4fb399e2da8";
  xmlhttp.open("GET", query, true);
  xmlhttp.send();
}
