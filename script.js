function start(){
  if (!window.getComputedStyle) {
    // Fallback for obsolete IE
    window.getComputedStyle = function(e) {
        return e.currentStyle;
    };
  }
}



function profile() {
  var showaboutme = document.getElementById('showaboutme');
  showaboutme.classList.toggle("flex");
  
};

function projects() {
  var showproject = document.getElementById('showproject');
  showproject.classList.toggle("block");
}

start()
