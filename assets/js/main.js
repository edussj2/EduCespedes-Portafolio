
/* ============== CURSOR ================= */

/* Dispositivos tactiles */
function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch){
    const cursorEl = document.querySelector('.js-cursor');
    const isClickedClass = 'is-clicked';/*Click*/
    const isHiddenClass = 'is-hidden';/*Fuera de la web*/
    const isLinkHoveredClass = 'is-link-hovered';/*Hover*/
    const hasCustomCursorClass = 'has-custom-cursor';/*Informa que ya hay el cursor personalizado*/

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);/*Movimiento del mouse*/
        document.addEventListener("mousedown", onMouseDown);/*Cuando hace clic*/
        document.addEventListener("mouseup", onMouseUp);/*Cuando Suelta el clic*/
        document.addEventListener("mouseenter", onMouseEnter);/*Entra el cursor de la web*/
        document.addEventListener("mouseleave", onMouseLeave);/*Sale el cursor de la web*/
        handleLinkHoverEvents();/*Funcion hover, interactua con un nudo*/
    };

    const onMouseMove = (e) => {
        // https://css-tricks.com/updating-a-css-variable-with-javascript/
        cursorEl.style.setProperty('--cursor-x', e.clientX + "px");
        cursorEl.style.setProperty('--cursor-y', e.clientY + "px");
    };

    const onMouseDown = () => {
        cursorEl.classList.add(isClickedClass);
    };

    const onMouseUp = () => {
        cursorEl.classList.remove(isClickedClass);
    };

    const onMouseEnter = () => {
        cursorEl.classList.remove(isHiddenClass);
    };

    const onMouseLeave = () => {
        cursorEl.classList.add(isHiddenClass);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]').forEach((el) => {
            el.addEventListener("mouseover", () => cursorEl.classList.add(isLinkHoveredClass) );
            el.addEventListener("mouseout", () => cursorEl.classList.remove(isLinkHoveredClass) );
        });
    };

    addEventListeners();
    document.body.classList.add(hasCustomCursorClass);
}




/* ============== LOADER ============= */
$(window).on('load', function() {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
        var preloader = $('.loader');
        setTimeout(function() {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 1700);
    }
    hidePreloader();
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 3200,
        reset: true
    })
    
    

    /* ================== Scroll Reveal ====================== */
    /*SCROLL HOME*/
    sr.reveal('.home__data', {delay: 300})
    sr.reveal('.home__social-icon', {delay: 500, interval: 600})
    sr.reveal('.home__scroll', {origin:'bottom', delay: 600})
    sr.reveal('.home__img', {origin:'right', delay: 500,distance:'150px',duration:5000})
    

    /*SCROLL ABOUT*/
    sr.reveal('.about__img', {delay: 500,origin:'left',distance:'150px'})
    sr.reveal('.about__description', {origin:'right',distance:'100px'})
    sr.reveal('.numeracion__about', {interval: 600})
    sr.reveal('.about__buttons', {origin:'bottom',duration:5000})

});




/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando de click en cualquier nav__link, se quitara la show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





/*==================== EFECT ESCRIBIR ====================*/
const typed = new Typed('.typed', {
	strings: [
		'Frontend',
		'Backend',
		'Web'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1700, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});






/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for( i=0 ; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})






/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})






/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})
      

    

/* =========== TESTIMONIOS ====================*/
const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    cssMode: true,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});



/*================== PORTFOLIO ==================*/

const swiper2 = new Swiper(".swiper-portfolio", {
    direction: "vertical",
    spaceBetween: 18,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:10000,
        disableOnInteraction:false,
    }
  });







/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)






/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)







