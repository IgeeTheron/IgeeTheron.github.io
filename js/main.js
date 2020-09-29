// -------------------------------------
// Preload code
// -------------------------------------

window.addEventListener('DOMContentLoaded', () => {
    var style = document.createElement("style");
    style.innerHTML = `body { overflow: hidden; }`;
    document.body.appendChild(style);
})

window.addEventListener('load', () => {
    const preload = document.querySelector('#preload');
    preload.classList.add('preload-finish');
    
    var style = document.createElement("style");
    style.innerHTML = `body { overflow: auto; }`;
    document.body.appendChild(style);
})

// -------------------------------------
// Tabs code
// -------------------------------------

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e)
{
    removeBorder();
    removeShow();
    //Add border to curent tab
    this.classList.add('tab-border');
    //Grab content item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show Class
    tabContentItem.classList.add('show');
}

function removeBorder()
{
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow()
{
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// -------------------------------------
// API
// -------------------------------------

fetch('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw&format=txt&type=single')
.then((res) => res.text())
.then((data) => {
    document.getElementById('jokeAPI').innerHTML = data;
})

fetch('https://catfact.ninja/fact?max_length=140')
.then((res) => res.json())
.then((data) => {
    document.getElementById('catFactsAPI').innerHTML = data.fact;
})