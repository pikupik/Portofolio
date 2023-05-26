

// Membuat garis vertikal yang menghubungkan item di timeline
        var timelineItems = document.querySelectorAll('.timeline-item');

        for (var i = 0; i < timelineItems.length; i++) {
            if (i !== timelineItems.length - 1) {
                var timelineContentHeight = timelineItems[i].querySelector('.timeline-content').offsetHeight;
                var nextTimelineContentHeight = timelineItems[i + 1].querySelector('.timeline-content').offsetHeight;
                var lineHeight = Math.max(timelineContentHeight, nextTimelineContentHeight);

                var line = document.createElement('div');
                line.classList.add('timeline-line');
                line.style.height = lineHeight + 'px';
                timelineItems[i].appendChild(line);
            }
        }


var button = document.getElementById("draggable");

if (button) {
  button.addEventListener("click", function() {
    window.location.href = "education.html";
  });
}


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