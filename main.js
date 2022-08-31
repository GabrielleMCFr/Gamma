
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

    /*let observer2 = new IntersectionObserver(aboutobserver, options);
    let aboutdiv = document.getElementById('imgdubai');
    observer2.observe(aboutdiv)

    let observer3 = new IntersectionObserver(contactobserver, options);
    let contactanimateddiv = document.getElementById('contacth2');
    observer3.observe(contactanimateddiv); */


    document.addEventListener('keydown', startview);

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
    document.getElementById('homenav').addEventListener('click', homeview);
    document.getElementById('servicesnav').addEventListener('click', servicesview);
    document.getElementById('pricingnav').addEventListener('click', pricingview);


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

    window.scroll(0, window.innerHeight - 40)

}

function servicesview() {

    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');
    let pricingsection = document.getElementById('pricing-section');
    let servicessection = document.getElementById('services-section');

    contactsection.style.display = "none";
    aboutme.style.display = "none";
    portfolio.style.display = "none";
    servicessection.style.display = "block";
    pricingsection.style.display = "none";

    window.scroll(0, window.innerHeight - 40)

    /*

    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 690);
    }
    */
}


function pricingview() {

    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');
    let pricingsection = document.getElementById('pricing-section');
    let servicessection = document.getElementById('services-section');

    contactsection.style.display = "none";
    aboutme.style.display = "none";
    portfolio.style.display = "none";
    servicessection.style.display = "none";
    pricingsection.style.display = "block";

    window.scroll(0, window.innerHeight - 40)

    /*

    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 690);
    }

    */

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
        },500) 
    }, 500)   
}


function contactview() {

    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');
    let pricingsection = document.getElementById('pricing-section');
    let servicessection = document.getElementById('services-section');

    contactsection.style.display = "block";
    aboutme.style.display = "none";
    portfolio.style.display = "none";
    servicessection.style.display = "none";
    pricingsection.style.display = "none";

    //document.getElementById('contacth2').focus({preventScroll:false});

    window.scroll(0, window.innerHeight - 40)

    /*

    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 690);
    }
    */
    //document.getElementById('contactdiv').style.animationPlayState = 'running';

    
}


function portfolioview() {
    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');
    let pricingsection = document.getElementById('pricing-section');
    let servicessection = document.getElementById('services-section');

    aboutme.style.display = "none";
    contactsection.style.display = "none";
    portfolio.style.display = "block";
    pricingsection.style.display = "none";
    servicessection.style.display = "none";

    window.scroll(0, window.innerHeight - 40)

    /*

    //document.getElementById('portfolioh2').focus({preventScroll:false});
    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 690);
    }

    */

}

function aboutview() {


    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');
    let pricingsection = document.getElementById('pricing-section');
    let servicessection = document.getElementById('services-section');

    aboutme.style.display = "block";
    contactsection.style.display = "none";
    portfolio.style.display = "none";
    pricingsection.style.display = "none";
    servicessection.style.display = "none";

    window.scroll(0, window.innerHeight - 40)

    /*

    if (window.screen.width < 720 && window.screen.width >= 470) {
        window.scroll(0, 350);
    }
    else if (window.screen.width < 470) {
        window.scroll(0, 280);
    }
    else {
        window.scroll(0, 690);
    }
    //$("#aboutmeth2").focus();
    
    */

    //document.getElementById('aboutme-section').style.animationPlayState = 'running';

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

function aboutobserver(entries, observer) {
    let prevRatio = 0.0;
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            document.getElementById('aboutme-section').style.animationPlayState = 'running';
        } 
        prevRatio = entry.intersectionRatio;
      });
}

function contactobserver(entries, observer) {
    let prevRatio = 0.0;
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            document.getElementById('contactdiv').style.animationPlayState = 'running';
        } 
        prevRatio = entry.intersectionRatio;
      });
}