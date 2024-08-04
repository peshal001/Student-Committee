document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('closeBtn');

    // Check if popup has been shown in this session
    if (!sessionStorage.getItem('popupShown')) {
        // Show the popup
        popup.style.display = 'block';

        // Set the popupShown flag in session storage
        sessionStorage.setItem('popupShown', 'true');
    }

    // When the user clicks on <span> (x), close the popup
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});

// JavaScript to handle carousel slide movement
let slideIndex = 0;
let autoScrollTimeout;

document.addEventListener('DOMContentLoaded', () => {
    // Initial call to show slides
    showSlides(slideIndex);

    // Display current date
    displayCurrentDate();

    // Setup login form functionality
    setupLoginForms();

    // Role-based access control
    handleRoleBasedAccess();
});

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Update slideIndex
    slideIndex = (n + slides.length) % slides.length;

    // Show the current slide
    slides[slideIndex].style.display = "block";

    // Reset automatic scrolling
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(() => showSlides(slideIndex + 1), 4000); // Change slide every 4 seconds
}

function moveSlide(n) {
    showSlides(slideIndex + n);
}

function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('en-US', options);
    }
}

function setupLoginForms() {
    const studentLoginForm = document.getElementById('student-login-form');
    const teacherLoginForm = document.getElementById('teacher-login-form');
    const adminLoginForm = document.getElementById('admin-login-form');

    if (studentLoginForm) {
        studentLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userRole', 'student');
            window.location.href = 'student-dashboard.html';
        });
    }

    if (teacherLoginForm) {
        teacherLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userRole', 'teacher');
            window.location.href = 'teacher-dashboard.html';
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userRole', 'admin');
            window.location.href = 'admin-dashboard.html';
        });
    }
}

function handleRoleBasedAccess() {
    const userRole = localStorage.getItem('userRole');
    const allowedRoles = document.body.getAttribute('data-allowed-roles');

    if (allowedRoles && userRole && !allowedRoles.split(',').includes(userRole)) {
        alert('You do not have access to this page.');
        window.location.href = 'index.html';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate form submission
    const membershipForm = document.getElementById('membership-form');
    if (membershipForm) {
        membershipForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(membershipForm);
            const name = formData.get('name');

            alert(`Thank you, ${name}, for applying for membership!`);
            membershipForm.reset();
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// JavaScript to handle modals
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}


let i=2;

$(document).ready(function(){
  var radius = 200;
  var fields = $('.itemDot');
  var container = $('.dotCircle');
  var width = container.width();
  radius = width/2.5;

  var height = container.height();
  var angle = 0, step = (2*Math.PI) / fields.length;
  fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    if(window.console) {
      console.log($(this).text(), x, y);
    }

    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
  });

  $('.itemDot').click(function(){
    var dataTab= $(this).data("tab");
    $('.itemDot').removeClass('active');
    $(this).addClass('active');
    $('.CirItem').removeClass('active');
    $('.CirItem'+ dataTab).addClass('active');
    i=dataTab;

    $('.dotCircle').css({
      "transform":"rotate("+(360-(i-1)*36)+"deg)",
      "transition":"2s"
    });
    $('.itemDot').css({
      "transform":"rotate("+((i-1)*36)+"deg)",
      "transition":"1s"
    });
  });

  setInterval(function(){
    var dataTab= $('.itemDot.active').data("tab");
    if(dataTab>6||i>6){
      dataTab=1;
      i=1;
    }
    $('.itemDot').removeClass('active');
    $('[data-tab="'+i+'"]').addClass('active');
    $('.CirItem').removeClass('active');
    $('.CirItem'+i).addClass('active');
    i++;

    $('.dotCircle').css({
      "transform":"rotate("+(360-(i-2)*36)+"deg)",
      "transition":"2s"
    });
    $('.itemDot').css({
      "transform":"rotate("+((i-2)*36)+"deg)",
      "transition":"1s"
    });
  }, 5000);
});


function updateTimeline() {
    const section = document.querySelector('.timeline-section');
    const listProgress = document.querySelector('.list-progress');
    const inner = document.querySelector('.inner');
    
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    let progressHeight = 0;
    
    if (scrollTop >= sectionTop && scrollTop <= (sectionTop + sectionHeight - windowHeight)) {
        const scrollWithinSection = scrollTop - sectionTop;
        const scrollPercentage = (scrollWithinSection / (sectionHeight - windowHeight)) * 100;
        progressHeight = scrollPercentage;
    }
    inner.style.transform = `scaleY(${progressHeight / 100})`;
}

window.addEventListener('scroll', updateTimeline);
updateTimeline();



// Show/hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) { 
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to top functionality
document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});



document.getElementById("voice-icon").addEventListener("click", function() {
    window.location.href = "Assistant.html";
});



// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 7000);

// Initial display
showSlide(currentSlide);




function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validateContact(contact) {
    const re = /^\d{10}$/;
    return re.test(contact);
}

function handleCategoryChange(value) {
    const paymentOption = document.getElementById('paymentOption');
    const paymentMessage = document.getElementById('paymentMessage');
    if (value === 'premium') {
        paymentOption.style.display = 'block';
        paymentMessage.style.display = 'block';
    } else {
        paymentOption.style.display = 'none';
        paymentMessage.style.display = 'none';
    }
}

function handleAgreementChange(checkbox) {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !checkbox.checked;
}

function validateForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const studentId = document.getElementById('studentId').value;
    const facultyStatus = document.getElementById('facultyStatus').value;
    const membershipCategory = document.getElementById('membershipCategory').value;
    const signature = document.getElementById('signature').files[0];

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return false;
    }

    if (!validateContact(contact)) {
        alert('Invalid contact number');
        return false;
    }

    const formData = {
        fullName,
        email,
        contact,
        studentId,
        facultyStatus,
        membershipCategory,
        signatureName: signature ? signature.name : null,
    };

    localStorage.setItem('membershipData', JSON.stringify(formData));

    if (membershipCategory === 'basic') {
        alert('Your basic membership is subscribed');
    } else {
        window.location.href = 'payment.html';
    }

    return true;
}

function showAgreementPopup() {
    const popup = document.getElementById('agreementPopup');
    const overlay = document.getElementById('popupOverlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closeAgreementPopup() {
    const popup = document.getElementById('agreementPopup');
    const overlay = document.getElementById('popupOverlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

