// Add smooth scrolling to all links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Toggle nav menu on mobile
$('.nav-toggle').on('click', function() {
    $('nav').toggleClass('active');
});

var draggable = document.getElementById("draggable");

draggable.addEventListener("dragstart", function(event) {
  // Menandai elemen sebagai elemen yang sedang di-drag
  event.dataTransfer.setData("text", event.target.id);
});

// Menambahkan event listener untuk memindahkan elemen saat sedang di-drag
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggableElement = document.getElementById(data);
  var dropzone = event.target;

  // Mengganti posisi elemen dengan posisi dropzone (tempat tujuan)
  dropzone.parentNode.insertBefore(draggableElement, dropzone.nextSibling);
});

function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var toggle = document.getElementById("toggle");
  const p = document.getElementsByTagName('p');
  const a = document.getElementsByTagName('a');
  const h5 = document.getElementsByTagName('h5');
  
  if (toggle.checked) {
    
    for ( let i = 0; i < p.length; i++){
      p[i].style.color = "#fff";
    }
    
    for (let d = 0; d < a.length; d++){
      a[d].style.color = "#fff";
    }
    
    for ( let h = 0; h < h5.length; h++){
      h5[h].style.color = "#fff";
    }
    
   document.getElementsByTagName('h1')[0].style.color = "#fff";
  }else {
    
    for ( let i = 0; i < p.length; i++){
      p[i].style.color = "#333";
    }
    
    for (let d = 0; d < a.length; d++){
      a[d].style.color = "#333";
    }
    
    for ( let h = 0; h < h5.length; h++){
      h5[h].style.color = "#333";
    }
    document.getElementsByTagName('h1')[0].style.color = "#333";
  }
};

   function openProject(url) {
            window.open("Project/" + url, "_blank");
        }