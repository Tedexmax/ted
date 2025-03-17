const predefinedResponses = {
    "hello": "Hello! How can I assist you with your career today?",
    "hi": "Hi there! What career-related questions do you have?",
    "how are you": "I'm here to help you with your career goals.",
    "what's your name": "I'm your virtual career coach, here to guide you.",
    "bye": "Goodbye! Wishing you success in your career.",
    "help": "Of course! What specific career advice do you need?",
    "What is the name of your college?": "The name of our college is Shreeyash College of Engineering and Technology (SYCET), located in Aurangabad, Maharashtra.",
    "When was Shreeyash College of Engineering and Technology established?": "Shreeyash College of Engineering and Technology was established in 2008.",
    "What university is your college affiliated with?": "We are affiliated with Dr. Babasaheb Ambedkar Marathwada University (BAMU) and are approved by the All India Council for Technical Education (AICTE).",
    "Where is your college located?": "Our college is located at Gut No. 258 (P), Satara Parisar, Near SRPF Camp, Beed By Pass Road, Aurangabad, Maharashtra 431005, India.",
    "How can I contact the college?": "You can reach us at 0240-6608701, 0240-6608702, or 0240-6608710. For mobile inquiries, you can contact us at 7030307681 or 8067205750.",
    "What programs do you offer for undergraduate students?": "We offer Bachelor of Engineering (B.E.) programs in Mechanical Engineering, Computer Science, Civil Engineering, Electronics & Telecommunication, and Information Technology.",
    "Do you offer any postgraduate programs?": "Yes, we offer M.Tech programs in Structural Engineering, Mechanical Engineering, Electronics & Telecommunication, and Computer Science. We also offer an MBA with specializations in Financial Management, Marketing, and Human Resource.",
    "How do I apply for undergraduate courses at your college?": "You can apply for our B.E. programs based on your scores in JEE Main or MHT CET exams.",
    "How do I apply for postgraduate courses?": "For M.Tech admissions, you need to have a valid GATE score. For MBA, you can apply based on scores from exams like XAT, MAT, CMAT, ATMA, and others.",
    "What is the highest salary offered during placements?": "The highest salary offered to our students during placements was INR 10 LPA.",
    "What is the average salary for placed students?": "The average salary offered during our placements was INR 3.3 LPA.",
    "Which companies visit for campus placements?": "Some of the top recruiters that visit our campus for placements include Bajaj Auto, Siemens, Wipro, Varroc, Endurance, and Yeshshree COMP.",
    "Does the college have a placement cell?": "Yes, we have a dedicated training and placement cell that works hard to facilitate campus recruitment and internships for our students.",
    "Do you have hostel facilities?": "Yes, we provide separate hostels for boys and girls. The boys’ hostel can accommodate 600 students, and the girls’ hostel can accommodate 300 students. Our hostels are equipped with mess facilities, gym, RO water, and 24/7 transportation for medical emergencies.",
    "What is available in your college library?": "Our library has over 20,000 books and journals, both national and international, and we also have an e-library for students to access resources online.",
    "Do you have sports facilities at the college?": "Yes, we have sports grounds and various recreational activities for students, ensuring a balanced campus life.",
    "What is the food like in your college canteen?": "Our college canteen provides clean and healthy food, and we ensure purified water is available at all times.",
    "Do you have Wi-Fi on campus?": "Yes, the campus is equipped with 24/7 Wi-Fi access for both students and staff.",
    "How many faculty members do you have?": "We have 102 faculty members, with 6 of them holding Ph.D. degrees. Our faculty is highly experienced and committed to helping students succeed.",
    "Can you tell me about the extracurricular activities at your college?": "We organize a variety of cultural, technical, and sports events throughout the year. We also have student clubs focused on areas like robotics, entrepreneurship, and coding.",
    "Is your college accredited?": "Yes, we are approved by AICTE, and some of our engineering programs are accredited by the National Board of Accreditation (NBA).",
    "Do you have any international collaborations?": "Yes, we have collaborations with various global institutions for student exchange programs and research opportunities.",
    "How much is the fee for undergraduate programs?": "The fee structure for B.E. programs depends on the specialization. You can find detailed information on our official website or by contacting the administration.",
    "How much does it cost to study a postgraduate program?": "The fee structure for M.Tech and MBA programs can be found on our official website or by contacting the college administration.",
    "Do you offer scholarships for students?": "Yes, we offer various scholarships based on merit and financial need. For detailed information, please contact the administration or visit the official website.",
    "When is the admission deadline?": "The admission deadlines vary depending on the program. You can check the official website or contact the admission office for the exact dates.",
    "admission_deadlines": "Admission deadlines for different programs are announced annually. Please refer to the college website or contact the admission office for exact dates.",
    "what skills are in demand": "Skills in tech, data analysis, and communication are highly sought after in many fields.",
    "What is the campus size of SYCET?": "Our campus spans 55 acres, providing a spacious and green environment for academic and extracurricular activities.",
    "What facilities are available on campus?": "We offer a range of facilities including a central library with over 26,000 volumes, well-equipped laboratories, a gymnasium, sports facilities, and separate hostels for boys and girls.",
    "How is the hostel accommodation at SYCET?": "Our hostels provide comfortable accommodation with essential amenities, hygienic food, and a safe environment for both boys and girls.",
    "What is the student diversity like at SYCET?": "Our student body comprises a mix of male and female students from various backgrounds, fostering a diverse and inclusive community.",
    "Does the college provide internship opportunities?": "Yes, we offer various internship opportunities across different engineering disciplines, with stipends around INR 15,000 per month for some positions.",
    "What is the fee structure for the MBA program?": "The annual fee for the MBA program is approximately INR 1,30,000. For detailed fee structures, please refer to our official website.",
    "How is the campus environment at SYCET?": "Students appreciate the safe and supportive campus environment, with positive reviews highlighting faculty support and campus life.",
    "What extracurricular activities are available?": "We organize various cultural, technical, and sports events, along with student clubs focused on robotics, entrepreneurship, and coding.",
    "How does the college support placements?": "Our dedicated training and placement cell facilitates campus recruitment and internships, with average salaries ranging from INR 50,000 to INR 1,00,000 per year.",
    "foster a culture of gratitude": "Encourage recognition of contributions, celebrate successes, and express appreciation regularly.",
    "develop skills for effective research": "Use credible sources, analyze data critically, and summarize findings clearly."
        
 };
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatArea = document.getElementById('chatArea');

    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Display user message
        chatArea.innerHTML += `<p class="user"><strong>You:</strong> ${userMessage}</p>`;
        userInput.value = '';

        // Get bot response
        const botResponse = getBestResponse(userMessage);
        chatArea.innerHTML += `<p class="bot"><strong>Bot:</strong> ${botResponse}</p>`;
        chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the bottom
    }
}