/*==================== ANIMATION NUMBER ====================*/
function scrollNumber(){
    if(this.scrollY >= 100 && this.scrollY <=150) {
        let cont1 = document.getElementById('cont1'),
            cont2 = document.getElementById('cont2'),
            cont3 = document.getElementById('cont3')
        let canttotal1 = +cont1.dataset.cantidad,
            canttotal2 = +cont2.dataset.cantidad,
            canttotal3 = +cont3.dataset.cantidad
        let cant1 = 0, cant2 = 0, cant3 = 0

        let tiempo1 = setInterval(() => {

            cont1.textContent=cant1+=2

            if(cant1===canttotal1){
                clearInterval(tiempo1)
            }
            
        }, 0,00000000000001);

        let tiempo2 = setInterval(() => {

            cont2.textContent=cant2+=2

            if(cant2===canttotal2){
                clearInterval(tiempo2)
            }
            
        }, 100);

        let tiempo3 = setInterval(() => {

            cont3.textContent=cant3+=1

            if(cant3===canttotal3){
                clearInterval(tiempo3)
            }
            
        }, 1000);
    }
}
window.addEventListener('scroll', scrollNumber)






/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)







/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')



// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    
    if (localStorage.getItem('selected-icon') === "uil-sun") {
		$("#fullpage").removeClass("night");
	}
	else if  (localStorage.getItem('selected-icon') === "uil-moon"){
		$("#fullpage").addClass("night");

	}
})






/*==================== EFECT CIRCLE BUTTON ====================*/
$('.hero-btn').click(function(){
    if(!$('.hero-btn').parent().hasClass('active--button')){
      $(this).parent().stop().addClass('active--button');
      setTimeout(function(){  
        $('.hero-btn').parent().removeClass('active--button'); 
      }, 2000);
    }
});






/** ======== Validar formulario de mensaje =================== */
const nombre = document.getElementById('nombre-reg'),
      email = document.getElementById('email-reg'),  
      proyecto = document.getElementById('proyecto-reg'),  
      mensaje = document.getElementById('mensaje-reg')
const form = document.getElementById('form_msje')

var numeros="0123456789";

function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
}

$("#switch").click(function () {

});

/*
form.addEventListener('submit', e=>{
    e.preventDefault()

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if(nombre.value === "" || email.value==="" || proyecto.value==="" || mensaje.value===""){
       alertify.error("&#128561; Campos en blanco",'position', 'bottom-right');
    }

    else if(nombre.value.length <3){
        alertify.error("&#128531; El nombre no es válido",'position', 'bottom-right');
    }

    else if(tiene_numeros(nombre.value)==1){
        alertify.error("&#128531; El nombre no es válido",'position', 'bottom-right');
    }

    else if(nombre.value.length>50){
        alertify.error("&#128553; El nombre es demasiado grande",'position', 'bottom-right');
    }

    else if(email.value.length>120){
        alertify.error("&#128553; El email es demasiado grande",'position', 'bottom-right');
    }

    else if(!emailRegex.test(email.value)){
        alertify.error("&#128531; El email no es válido",'position', 'bottom-right');
    }

    else if(proyecto.value.length<3){
        alertify.error("&#128531; El nombre del proyecto no es válido",'position', 'bottom-right');
    }

    else if(proyecto.value.length>50){
        alertify.error("&#128553; El nombre del proyecto es demasiado grande",'position', 'bottom-right');
    }

    else if(mensaje.value.length<3){
        alertify.error("&#128531; El mensaje es muy corto",'position', 'bottom-right');
    }

    else if(mensaje.value.length>380){
        alertify.error("&#128553; El mensaje es demasiado grande",'position', 'bottom-right');
    }

    else{
        var nombre1 = nombre.value;
        var email1= email.value;
        var proyecto1 = proyecto.value;
        var mensaje1 = mensaje.value;
        console.log(nombre1);
        $.ajax({
            url:"./assets/php/registrarMensaje.php",
            data:{
              nombre: nombre1,
              email: email1,
              proyecto: proyecto1,
              mensaje: mensaje1,
            },
            method:"POST"
          }).done(function(respuesta){
    
            if(respuesta==="NULL DATA"){
                alertify.error("&#128543; Error en el envío de datos",'position', 'bottom-right');
            }else if(respuesta==="INVALID DATA"){
                alertify.error("&#128553; Error de parámetros",'position', 'bottom-right');
            }else{
                alertify.success("&#128170; &#128536; Mensaje enviado",'position', 'bottom-right');
                document.getElementById("nombre-reg").value = "";
                document.getElementById("email-reg").value = "";
                document.getElementById("proyecto-reg").value = "";
                document.getElementById("mensaje-reg").value = "";
            }
        });
    }
})
*/