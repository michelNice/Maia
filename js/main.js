 /***************************************/
            /*Change Language*/
 /***************************************/

$(function() {
  $(".br").click(function(event) {
      event.preventDefault(); // Prevent default link behavior
      let scrollPosition = $(window).scrollTop(); // Get current scroll position

      // Update content
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("sobre mim");
      $(".nav-menu").children().eq(2).text("Galleria");
      $(".nav-menu").children().eq(3).text("contato");
      $(".language-selected").text("pt-BR");
      $(".language-selected").removeClass("change-en change-es").addClass("change-br");
      
      // Update section text
      $("#title").text("Bboy Fenster iniciou sua jornada no breaking em 2010 e, desde então, vem deixando sua marca na cena. Representando as crews Gang Gangrena e Flava Beat, ele se destacou com sua técnica refinada, musicalidade envolvente e um estilo autêntico que mistura fundamentos clássicos com criatividade inovadora. Ao longo de sua carreira, conquistou inúmeros campeonatos nacionais e segue construindo um legado sólido no breaking brasileiro. Nascido em Santa Cruz do Capibaribe, Pernambuco, Fenster se tornou um nome de respeito dentro da cultura hip-hop, influenciando novas gerações de b-boys e b-girls com sua paixão e dedicação à arte da dança.");
      $(".padded-multi-line").eq(0).find("span span").text("SOBRE MIM");
      $(".padded-multi-line").eq(1).find("span span").text("GALLERIA");
      $(".padded-multi-line").eq(2).find("span span").text("CONTATO");
      $(".text3").eq(0).text('SOBRE MIM')
      $(".name-js").text("Nome");
      $(".name-input-js").attr("placeholder", "Nome");
      $(".lastname-js").text("Sobrenome");
      $(".lastname-input-js").attr("placeholder", "Sobrenome");
      $(".message-js").text("Mensagem");
      $(".input-message-js").attr("placeholder", "Sua mensagem");
      $("#form-button").text("Envia");

      $(window).scrollTop(scrollPosition); 
  });

  $(".en").click(function(event) {
      event.preventDefault();
      let scrollPosition = $(window).scrollTop();

      // Update content for English
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("About me");
      $(".nav-menu").children().eq(2).text("Gallery");
      $(".nav-menu").children().eq(3).text("Contact me");
      $(".language-selected").text("en-US");
      $(".language-selected").removeClass("change-br change-es").addClass("change-en");
      
      $("#title").text("#title").text("Bboy Fenster began his breaking journey in 2010 and has since made a name for himself in the scene. Representing the crews Gang Gangrena and Flava Beat, he stands out for his refined technique, deep musicality, and an authentic style that blends classic foundations with innovative creativity. Throughout his career, he has won numerous national championships and continues to build a strong legacy in Brazilian breaking. Born in Santa Cruz do Capibaribe, Pernambuco, Fenster has earned great respect within hip-hop culture, inspiring new generations of b-boys and b-girls with his passion and dedication to the art of dance.");
      $(".padded-multi-line").eq(0).find("span span").text("ABOUT ME");
      $(".padded-multi-line").eq(1).find("span span").text("GALLERY");
      $(".padded-multi-line").eq(2).find("span span").text("CONTACT ME");
      $(".text3").eq(0).text('ABOUT ME')
      $(".name-js").text("Name");
      $(".name-input-js").attr("placeholder", "Name");
      $(".lastname-js").text("Lastname");
      $(".lastname-input-js").attr("placeholder", "Lastname");
      $(".message-js").text("Message");
      $(".input-message-js").attr("placeholder", "Your Message");
      $("#form-button").text("Send");

      $(window).scrollTop(scrollPosition);
  });

  $(".es").click(function(event) {
      event.preventDefault();
      let scrollPosition = $(window).scrollTop();

      // Update content for Spanish
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("Acerca de mí");
      $(".nav-menu").children().eq(2).text("galería");
      $(".nav-menu").children().eq(3).text("Contáctame");
      $(".language-selected").text("es-ES");
      $(".language-selected").removeClass("change-en change-br").addClass("change-es");
      $(".text3").eq(0).text('SOBRE MÍ')
      $("#title").text("Bboy Fenster comenzó su camino en el breaking en 2010 y desde entonces ha dejado su huella en la escena. Representando a las crews Gang Gangrena y Flava Beat, se destaca por su técnica refinada, su gran musicalidad y un estilo auténtico que combina bases clásicas con creatividad innovadora. A lo largo de su carrera, ha ganado numerosos campeonatos nacionales y sigue construyendo un legado sólido en el breaking brasileño. Nacido en Santa Cruz do Capibaribe, Pernambuco, Fenster se ha ganado el respeto dentro de la cultura hip-hop, inspirando a nuevas generaciones de b-boys y b-girls con su pasión y dedicación al arte de la danza.");
      $(".padded-multi-line").eq(0).find("span span").text("ACERCA DE MÍ");
      $(".padded-multi-line").eq(1).find("span span").text("GALERÍA");
      $(".padded-multi-line").eq(2).find("span span").text("CONTACTAME");

      $(".name-js").text("Nombre");
      $(".name-input-js").attr("placeholder", "Nombre");
      $(".lastname-js").text("Apellido");
      $(".lastname-input-js").attr("placeholder", "Apellido");
      $(".message-js").text("Mensaje");
      $(".input-message-js").attr("placeholder", "Tu mensaje");
      $("#form-button").text("Envia");

      $(window).scrollTop(scrollPosition);
  });
});


 /***************************************/
            /*Skitcky Nav*/
 /***************************************/

window.onscroll = function() {
  const header = document.querySelector('.header');
  const stickyPoint = header.offsetHeight / 2;
  if (window.pageYOffset > stickyPoint) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
};



 /***************************************/
            /*Humbuger Nav*/
 /***************************************/

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});


 /***************************************/
            /*Scroll Nav*/
 /***************************************/


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
 // On-page links
 if (
   location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
   && 
   location.hostname == this.hostname
 ) {
   
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   
   if (target.length) {
    
     event.preventDefault();
     $('html, body').animate({
       scrollTop: target.offset().top
     }, 1000, function() {
     
       var $target = $(target);
       $target.focus();
       if ($target.is(":focus")) { 
         return false;
       } else {
         $target.attr('tabindex','-1'); 
         $target.focus(); 
       };
     });
   }
 }
});


 /***************************************/
            /*Clear Input*/
 /***************************************/


document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();  

  let form = event.target;
  let formData = new FormData(form);
  let email = form.querySelector('input[type="email"]').value;

  // Check if the email domain is allowed (Gmail, Hotmail, iCloud)
  if (!validateEmailDomain(email)) {
    alert('Please use a valid Gmail, Hotmail, or iCloud email address.');
    return;
  }

  // Submit the form using fetch
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())  
  .then(data => {
    if (data.success) {
      setTimeout(() => {
        form.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => input.value = '');
        form.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
      }, 2000);  
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  });
});

// Function to validate email domain
function validateEmailDomain(email) {
  const allowedDomains = ['gmail.com', 'hotmail.com', 'icloud.com'];
  const emailDomain = email.split('@')[1];
  return allowedDomains.includes(emailDomain);
}



const audioButton = document.getElementById('audioButton');
const audio = document.getElementById('audio');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

// Toggle play/pause functionality
audioButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    audio.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});




