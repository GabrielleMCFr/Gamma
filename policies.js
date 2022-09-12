document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cookie-section').style.display = 'block';
    document.getElementById('privacy-policy').style.display = 'none';
    document.getElementById('terms-uses').style.display = 'none';

    document.getElementById('cookiesnav').addEventListener('click', cookiesview);
    document.getElementById('policynav').addEventListener('click', privacyview);
    document.getElementById('termsnav').addEventListener('click', termsview);
})

function cookiesview() {
    document.getElementById('cookie-section').style.display = 'block';
    document.getElementById('privacy-policy').style.display = 'none';
    document.getElementById('terms-uses').style.display = 'none';
}

function termsview() {
    document.getElementById('cookie-section').style.display = 'none';
    document.getElementById('privacy-policy').style.display = 'none';
    document.getElementById('terms-uses').style.display = 'block';
}

function privacyview() {
    document.getElementById('cookie-section').style.display = 'none';
    document.getElementById('privacy-policy').style.display = 'block';
    document.getElementById('terms-uses').style.display = 'none';
}