// Function to find the best response based on 50% string similarity
function getBestResponse(userMessage) {
    let bestResponse = "Sorry, I don't understand that."; // Default response
    let highestSimilarity = 0;

    // Iterate through predefined responses
    for (const key in predefinedResponses) {
        const similarity = stringSimilarity(userMessage.toLowerCase(), key.toLowerCase());

        // Check if similarity is 50% or higher and update the best match
        if (similarity >= 0.5 && similarity > highestSimilarity) {
            highestSimilarity = similarity;
            bestResponse = predefinedResponses[key];
        }
    }

    return bestResponse;
}

// Simple function to calculate similarity based on common characters
function stringSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) {
        return 1.0;
    }

    const commonCharCount = getCommonCharacterCount(longer, shorter);
    return commonCharCount / longer.length;
}

// Function to count common characters between two strings
function getCommonCharacterCount(str1, str2) {
    const str1CharArray = str1.split('');
    const str2CharArray = str2.split('');
    let commonCount = 0;

    str1CharArray.forEach(char => {
        const indexInStr2 = str2CharArray.indexOf(char);
        if (indexInStr2 !== -1) {
            commonCount++;
            str2CharArray.splice(indexInStr2, 1); // Remove matched character from str2 to avoid duplicates
        }
    });

    return commonCount;
}

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
