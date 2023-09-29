document.write(new Date().toLocaleString());
setInterval(function(){document.getElementById('time').innerHTML = new Date().toLocaleString();}, 1000);