document.addEventListener('DOMContentLoaded', function() {


    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('aboutme').style.display = "none";
    document.getElementById('portfolio').style.display = "block";


    // intersection observer API, start animation whenever you scroll on the concerned box.
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }

    let skillsbox = document.getElementById('c-bar');
      
    let observer = new IntersectionObserver(skillobserver, options);
    observer.observe(skillsbox);


    document.getElementById('contactnav').addEventListener('click', contactview);
    document.getElementById('portfolionav').addEventListener('click', portfolioview);
    document.getElementById('aboutmenav').addEventListener('click', aboutview);

});

function contactview() {
    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');
    
    contactsection.style.display = "block";
    aboutme.style.display = "none";
    portfolio.style.display = "none";

}


function portfolioview() {
    console.log('port')
    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');

    aboutme.style.display = "none";
    contactsection.style.display = "none";
    portfolio.style.display = "block";

}

function aboutview() {

    let contactsection = document.getElementById('contact-section');
    let aboutme = document.getElementById('aboutme');
    let portfolio = document.getElementById('portfolio');

    aboutme.style.display = "block";
    contactsection.style.display = "none";
    portfolio.style.display = "none";

}


function skillobserver() {
    document.getElementById('skillsbox').classList.add('active');
}