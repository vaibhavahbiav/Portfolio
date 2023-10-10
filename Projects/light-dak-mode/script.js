const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// dark and light images
function imageMode(color){
    image1.src = `images/about1-${color}.svg`;
    image2.src = `images/about2-${color}.svg`;
    image3.src = `images/about3-${color}.svg`;
}

// [DRY] toggle dark-light mode
function toggleDarkLightMode(isLight){
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%' : 'rgb(255 255 255 / 50%';
    toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? imageMode('light') : imageMode('dark');
}

// // dark mode
// function darkMode(){
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';
//     toggleIcon.children[0].textContent = "Dark Mode";
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon'); //used .replace in place of .remove and .add
//     imageMode('dark');
// }

// // light mode
// function lightMode(){
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%';
//     toggleIcon.children[0].textContent = "Light Mode";
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'); //used .replace in place of .remove and .add
//     imageMode('light');
// }


// switch theme
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        // darkMode();
        toggleDarkLightMode();  //[DRY]
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // lightMode();  //[DRY]
        toggleDarkLightMode(true);  //[DRY]
    }
}

// event istener
toggleSwitch.addEventListener('change', switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        // darkMode();
        toggleDarkLightMode();  //[DRY]
    }
}

