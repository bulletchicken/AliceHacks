
console.log("ontouchstart" in document.documentElement);
window.onload = function () {

  var div = document.getElementById("loading");

  window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  if ("ontouchstart" in document.documentElement) {
    var playpause = document.getElementById("playpause");
    // Code to run if the user is on a mobile device
    playpause.style.display = "none";
    div.style.display = "none";
    console.log("This code is running on a mobile device.");

  } else {

    // Code to run if the user is not on a mobile device
    // Create a new script element
    var script = document.createElement('script');

    // Set the type and src attributes of the script element
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.268/build/spline-viewer.js';

    // Append the script element to the head or body of the document
    document.head.appendChild(script);

    // Create a new spline-viewer element
    var viewer = document.createElement('spline-viewer');

    // Set the id, hint, and url attributes of the spline-viewer element
    viewer.id = 'model';
    viewer.hint = 'loading-anim';
    viewer.url = 'https://prod.spline.design/lpH-1b-4OaQ9ULLP/scene.splinecode';

    // Append the spline-viewer element to the body of the document
    document.body.appendChild(viewer);
    console.log("This code is not running on a mobile device.");


    setTimeout(function () {
      div.style.display = "none";
    }, 10);
  }



};

/*
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




}
smoothScroll();
*/

window.onscroll = function () { progressBar() };

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}





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



var btn = document.querySelector('.playpause');

btn.addEventListener('click', ()=> {
  btn.classList.toggle('paused');
});