document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            document.querySelector('.navbar').style.backgroundColor = "blueviolet";
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            document.querySelector('.navbar').style.backgroundColor = "white";
        }
    });
    const skill = document.querySelector("#Skills");
    skill.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".skillsdept").scrollIntoView({ behavior: "smooth" });
    });

    const about = document.querySelector("#About");
    about.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
    });

    const contact = document.querySelector("#Contact");
    contact.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
    });
});