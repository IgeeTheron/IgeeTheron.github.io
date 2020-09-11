//Loading tabs
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
//Loading tabs End

//Email
window.addEventListener("DOMContentLoaded", function() {
    
var form = document.getElementById("my-form");
var status = document.getElementById("status");

// Success and Error functions for after the form is submitted

function success() 
{
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Thanks!";
}

function error() 
{
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem.";
}

// handle the form submission event

form.addEventListener("submit", function(ev) 
{
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
    success(xhr.response, xhr.responseType);
    } else {
    error(xhr.status, xhr.response, xhr.responseType);
    }
};
xhr.send(data);
}
//Email End