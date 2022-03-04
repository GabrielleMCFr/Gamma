document.addEventListener('DOMContentLoaded', function() {

    // display main to none
    document.querySelector('main').style.display = "none";

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

    let skillsbox = document.getElementById('html-bar');
      
    let observer = new IntersectionObserver(skillobserver, options);
    observer.observe(skillsbox);

    document.addEventListener('keydown', startview)

    // handle navbar desktop version
    const navbar = document.getElementById('navbarhome');

    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 420) {
            navbar.classList.add('bg-dark');

        }
        else {
            navbar.classList.remove('bg-dark');
        }
    });

    /* handle navbar mobile version -plus besoin, mise en bg dark direct.
    const navbar2 = document.getElementById('navbarmobile');

    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 420) {
            navbar2.classList.add('bg-dark');
        }
        else {
            navbar2.classList.remove('bg-dark');
        }
    }); */

    document.getElementById('contactnav').addEventListener('click', contactview);
    document.getElementById('portfolionav').addEventListener('click', portfolioview);
    document.getElementById('aboutmenav').addEventListener('click', aboutview);

});

function startview() {

    document.querySelector('#intro').style.animationPlayState = 'running';

    setTimeout(function() {
        document.querySelector('#intro').style.display = "none";
        document.removeEventListener('keydown', startview);
        setTimeout(function() {
            document.querySelector('main').style.display = "block";
            document.querySelector('main').style.animationPlayState = 'running';
            // Trigger the button element with a click
            document.getElementById('contact-section').style.display = 'none';
            document.getElementById('aboutme').style.display = "none";
            document.getElementById('portfolio').style.display = "block";   
        },1000) 
    }, 1000)   
}


function contactview() {

    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');

    contactsection.style.display = "block";
    aboutme.style.display = "none";
    portfolio.style.display = "none";

    //document.getElementById('contacth2').focus({preventScroll:false});

    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 421);
    }

    document.getElementById('contactdiv').style.animationPlayState = 'running';

    const quotes = document.getElementById('quotes-section')
    quotes.innerHTML = '<span class="quote">"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live" - John Woods</span>'

}


function portfolioview() {
    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');

    aboutme.style.display = "none";
    contactsection.style.display = "none";
    portfolio.style.display = "block";

    //document.getElementById('portfolioh2').focus({preventScroll:false});
    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 421);
    }

    const quotes = document.getElementById('quotes-section')
    quotes.innerHTML = '<span class="quote">"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them."  - <em>Andrew Hunt</em></span>'


}

function aboutview() {


    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');

    aboutme.style.display = "block";
    contactsection.style.display = "none";
    portfolio.style.display = "none";

    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 421);
    }
    //$("#aboutmeth2").focus();
    

    document.getElementById('aboutme-section').style.animationPlayState = 'running';

    const quotes = document.getElementById('quotes-section')
    quotes.innerHTML = '<span class="quote">"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning." -  Rick Cook, The Wizardry Compiled</span>'


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