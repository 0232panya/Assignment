

// let spans = document.querySelectorAll("progress-bar span");
        
//         spans.forEach((span) =>{
//             // span.style.width = span.dataset.width;
//             // span.innerHTML = span.dataset.width;
//         })

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

