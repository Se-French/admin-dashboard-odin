const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a');

links.forEach(a => {
    a.addEventListener('click', redirect)
});

buttons.forEach(button => {
    button.addEventListener('click', redirect)
});

function redirect(event){
    window.location.href = 'other_page/second.html';
}




