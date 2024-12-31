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
      $("#title").text("B-Girl Maia, cujo nome completo é Júlia Maia, é uma destacada breakdancer brasileira de Brasília. Ela começou sua jornada no breaking em 2010, inspirada por B-Girls locais em sua comunidade. Além do breaking, Maia tem uma rica experiência nas artes circenses, sendo filha de um mestre de circo e tendo mais de duas décadas de vivência na cultura circense e popular.");
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
      
      $("#title").text("#title").text("B-Girl Maia, whose full name is Júlia Maia, is a prominent Brazilian breakdancer from Brasília. She began her breaking journey in 2010, inspired by local B-Girls in her community. Beyond breaking, Maia has a rich background in circus arts, being the daughter of a circus master and having over two decades of experience in circus and popular culture.");
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
      $("#title").text("B-Girl Maia, cuyo nombre completo es Júlia Maia, es una destacada breakdancer brasileña de Brasilia. Comenzó su camino en el breaking en 2010, inspirada por B-Girls locales en su comunidad. Más allá del breaking, Maia tiene una rica experiencia en las artes circenses, siendo hija de un maestro de circo y contando con más de dos décadas de experiencia en la cultura circense y popular.");
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




