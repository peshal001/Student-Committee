const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning ...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon ...");
    } else {
        speak("Good Evening ...");
    }
}

window.addEventListener('load', () => {
    speak("Namaste i am  fulkumar. How can i assist you today...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

const professors = [
    { name: "Ram", email: "ram@university.edu.np", office: "Room 101, Building A, Kathmandu", phone: "+977-9812345678" },
    { name: "Hari", email: "hari@university.edu.np", office: "Room 202, Building B, Pokhara", phone: "+977-9823456789" },
    { name: "Shyam", email: "shyam@university.edu.np", office: "Room 303, Building C, Lalitpur", phone: "+977-9834567890" }
];

const developers = [
    { name: "Peshal", email: "peshal@company.com.np", office: "Room 101, Building D, maitedevi,Kathmandu", phone: "+977-9845678901" },
    { name: "Kareena", email: "karina@company.com.np", office: "Room 202, Building D, Pokhara", phone: "+977-9856789012" },
    { name: "Avinash", email: "avinash@company.com.np", office: "Room 303, Building D, Lalitpur", phone: "+977-9867890123" },
    { name: "Gaurav", email: "gaurav@company.com.np", office: "Room 404, Building D, Bhaktapur", phone: "+977-9878901234" }
];

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello! How can I assist you today?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("please help me to search assignment portal")) {
        window.open("https://lms2.apiit.edu.my", "_blank");
        speak("Searching... Opening Moodle. Submit your assignment on time.");
    } else if (message.includes("open ap space")) {
        window.open("https://apspace.apu.edu.my", "_blank");
        speak("Opening APSpace. The Asia Pacific University APP provides convenient access to important information and services.");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes("library hours")) {
        const libraryHours = "The library is open from 8 AM to 10 PM from Monday to Friday, and from 10 AM to 6 PM on weekends.";
        speak(libraryHours);
    } else if (message.includes("contact professor")) {
        const professorName = message.replace("contact professor", "").trim().toLowerCase();
        const professor = professors.find(prof => prof.name.toLowerCase() === professorName);
        if (professor) {
            speak(`Contact information for ${professor.name}: Email - ${professor.email}, Phone - ${professor.phone}, Office - ${professor.office}`);
        } else {
            speak("Sorry, I couldn't find the contact information for that professor.");
        }
    } else if (message.includes("contact developer")) {
        const developerName = message.replace("contact developer", "").trim().toLowerCase();
        const developer = developers.find(dev => dev.name.toLowerCase() === developerName);
        if (developer) {
            speak(`Contact information for ${developer.name}: Email - ${developer.email}, Phone - ${developer.phone}, Office - ${developer.office}`);
        } else {
            speak("Sorry, I couldn't find the contact information for that developer.");
        }
    } else if (message.includes("who made you") || message.includes("who is your creator") || message.includes("who developed you")) {
        const peshal = developers.find(dev => dev.name.toLowerCase() === "peshal");
        if (peshal) {
            speak(`This website was developed by the Student Committee. For contact information about the developers, please visit the About us page.`);
        } else {
            speak("Sorry, I couldn't find the contact information for the developer.");
        }
    } else if (message.includes("upcoming events") || message.includes("events") || message.includes("latest events")) {
        window.open("events.html", "_blank");
        speak("Opening the events page...");
    } else if (message.includes("contact")) {
        window.open("contact.html", "_blank");
        speak("Opening the contact page...");
    } else if (message.includes("services")) {
        window.open("index.html#services", "_blank");
        speak("Opening the services page...");
    } else if (message.includes("blog")) {
        window.open("blog.html", "_blank");
        speak("Opening blog page...");
    } else if (message.includes("your name") || message.includes("name") || message.includes("what is your name") || message.includes("who are you")) {
        speak("My name is FULKUMAR... I am your Virtual Assistant");
    } else if (message.includes("cafeteria menu")) {
        window.open("menu-canteen.html", "_blank");
        speak("Opening the cafeteria menu...");
    } else if (message.includes("membership")) {
        window.open("membership.html", "_blank");
        speak("Opening the membership page...");
    } else if (message.includes("admissions")) {
        window.open("resources.html", "_blank");
        speak("Opening the resources page...");
    } else if (message.includes("about us")) {
        window.open("about.html", "_blank");
        speak("Opening the about us page...");
    } else if (message.includes("forms")) {
        window.open("forms.html", "_blank");
        speak("Opening the form page...");
    } else if (message.includes("Calender")) {
        window.open("calender.html", "_blank");
        speak("Opening the calender page...");
    } else if (message.includes("registration")) {
        window.open("registration.html", "_blank");
        speak("Opening the registration page...");
    } else if (message.includes("student login")) {
        window.open("login-student.html", "_blank");
        speak("Opening the student login page...");
    } else if (message.includes("teacher login")) {
        window.open("login-teacher.html", "_blank");
        speak("Opening the teacher login page...");
    } else if (message.includes("admin login")) {
        window.open("login-admin.html", "_blank");
        speak("Opening the admin login page...");
    } else if (message.includes("news")) {
        window.open("index.html#latest-news", "_blank");
        speak("Opening the news page...");
    } else if (message.includes("notice board")) {
        window.open("index.html#notice-board", "_blank");
        speak("Opening the notice board page...");
    } else if (message.includes("gallery")) {
        window.open("gallery.html", "_blank");
        speak("Opening the gallery page...");
    } else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening LinkedIn...");
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
