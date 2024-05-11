
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function  dropdown1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-1')) {
    var dropdowns = document.getElementsByClassName("dropdown-1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drop-2')) {
      var dropdowns = document.getElementsByClassName("dropdown-2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  window.onclick = function(event) {
    // Check if the clicked element is not part of dropdown 1
    if (!event.target.matches('.drop-1')) {
      var dropdown1 = document.getElementById("myDropdown1");
      if (dropdown1.classList.contains('show')) {
        dropdown1.classList.remove('show');
      }
    }
     if (!event.target.matches('.drop-2')) {
      var dropdown1 = document.getElementById("myDropdown2");
      if (dropdown1.classList.contains('show')) {
        dropdown1.classList.remove('show');
      }
    }
}


const clickElement = document.querySelector("#toggle-btn");
const toggleElement = document.querySelector("#toggle-menu");
clickElement.addEventListener("click", () => {
  toggleElement.classList.toggle("show");
  clickElement.classList.toggle("active-toggle");
 
});

function toggleModal(modalID){
  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("flex");
  document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}
  
