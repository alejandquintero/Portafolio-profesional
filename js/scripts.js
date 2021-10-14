const toggle_menu = document.getElementById('toggle__menu')
const toggle_icon = document.getElementById('toggle__icon__bar')
const nav = document.getElementById('nav')
const toggle__icon__arrow__right = document.getElementById('toggle__icon__arrow')
const toggle__icon__right = document.getElementById('toggle__icon-right')
const front__description = document.getElementById('front__description')
const toggle__icon__arrow__left = document.getElementById('toggle__icon__arrow--left')
const toggle__icon__left = document.getElementById('toggle__icon-left')
const back__description = document.getElementById('back__description')
const container__project = document.getElementById('container__preview__project')
const see__project = document.getElementById('see__project')
const container__project_2 = document.getElementById('container__preview__project-2')
const see__project_2 = document.getElementById('see__project-2')
const container__project_3 = document.getElementById('container__preview__project-3')
const see__project_3 = document.getElementById('see__project-3')

toggle_menu.addEventListener('click', ()=>{
    toggle_icon.classList.toggle('toggle__icon__bar--simple')
    nav.classList.toggle('nav--active')
})


if(toggle__icon__arrow__right !== null){
    toggle__icon__arrow__right.addEventListener('click', ()=>{
        toggle__icon__right.classList.toggle('arrow--active')
        front__description.classList.toggle('tech__front__description--show')
    
    })
}

if(toggle__icon__arrow__left !== null){

    toggle__icon__arrow__left.addEventListener('click', ()=>{
        toggle__icon__left.classList.toggle('arrow-left--active')
        back__description.classList.toggle('tech__back__description--show')
    })
}

if(container__project !== null){
    container__project.addEventListener('click', ()=>{
        container__project.classList.toggle('container__preview__project--back')
        see__project.classList.toggle('see__project--show')
    })
}

if(container__project_2 !== null){
    container__project_2.addEventListener('click', ()=>{
        container__project_2.classList.toggle('container__preview__project--back')
        see__project_2.classList.toggle('see__project--show')
    })
}

if(container__project_3 !== null){
    container__project_3.addEventListener('click', ()=>{
        container__project_3.classList.toggle('container__preview__project--back')
        see__project_3.classList.toggle('see__project--show')
    })
}

