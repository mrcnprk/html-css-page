// pobieranie przycisków

const logoBtn = document.getElementById('logo');
const featuresBtn = document.getElementById('to-featureBoxes')
const newsletterBtn = document.getElementById('to-newsletter')
const galleryBtn = document.getElementById('to-gallery')
const contactBtn = document.getElementById('to-contact')

// pobieranie sekcji

const main = document.getElementById('main')
const header = document.querySelector('.header')
const newsletter = document.getElementById('newsletter')
const gallery = document.getElementById('gallery')
const contact = document.getElementById('contact')

// obsługa przycisków

logoBtn.addEventListener('click', () => {window.scrollTo(0, 0)});
featuresBtn.addEventListener('click', () => {window.scrollTo(0, (main.offsetTop - header.scrollHeight))});
newsletterBtn.addEventListener('click', () => {window.scrollTo(0, (newsletter.offsetTop - header.scrollHeight))});
galleryBtn.addEventListener('click', () => {window.scrollTo(0, (gallery.offsetTop - header.scrollHeight))});
contactBtn.addEventListener('click', () => {window.scrollTo(0, (contact.offsetTop - header.scrollHeight))});
