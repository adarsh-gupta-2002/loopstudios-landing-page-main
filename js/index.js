

const menuOpen = document.getElementById('open')
const menuClose = document.getElementById('close')
 
const nav = document.querySelector('.nav')
const header = document.querySelector('.header')
 
 
menuOpen.addEventListener('click' , () =>{
 
     menuOpen.classList.add('hide')
     menuClose.classList.remove('hide')
    header.classList.add('black-bg')
    nav.classList.remove('hide')
 
 


})

menuClose.addEventListener('click' , () =>{
    menuClose.classList.add('hide')
    menuOpen.classList.remove('hide')
    header.classList.remove('black-bg')
    nav.classList.add('hide')
     
})

 
window.addEventListener('resize' , () =>{
    if(screen.width > 800){
        if(menuOpen.classList.contains('hide')){
            menuOpen.classList.remove('hide')
            menuClose.classList.add('hide')
            header.classList.remove('black-bg')
            nav.classList.add('hide')
        }
    }
})