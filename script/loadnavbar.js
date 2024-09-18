document.addEventListener("DOMContentLoaded",
function(){
    fetch('navbar.html')
    .then(Response=>Response.text())
    .then(data=>{document.getElementById('navbar-container')
        .innerHTML=data;
    });
});