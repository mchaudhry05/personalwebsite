var aboutme = document.getElementById('aboutme');
var showaboutme = document.getElementById('showaboutme');
var project = document.getElementById('projects');
var showproject = document.getElementById('showproject');
function start(){
  aboutme.addEventListener('click', function(){
    if(showaboutme.style.display == "none"){
      showaboutme.style.display = "flex";
    }
    else{
        showaboutme.style.display = "none";
    }
  });

  project.addEventListener('click', function(){
    if(showproject.style.display == "none"){
      showproject.style.display = "flex";
    }
    else{
        showproject.style.display = "none";
    }
  });

}

start()
