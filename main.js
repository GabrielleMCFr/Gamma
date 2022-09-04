document.addEventListener('DOMContentLoaded', function() {
    // display main to none
    document.querySelector('main').style.display = "none";
    document.getElementById('form-message-success').style.display = 'none'

    // intro glowin text animation.
    // hide them to let time to the settimeout function to work out
    let introelements = document.querySelectorAll('.glowIn');
    introelements.forEach(element => {
        element.hidden = true;
    })

    setTimeout(function() {
        introelements.forEach(element => {
            element.hidden = false;
        })
        let glowInTexts = document.querySelectorAll(".glowIn");
    glowInTexts.forEach(glowInText => {
        let letters = glowInText.textContent.split("");
        glowInText.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            glowInText.append(span);
        });
    });
    }, 800)

    
    // intersection observer API, start animation whenever you scroll on the concerned box.
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }

    //document.addEventListener('keydown', startview);

    let skillsbox = document.getElementById('html-bar');
    let observer = new IntersectionObserver(skillobserver, options);
    observer.observe(skillsbox);

    document.getElementById('contactnav').addEventListener('click', contactview);
    document.getElementById('portfolionav').addEventListener('click', portfolioview);
    document.getElementById('aboutmenav').addEventListener('click', aboutview);
    document.getElementById('homenav').addEventListener('click', homeview);
    document.getElementById('servicesnav').addEventListener('click', servicesview);
    document.getElementById('pricingnav').addEventListener('click', pricingview);
    
    // handle form API
    document.getElementById('contactForm').onsubmit = function(e) {
        e.preventDefault();

        // erase previous messages
        document.getElementById('form-message-success').style.display = 'none'
        document.getElementById('form-message-warning').style.display = 'none'
        let form = document.getElementById('contactForm');

        const key = "$$$$$$"
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const subject = form.querySelector('#subject').value;
        const message = form.querySelector('#message').value;

        /*let emailReg = new RegExp(/^([w-.]+)@((?:[w]+.)+)([a-zA-Z]{2,4})/i);

        if (!emailReg.test(email)) {
            document.getElementById('form-message-warning').innerHTML = "Adresse email non valide.";
            document.getElementById('form-message-warning').focus({preventScroll:false});
        }*/

        if (name.length <= 0 || email.length <= 0 || subject.length <= 0 || message.length <= 0) {
            document.getElementById('form-message-warning').innerHTML = "Tous les champs doivent être renseignés.";
            document.getElementById('form-message-warning').focus({preventScroll:false});
        }



        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            body: JSON.stringify({
                access_key: key,
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        })
        .then(async (response) => {
            if (response.status == 200) {
            
              document.getElementById('form-message-success').style.display = 'block';
            } else {
              console.log(response);
            }
          })
          .catch((error) => {
            console.log(error); 
            document.getElementById('form-message-warning').innerHTML = "Une erreur s'est produite. Veuillez vérifier les informations que vous avez saisies."
            document.getElementById('form-message-warning').focus({preventScroll:false}) 
          })
          .then(function () {
            form.reset();
          });
    }
});



function homeview() {
    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');
    let pricingsection = document.getElementById('pricing-section');
    let servicessection = document.getElementById('services-section');

    contactsection.style.display = "block";
    aboutme.style.display = "block";
    portfolio.style.display = "block";
    servicessection.style.display = "block";
    pricingsection.style.display = "block";

    window.scroll(0, 0)
}

function servicesview() {
    window.scroll(0, window.innerHeight - 40)
}


function pricingview() {
    document.getElementById('pricingscroll').scrollIntoView()
}


function startview() {

    document.querySelector('#intro').style.animationPlayState = 'running';

    setTimeout(function() {
        document.querySelector('#intro').style.display = "none";
        document.removeEventListener('keydown', startview);
        setTimeout(function() {
            document.querySelector('main').style.display = "block";
            document.querySelector('main').style.animationPlayState = 'running';
            // Trigger the button element with a click
            document.getElementById('contact-section').style.display = 'block';
            document.getElementById('pricing-section').style.display = 'block';
            document.getElementById('services-section').style.display = 'block';
            document.getElementById('aboutme').style.display = "block";
            document.getElementById('portfolio').style.display = "block";  
            // dispatch event who initiates AOS
            document.dispatchEvent(new Event('AOSEvent')) 
        },500) 
    }, 500)   
}

function contactview() {
    document.getElementById('contactscroll').scrollIntoView()
}

function portfolioview() {
    document.getElementById('portfolioscroll').scrollIntoView()
}

function aboutview() {
    document.getElementById('aboutscroll').scrollIntoView();
}

function skillobserver(entries, observer) {
    let prevRatio = 0.0;
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            document.getElementById('skillsbox').classList.add('active');
        } 
        else {
            document.getElementById('skillsbox').classList.remove('active');
        }
        prevRatio = entry.intersectionRatio;
      });
}

