/* Toggle Icon*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    /* A navbar fixed*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* Removing Toggle Icon*/

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');

};

/* Scroll Reveal Feature*/
ScrollReveal({
     reset: true,
     distance : '80px',
     duration: 2000,
     delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-container h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-container h1, .about-container', { origin: 'right' });


/* Adding a TYping feature from typed.js*/
const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Technical Writer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    delaySpeed: 50,
    loop: true
})

/* Creating a sending contact setup */
const form =document.querySelector('form');
const f_name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${f_name.value} <br>
     Email: ${email.value} <br>
     Mobile Number: ${phone.value} <br>
     Message: ${message.value} <br>`


    sendEmail.send({
        SecureToken : "6b6c5159-000d-4b1e-9ea5-aa69d88e8479",
        Host: "smtp.elasticemail.com",
        Username: "mikeoduoli@gmail.com",
        Password: "370F66DB1E0E5D31AB5D8D99E3C7DE694F27",
        To: "mikeoduoli@gmail.com",
        From: "mikeoduoli@gmail.com",
        Subject: subject.value,
        Body: bodyMessage,
    })
    .then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Messsage Sent Successfully!",
                    text: "Thank you contacting and will reach out ASAP",
                    icon: "success"
                  });
            }
        }
    );
}

function checkInputs () {
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }

            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!f_name.classList.contains("error") && !sendEmail.classList.contains("error")
         && !phone.classList.contains("error") && !subject.classList.contains("error")
         && !mess.classList.contains("error")) {
            sendEmail();

            form.reset();
            return false;
    }
});