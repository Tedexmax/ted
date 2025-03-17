const predefinedResponses = {
    "hello": "Hello! How can I help you learn more about Shreeyash College of Engineering and Technology today?",
    "hi": "Hi there! What information about SYCET can I assist you with?",
    "how are you": "I'm here and ready to assist you with any queries you have about our college.",
    "what's your name": "I am the official SYCET chatbot, here to provide you with all the information you need about our college.",
    "bye": "Goodbye! We hope to welcome you to SYCET soon. Best of luck with your future endeavors.",
    "help": "Absolutely! How can I assist you with your questions regarding admissions, courses, or anything else about SYCET?",
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
    "develop skills for effective research": "Use credible sources, analyze data critically, and summarize findings clearly.",
    "What is the name of your polytechnic?": "The name of our polytechnic is Shreeyash Polytechnic, located in Aurangabad, Maharashtra.",
    "When was Shreeyash Polytechnic established?": "Shreeyash Polytechnic was established in 2008, as part of the Shreeyash Group of Institutions.",
    "What programs do you offer at Shreeyash Polytechnic?": "We offer diploma programs in various engineering disciplines, including Mechanical Engineering, Civil Engineering, Electrical Engineering, and Computer Engineering.",
    "What is the admission process for Shreeyash Polytechnic?": "Admissions to Shreeyash Polytechnic are based on the Maharashtra State Board of Technical Education (MSBTE) norms. You can apply through the centralized admission process (CAP) or directly through the college.",
    "Is Shreeyash Polytechnic affiliated with any university?": "Yes, Shreeyash Polytechnic is affiliated with the Maharashtra State Board of Technical Education (MSBTE), Mumbai.",
    "Does Shreeyash Polytechnic offer hostel facilities?": "Yes, Shreeyash Polytechnic provides separate hostel accommodations for boys and girls with necessary amenities like mess, security, and transportation facilities.",
    "What is the placement record of Shreeyash Polytechnic?": "Shreeyash Polytechnic has a dedicated placement cell that helps students secure placements in well-known companies. Our students have been placed in top companies in the engineering sector.",
    "Does Shreeyash Polytechnic provide internships?": "Yes, we provide internship opportunities to our students to gain practical experience in their respective fields. These internships are often arranged with industry partners.",
    "What are the facilities available at Shreeyash Polytechnic?": "Our polytechnic campus has state-of-the-art classrooms, well-equipped laboratories, workshops, a library with a vast collection of books, and a sports ground for extracurricular activities.",
    "How can I contact Shreeyash Polytechnic?": "You can reach us at our contact number: 0240-6608701 or email us at info@shreeyashpolytechnic.edu. Alternatively, you can visit our campus in Aurangabad.",
    "What is the fee structure for diploma courses at Shreeyash Polytechnic?": "The fee structure for diploma courses at Shreeyash Polytechnic may vary depending on the program. For detailed fee information, please contact our admission office or check our website.",
    "Are there scholarships available for students?": "Yes, Shreeyash Polytechnic offers scholarships based on merit and need. For more information, you can contact our administration office or visit our website.",
    "Is there any student exchange program at Shreeyash Polytechnic?": "Currently, Shreeyash Polytechnic does not offer a formal student exchange program, but we encourage participation in industry visits, seminars, and workshops to enhance student learning.",
    "How do I apply for a diploma course at Shreeyash Polytechnic?": "You can apply for our diploma courses through the Maharashtra State Board of Technical Education (MSBTE) admission process or directly through the college, depending on the category.",
    "What is the campus environment like at Shreeyash Polytechnic?": "Our campus provides a positive and focused environment for students, with a blend of academic and extracurricular activities. We encourage a friendly atmosphere among students and faculty.",
    "How do I get the syllabus for my diploma course?": "The syllabus for each diploma program is available on the official MSBTE website. You can also ask our faculty or visit the department for the syllabus related to your specific course.",
    "Does Shreeyash Polytechnic provide online learning resources?": "Yes, Shreeyash Polytechnic provides online resources such as digital libraries and e-learning platforms to support students in their learning journey.",
    "What are the extra-curricular activities available at Shreeyash Polytechnic?": "We offer a variety of extracurricular activities, including cultural events, sports, technical workshops, and student clubs focusing on robotics, coding, and entrepreneurship.",
    "What is the student-teacher ratio at Shreeyash Polytechnic?": "Our student-teacher ratio is approximately 20:1, which ensures that each student receives adequate attention and guidance.",
    "Does the polytechnic offer part-time courses?": "Currently, Shreeyash Polytechnic offers full-time diploma courses. However, we are exploring options for part-time courses in the future.",
    "Can I transfer from another polytechnic to Shreeyash Polytechnic?": "Yes, we accept transfers from other polytechnics based on eligibility criteria. Please contact our administration office for more details on the transfer process.",
    "What are the career prospects after completing a diploma from Shreeyash Polytechnic?": "Our diploma graduates are well-prepared for careers in engineering industries. Many of our students find employment in reputed companies, and others pursue higher studies or entrepreneurship.",
    "Does Shreeyash Polytechnic offer any career counseling?": "Yes, we offer career counseling services to help students plan their career paths, identify suitable job opportunities, and guide them through the placement process.",
    "Is there a library at Shreeyash Polytechnic?": "Yes, we have a well-equipped library with a wide range of books, journals, and online resources to support your academic and research needs.",
    "Can I apply for Shreeyash Polytechnic if I have a gap year?": "Yes, we accept students who have taken a gap year, as long as they meet the eligibility criteria and have relevant academic qualifications.",
    "What industries do your students get placed in?": "Our students get placed in a variety of industries such as construction, manufacturing, IT, electrical, and automotive sectors, with top companies like Siemens, L&T, Bajaj Auto, and many others.",
    "Does the polytechnic have a placement cell?": "Yes, we have a dedicated placement cell that works to bridge the gap between students and potential employers, ensuring successful placements.",
    "What are the benefits of studying at Shreeyash Polytechnic?": "At Shreeyash Polytechnic, you get quality education, practical training, placement assistance, and a supportive learning environment, all of which help prepare you for a successful career.",
    "How do I get my diploma certificate after completing the course?": "Once you complete your diploma course, you will receive your certificate after clearing all required examinations. You can apply for it through the administration office.",
    "What is the fee for hostel accommodation?": "The fee for hostel accommodation varies depending on the type of room and amenities. For detailed fee information, please contact the hostel office.",
    "Does Shreeyash Polytechnic have a sports facility?": "Yes, we have sports facilities on campus for various indoor and outdoor games, promoting physical fitness and extracurricular development.",
    "What is the duration of diploma courses at Shreeyash Polytechnic?": "The diploma courses at Shreeyash Polytechnic are typically 3 years long, with a structured curriculum designed to provide both theoretical knowledge and practical experience.",
    "Can I pursue higher studies after completing my diploma at Shreeyash Polytechnic?": "Yes, after completing your diploma, you can pursue higher studies such as a B.Tech through lateral entry, or opt for various other post-diploma courses.",
    "Is there any provision for part-time or evening classes?": "Currently, we offer full-time courses. However, we are exploring options for offering part-time or evening classes in the future.",
    "What is the class schedule like at Shreeyash Polytechnic?": "Our classes are typically held during the day, with a mix of theory and practical sessions. The schedule is designed to ensure a comprehensive learning experience for students.",
    "Does Shreeyash Polytechnic have a website?": "Yes, Shreeyash Polytechnic has an official website where you can find detailed information about courses, admissions, faculty, and campus facilities."
        
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
