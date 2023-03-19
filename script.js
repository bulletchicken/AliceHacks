
window.onload = function() {
  var div = document.getElementById("loading");
  setTimeout(function() {
    div.style.display = "none";
  }, 3000);
};

const body = document.body,
  jsScroll = document.getElementsByClassName('smooth-wrapper')[0],
  height = jsScroll.getBoundingClientRect().height - 1,
  speed = 0.08

var offset = 0;

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed

  var scroll = "translateY(-" + offset + "px) translateZ(0)"
  jsScroll.style.transform = scroll

  raf = requestAnimationFrame(smoothScroll)
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  var btn = document.querySelector('.playpause');
  btn.addEventListener('click', function () {
    btn.classList.toggle('paused');
  });

}
smoothScroll();




//Selecting Elements

const dropdownContent = document.querySelector('.dropdown-content');
const dropdownContainer = document.querySelector('.dropdown-container');


let isDropdownOpen = false;
let dropdownCount = 0;

window.addEventListener('load', () => {
  dropdownContent.style.marginTop = `-${dropdownContent.clientHeight}px`;
});

//Moves dropdown content based on state.
dropdownContainer.addEventListener('mouseover', () => {
  if (isDropdownOpen === false) {
    isDropdownOpen = true;
    if (dropdownCount === 0) {
      dropdownCount++;
      dropdownContent.style.transition = 'margin-top .5s';
    }
    dropdownContent.style.marginTop = `0px`
  } else {
    isDropdownOpen = false;
    dropdownContent.style.marginTop = `-${dropdownContent.clientHeight}px`;
  }
});

dropdownContainer.addEventListener('mouseout', () => {

  isDropdownOpen = false;
  dropdownContent.style.marginTop = `-${dropdownContent.clientHeight}px`;

});
