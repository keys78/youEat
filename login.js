/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }




  //*************************ABUJA LOCATIONS ******************** */
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


 //*************************LAGOS LOCATIONS ******************** */
  function myiFunction() {
    var x = document.getElementById("myLnks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  
 //*************************Port LOCATIONS ******************** */
  function myphiFunction() {
    var x = document.getElementById("phmyLnks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  


 //*************************Owerri LOCATIONS ******************** */
  function myotiFunction() {
    var x = document.getElementById("otmyLnks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



 //*************************Abia LOCATIONS ******************** */
  function myabiFunction() {
    var x = document.getElementById("abmyLnks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }





//************************************************TROUBLE SHOOT AREA*********** */
function fxmyFunction() {
    var x = document.getElementById("fxmyLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



function mamyFunction() {
    var x = document.getElementById("mamyLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


function pcmyFunction() {
    var x = document.getElementById("pcmyLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
  