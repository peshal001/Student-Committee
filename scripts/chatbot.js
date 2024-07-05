// Chatbot functionality
document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbot = document.getElementById("chatbot");
    const closeChatbot = document.getElementById("close-chatbot");
    const sendButton = document.getElementById("chatbot-send");
    const inputField = document.getElementById("chatbot-input");
    const messagesContainer = document.getElementById("chatbot-messages");
  
    // Toggle chatbot visibility
    chatbotToggle.addEventListener("click", function () {
      chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    });
  
    // Close chatbot
    closeChatbot.addEventListener("click", function () {
      chatbot.style.display = "none";
    });
  
    // Handle message sending
    sendButton.addEventListener("click", function () {
      const userMessage = inputField.value.trim();
      if (userMessage !== "") {
        displayMessage(userMessage, "user");
        inputField.value = "";
        processMessage(userMessage);
      }
    });
  
    // Send message on Enter key press
    inputField.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        sendButton.click();
      }
    });
  
    // Display messages in chatbot
    function displayMessage(message, sender) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = message;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    // Process user messages and provide responses
    function processMessage(message) {
      let response = "";
  
      // Standardize message to lowercase for case-insensitive comparison
      const lowerMessage = message.toLowerCase();
  
      // Provide responses based on user input
      if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        response = "Hi there! How can I help you today?";
      } else if (lowerMessage.includes("organization")) {
        response = "We are a student organization focused on providing events, resources, and support for our members.";
      } else if (lowerMessage.includes("events")) {
        response = "We have a variety of events throughout the year. You can check our Events page for more details.";
      } else if (lowerMessage.includes("contact")) {
        response = "You can reach us via email at info@studentorganization.com or call us at +123456789.";
      } else if (lowerMessage.includes("membership")) {
        response = "You can learn about our membership options on the Membership page.";
      } else if (lowerMessage.includes("join")) {
        response = "To join our organization, please visit the Membership page and fill out the application form.";
      } else if (lowerMessage.includes("benefits")) {
        response = "Members benefit from access to exclusive events, resources, networking opportunities, and more.";
      } else if (lowerMessage.includes("activities")) {
        response = "We organize workshops, seminars, social events, and volunteering opportunities for our members.";
      } else if (lowerMessage.includes("resources")) {
        response = "We provide resources such as study materials, guides, and articles to help students and educators.";
      } else if (lowerMessage.includes("location")) {
        response = "We are located at Maitedevi, Kathmandu. Check our Contact page for a map and directions.";
      } else if (lowerMessage.includes("history")) {
        response = "Our organization was founded to support students in their academic and personal development. Learn more about us on the About Us page.";
      } else if (lowerMessage.includes("volunteer")) {
        response = "We welcome volunteers! You can find more information and sign up on our Volunteering page.";
      } else if (lowerMessage.includes("hello")) {
        response = "Hello! How can I assist you today?";
      } else if (lowerMessage.includes("help")) {
        response = "I'm here to help! You can ask me about our organization, events, membership, and more.";
  
      // IT and School Related Responses
      } else if (lowerMessage.includes("it courses") || lowerMessage.includes("programming courses")) {
        response = "We offer a variety of IT courses including Web Development, Data Science, Cybersecurity, and more. Check our Courses page for details.";
      } else if (lowerMessage.includes("coding resources") || lowerMessage.includes("programming resources")) {
        response = "You can find coding tutorials, project ideas, and programming resources in the Resources section on our website.";
      } else if (lowerMessage.includes("career advice") || lowerMessage.includes("career guidance")) {
        response = "We offer career counseling sessions and workshops. Check our Events page for upcoming career guidance events.";
      } else if (lowerMessage.includes("internships")) {
        response = "We partner with various companies to provide internship opportunities. Visit our Internships page for more information.";
      } else if (lowerMessage.includes("academic calendar")) {
        response = "You can view the academic calendar, including important dates and deadlines, on the Academic Calendar page of our website.";
      } else if (lowerMessage.includes("admissions")) {
        response = "Information on admissions, including requirements and deadlines, can be found on the Admissions page.";
      } else if (lowerMessage.includes("campus facilities")) {
        response = "Our campus offers a range of facilities including libraries, computer labs, and recreational areas. Check the Campus Facilities page for more details.";
      } else if (lowerMessage.includes("course materials")) {
        response = "Course materials and lecture notes are available for download from the Resources section on our website.";
      } else if (lowerMessage.includes("labs")) {
        response = "We have state-of-the-art labs for various disciplines. Visit our Campus Facilities page to learn more.";
      } else if (lowerMessage.includes("clubs") || lowerMessage.includes("extracurricular")) {
        response = "We have various clubs and extracurricular activities. Check the Clubs and Activities section for more details.";
      } else {
        response = "I'm not sure about that. Could you please ask something else?";
      }
  
      displayMessage(response, "bot");
    }
  });
  
  function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const isVisible = chatbotContainer.style.display === 'none' || !chatbotContainer.style.display;

    if (isVisible) {
        chatbotContainer.style.display = 'block';
        chatbotContainer.classList.add('slide-in');
    } else {
        chatbotContainer.style.display = 'none';
        chatbotContainer.classList.remove('slide-in');
    }
}
