let purpleLoader = document.querySelector('.purple-loader');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            purpleLoader.style.top = '-100vh';
        }, 300);
    });
});