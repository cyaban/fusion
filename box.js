document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("image").style.backgroundImage = "url('" + localStorage.getItem('image') + "')";
            document.getElementById("staturl").href = localStorage.getItem('staturl');
            document.getElementById("appname").innerHTML = localStorage.getItem('appname');
        });
