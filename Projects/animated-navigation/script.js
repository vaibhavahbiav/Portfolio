const menuBars = document.getElementById('menu-bars');
const overlay  = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
// [DRY]
const navItems = [nav1, nav2, nav3, nav4, nav5];

// control navigation animation
function navAnimation(direction1, direction2){
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    })
}

function toggleNav(){
    // toggle - menu bars open/closed
    menuBars.classList.toggle('change');
    // toggle - menu active/not
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // animate-in overlay
        // overlay.classList.remove('overlay-slide-left');
        // overlay.classList.add('overlay-slid e-right');
        // [DRY]
        overlay.classList.replace('overlay-slide-left', "overlay-slide-right");
        // animate-in nav items, function('removing', 'adding');
            navAnimation('out', 'in');
    }else{
        // animate-out overlay
        // overlay.classList.remove('overlay-slide-right');
        // overlay.classList.add('overlay-slide-left');
        // [DRY]
        overlay.classList.replace('overlay-slide-right', "overlay-slide-left");
        // animate-out nav items, function('removing', 'adding');
            navAnimation('in', 'out');
    }
}

// event listeners
menuBars.addEventListener('click', toggleNav);
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventLis tener('click', toggleNav);
// [DRY]
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
})