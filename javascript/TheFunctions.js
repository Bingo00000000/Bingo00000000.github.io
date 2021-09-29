
function changeTab(tabName) {
  var i;
  var x = document.getElementsByClassName("info");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
	
  }
  document.getElementById(tabName).style.display = "block";  
  
}
function changeInsideTab(tabName) {
  var i;
  var x = document.getElementsByClassName("inside");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
	
  }
  document.getElementById(tabName).style.display = "block";  
  
}
function loadInstagram(){
var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
i.src = "https://cdn.curator.io/published/69851c8a-20d1-4611-ab63-4a1805077e39.js";
e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
}
