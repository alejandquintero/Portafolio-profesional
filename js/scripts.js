const toggle_menu = document.getElementById('toggle__menu')
const toggle_icon = document.getElementById('toggle__icon__bar')
const nav = document.getElementById('nav')
const main = document.getElementById('main')

toggle_menu.addEventListener('click', ()=>{

    toggle_icon.classList.toggle('toggle__icon__bar--simple')
    nav.classList.toggle('nav--active')
    main.classList.toggle('main--opacity')

    if(nav.classList.contains('nav--active')){
        nav.addEventListener('click', ()=>{
            nav.classList.remove('nav--active')
            main.classList.remove('main--opacity')
            toggle_icon.classList.remove('toggle__icon__bar--simple')
        })
    }
})


window.addEventListener('scroll', ()=>{
    
    let elements = document.getElementsByClassName('scroll');
    let screenSize = window.innerHeight;

    for(let i = 0; i < elements.length; i++){

        let element = elements[i]
        
        if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible')
          } else {
            element.classList.remove('visible')
          }
    }
      
  });