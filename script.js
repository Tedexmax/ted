const predefinedResponses = {
    "hello": "Hello! How can I assist you with your career today?",
    "hi": "Hi there! What career-related questions do you have?",
    "how are you": "I'm here to help you with your career goals.",
    "what's your name": "I'm your virtual career coach, here to guide you.",
    "bye": "Goodbye! Wishing you success in your career.",
    "help": "Of course! What specific career advice do you need?",
    "what can you do": "I can provide career advice, help with job searching, and offer professional development tips.",
    "tell me a joke": "Why did the scarecrow get promoted? Because he was outstanding in his field!",
    "how do I prepare for an interview": "Research the company, practice common interview questions, and prepare your own questions.",
    "what skills should I develop": "Focus on skills relevant to your desired career path. Soft skills like communication and teamwork are essential.",
    "how can I network effectively": "Attend industry events, connect on LinkedIn, and reach out to alumni from your school.",
    "what should I include in my resume": "Highlight relevant experience, skills, and accomplishments. Tailor it to each job application.",
    "how do I find a mentor": "Look for someone in your field whose career path you admire. Reach out for advice or coffee chats.",
    "how can I improve my LinkedIn profile": "Use a professional photo, write a compelling summary, and showcase your skills and achievements.",
    "how do I deal with job search anxiety": "Take breaks, stay organized, and focus on what you can control. Remember, it's a process.",
    "what are some good interview questions to ask": "Ask about company culture, team dynamics, and growth opportunities.",
    "how do I ask for a raise": "Prepare your case by outlining your contributions and market research. Schedule a meeting to discuss it professionally.",
    "how can I balance work and personal life": "Set boundaries, prioritize self-care, and manage your time effectively.",
    "what's a good way to transition careers": "Identify transferable skills, network in your desired field, and consider additional training or education.",
    "how can I stay motivated in my job search": "Set small, achievable goals, celebrate progress, and surround yourself with supportive people.",
    "what's a good professional development resource": "Consider online courses, webinars, or workshops relevant to your field.",
    "how can I showcase my skills in an interview": "Use specific examples from past experiences to demonstrate your skills and achievements.",
    "how do I handle workplace conflict": "Address issues directly but diplomatically, focusing on solutions rather than blame.",
    "what should I do if I'm feeling stuck in my career": "Reflect on your goals, seek feedback, and consider new opportunities or training.",
    "how do I create a career plan": "Set short-term and long-term goals, outline steps to achieve them, and review regularly.",
    "what's the best way to learn a new skill": "Consider online courses, practice regularly, and seek feedback from others in the field.",
    "how can I enhance my public speaking skills": "Practice regularly, join a group like Toastmasters, and seek opportunities to speak in front of others.",
    "how do I evaluate job offers": "Consider salary, benefits, company culture, growth opportunities, and work-life balance.",
    "how can I stay relevant in my field": "Continue learning through courses, certifications, and networking with industry professionals.",
    "what's the importance of soft skills": "Soft skills enhance teamwork, communication, and adaptability, which are crucial in any job.",
    "how do I set career goals": "Identify what you want to achieve, make them SMART (Specific, Measurable, Achievable, Relevant, Time-bound), and create an action plan.",
    "how can I make a good first impression": "Be punctual, dress appropriately, and show enthusiasm and confidence in your interactions.",
    "how do I stay organized in my job search": "Use a spreadsheet to track applications, deadlines, and follow-ups, and set regular check-ins for progress.",
    "how do I prepare for a job interview": "Research the company, practice common interview questions, and prepare your own questions.",
    "what should I include in my resume": "Highlight your relevant skills, experiences, and achievements. Tailor it for each job application.",
    "how can I network effectively": "Attend industry events, connect on LinkedIn, and follow up with new contacts.",
    "what skills are in demand": "Skills in tech, data analysis, and communication are highly sought after in many fields.",
    "how do I ask for a raise": "Prepare your case with evidence of your contributions, and request a meeting to discuss it professionally.",
    "how do I change careers": "Identify transferable skills, research your desired field, and consider taking courses to bridge any gaps.",
    "what's the best way to create a portfolio": "Include work samples, case studies, and testimonials that showcase your skills and achievements.",
    "how do I find a mentor": "Reach out to professionals in your field, express your admiration, and ask if they’d be willing to guide you.",
    "how can I boost my confidence at work": "Prepare thoroughly, focus on your strengths, and practice positive self-talk.",
    "what certifications should I pursue": "Look for certifications that are recognized in your industry and align with your career goals.",
    "how do I handle workplace conflict": "Address issues directly and respectfully, focusing on solutions rather than blame.",
    "how can I improve my public speaking skills": "Practice regularly, join groups like Toastmasters, and seek constructive feedback.",
    "what's a good strategy for job searching": "Network, tailor your resume, and apply to jobs that align with your skills and interests.",
    "how do I stay motivated in my job search": "Set small, achievable goals and celebrate each step forward, no matter how small.",
    "how do I negotiate my job offer": "Research industry salary standards, know your worth, and practice your negotiation points.",
    "what should I do if I feel stuck in my career": "Reflect on your goals, seek feedback, and consider new opportunities or skill development.",
    "how do I enhance my LinkedIn profile": "Include a professional photo, a strong headline, and detailed descriptions of your experiences and skills.",
    "how can I make a good first impression at work": "Be punctual, dress appropriately, and show enthusiasm in your interactions.",
    "how do I manage my time effectively at work": "Prioritize tasks, set deadlines, and use tools like calendars or to-do lists to stay organized.",
    "how can I develop leadership skills": "Take on small leadership roles in projects, seek mentorship, and engage in professional development.",
    "what should I do if I don't meet job requirements": "Focus on your transferable skills and express your eagerness to learn and grow in the role.",
    "how can I create a professional development plan": "Identify your career goals, assess your current skills, and outline steps to achieve those goals.",
    "what should I include in a cover letter": "Explain your interest in the position, highlight relevant experiences, and convey your enthusiasm for the company.",
    "how can I prepare for a performance review": "Document your accomplishments, set clear goals, and prepare to discuss areas for improvement.",
    "what are some good questions to ask in an interview": "Ask about team dynamics, company culture, and growth opportunities within the organization.",
    "how do I manage work-life balance": "Set boundaries, prioritize self-care, and ensure you take time for personal interests.",
    "how can I stay updated on industry trends": "Follow relevant blogs, subscribe to newsletters, and join professional groups or associations.",
    "what's a good way to handle job rejection": "Reflect on the experience, seek feedback, and use it as an opportunity to grow and improve.",
    "how can I make a career change at 30": "Identify your passions, network with professionals in the field, and consider additional education or training.",
    "how can I be more proactive in my career": "Seek out new projects, volunteer for leadership opportunities, and continuously seek feedback.",
    "what's a good way to ask for a promotion": "Prepare a case highlighting your contributions, express your career goals, and request a meeting with your manager.",
    "how do I build a personal brand": "Define your unique value proposition, consistently share your expertise, and engage with your audience.",
    "what skills should I develop for my career": "Focus on both hard skills related to your field and soft skills like communication and teamwork.",
    "how can I build resilience in my career": "Embrace challenges, learn from setbacks, and maintain a positive outlook on your professional journey.",
    "how can I set career goals": "Start by identifying your passions, skills, and values, then create SMART goals.",
    "what should I do if I feel unqualified for a job": "Focus on your transferable skills and be honest about your willingness to learn.",
    "how can I develop better communication skills": "Practice active listening, seek feedback, and engage in public speaking opportunities.",
    "what's the best way to handle criticism at work": "Take it constructively, seek clarification, and use it to improve your performance.",
    "how can I improve my teamwork skills": "Participate in team projects, communicate openly, and be willing to compromise.",
    "what's a good way to find job openings": "Use job boards, company websites, and leverage your network for referrals.",
    "how do I build confidence in my skills": "Keep track of your achievements and seek opportunities to practice and showcase your skills.",
    "what should I do if I'm unhappy at work": "Identify the reasons for your dissatisfaction and consider discussing them with your manager or seeking new opportunities.",
    "how can I get noticed by recruiters": "Optimize your LinkedIn profile, engage in networking, and tailor your applications to specific roles.",
    "what are the benefits of networking": "Networking can lead to job opportunities, mentorship, and valuable industry insights.",
    "how can I effectively follow up after an interview": "Send a thank-you email reiterating your interest and highlighting key points from the conversation.",
    "what's the best way to handle a difficult boss": "Communicate openly about your challenges and seek to understand their expectations.",
    "how do I choose the right career path": "Reflect on your interests, values, and skills, and research different industries and roles.",
    "what's a good way to present myself in a networking event": "Dress appropriately, prepare a brief elevator pitch, and be open to conversations.",
    "how can I improve my emotional intelligence": "Practice self-awareness, empathy, and effective communication in your interactions.",
    "what's the best way to stay organized at work": "Use digital tools or planners, prioritize tasks, and declutter your workspace regularly.",
    "how can I gain experience in a new field": "Consider internships, volunteer work, or online courses related to your desired field.",
    "what should I do if I'm not getting any job interviews": "Revise your resume and cover letter, and consider seeking feedback from a mentor or career coach.",
    "how do I manage my work stress": "Practice time management, take regular breaks, and engage in stress-relief activities outside of work.",
    "how can I showcase my skills during an interview": "Use the STAR method to structure your responses, highlighting relevant experiences.",
    "what's the best way to transition into a leadership role": "Seek mentorship, develop your leadership skills, and express your interest to your superiors.",
    "how can I deal with burnout at work": "Recognize the signs early, take breaks, and communicate your feelings to your manager.",
    "what's a good way to research companies before applying": "Visit their website, read reviews, and check out their social media to understand their culture.",
    "how can I improve my problem-solving skills": "Practice critical thinking exercises and seek diverse perspectives on challenges.",
    "what should I include in my professional portfolio": "Samples of your work, testimonials, and a summary of your skills and achievements.",
    "how can I make my LinkedIn profile stand out": "Use a professional photo, write a compelling summary, and engage with your network regularly.",
    "how can I better manage remote work": "Set a routine, create a dedicated workspace, and maintain clear communication with your team.",
    "how do I identify my strengths and weaknesses": "Reflect on past feedback, take self-assessment tests, and seek input from trusted colleagues.",
    "what's the best way to handle a job offer I’m unsure about": "Take your time to evaluate it, consider your priorities, and discuss any concerns with the employer.",
    "how can I develop a strong personal brand": "Identify your unique value, consistently share your expertise, and engage with your audience online.",
    "how do I handle job loss": "Take time to process your emotions, update your resume, and start networking again.",
    "what are some effective time management techniques": "Try the Eisenhower Matrix or the Pomodoro Technique to stay focused and prioritize tasks.",
    "how can I improve my negotiation skills": "Practice role-playing scenarios and prepare your points before discussions.",
    "how do I find a work-life balance": "Set boundaries, prioritize self-care, and schedule time for personal interests.",
    "what should I do if I feel overwhelmed at work": "Take a step back, prioritize your tasks, and communicate with your manager for support.",
    "how can I develop a growth mindset": "Embrace challenges, learn from feedback, and see failures as opportunities to grow.",
    "what's a good way to ask for feedback at work": "Request specific feedback on your performance and express your willingness to improve.",
    "how can I stay motivated in my job": "Set new goals, seek new challenges, and connect with colleagues for support.",
    "what's a good way to prepare for a career change": "Research the new field, gain relevant skills, and network with professionals in that area.",
    "how can I handle a difficult coworker": "Communicate openly, set boundaries, and focus on maintaining professionalism.",
    "what should I do if I want to start my own business": "Develop a solid business plan, conduct market research, and seek advice from experienced entrepreneurs.",
    "how can I enhance my analytical skills": "Engage in data analysis projects, take relevant courses, and practice critical thinking.",
    "what's a good way to keep learning after college": "Attend workshops, pursue certifications, and engage in online courses relevant to your career.",
    "how do I build a professional network": "Attend industry events, participate in online forums, and connect with colleagues on LinkedIn.",
    "how can I prepare for a skills assessment test": "Review the required skills, practice with sample tests, and ensure you understand the format.",
    "what should I do if I’m not passionate about my job": "Explore your interests outside of work and consider how they might align with your career.",
    "how can I balance multiple job offers": "Evaluate each offer based on your career goals, company culture, and personal values.",
    "what's the best way to present a project at work": "Organize your content clearly, practice beforehand, and engage your audience during the presentation.",
    "how can I develop my creative skills": "Explore different mediums, seek inspiration from others, and allow yourself to experiment.",
    "how do I find a suitable career coach": "Look for someone with relevant experience, good reviews, and a coaching style that resonates with you.",
    "what's a good way to set boundaries at work": "Communicate your limits clearly and assertively, and prioritize your own well-being.",
    "how can I improve my adaptability at work": "Stay open to change, embrace new challenges, and seek feedback on your adaptability.",
    "what should I do if I feel undervalued at work": "Document your contributions, communicate with your manager, and advocate for yourself.",
    "how can I prepare for a professional conference": "Plan your schedule, research attendees and speakers, and prepare your elevator pitch.",
    "what's the best way to stay focused during long meetings": "Take notes, participate actively, and set personal goals for each meeting.",
    "how can I effectively manage my email": "Set specific times to check your email, use folders, and prioritize important messages.",
    "how do I improve my technical skills": "Take online courses, practice regularly, and seek mentorship from knowledgeable colleagues.",
    "what's a good way to handle workplace gossip": "Stay neutral, avoid participating, and focus on building positive relationships.",
    "how can I prepare for a presentation": "Know your audience, practice multiple times, and prepare for questions.",
    "how do I build resilience in my career": "Stay positive, seek support from colleagues, and learn from setbacks.",
    "what's a good strategy for team collaboration": "Establish clear roles, maintain open communication, and use collaborative tools effectively.",
    "how can I enhance my leadership skills": "Seek feedback, take on leadership roles in projects, and study effective leaders.",
    "what should I do if I'm feeling isolated at work": "Reach out to colleagues, join team activities, and consider talking to HR about your feelings.",
    "how do I approach a career mentor": "Be respectful of their time, express your admiration for their work, and ask for specific advice.",
    "what's the best way to follow industry trends": "Subscribe to industry publications, join professional groups, and attend webinars.",
    "how can I improve my writing skills for work": "Practice writing regularly, seek feedback, and read well-written content in your field.",
    "how do I create a strong CV": "Focus on clarity, tailor it for each position, and highlight your achievements with quantifiable results.",
    "what's the best way to manage workplace relationships": "Communicate openly, show appreciation, and maintain professionalism at all times.",
    "how can I enhance my critical thinking skills": "Engage in discussions, analyze various viewpoints, and challenge your assumptions.",
    "how do I transition from a technical role to management": "Seek leadership training, develop soft skills, and express your career goals to your employer.",
    "what should I do if I'm facing a career setback": "Assess the situation, learn from it, and create a plan to move forward.",
    "how can I improve my sales skills": "Practice active listening, understand customer needs, and learn effective closing techniques.",
    "what's a good way to build rapport with clients": "Show genuine interest, communicate clearly, and be responsive to their needs.",
    "how can I better manage my personal brand online": "Be consistent in your messaging, engage positively with your audience, and share valuable content.",
    "what should I do if I want to pursue further education": "Research programs that align with your career goals and consider your financial situation.",
    "how do I handle work-related anxiety": "Practice mindfulness techniques, establish a support system, and address the source of your anxiety.",
    "what's the best way to create a strong team culture": "Encourage open communication, celebrate successes, and prioritize team bonding activities.",
    "how can I effectively communicate my career aspirations": "Schedule a meeting with your manager to discuss your goals and seek their input.",
    "how do I balance professional and personal development": "Set clear goals for both areas and allocate time in your schedule for each.",
    "what's a good way to develop negotiation tactics": "Study successful negotiators, practice role-playing scenarios, and learn from real-life experiences.",
    "how can I improve my ability to give constructive feedback": "Be specific, focus on behaviors rather than personal attributes, and offer suggestions for improvement.",
    "how do I stay current with technological advancements in my field": "Take online courses, attend workshops, and follow industry leaders on social media.",
    "what's the best way to create an elevator pitch": "Keep it concise, highlight your unique selling points, and practice delivering it confidently.",
    "how can I find balance during a career transition": "Set realistic expectations, seek support, and give yourself time to adjust.",
    "what should I do if I'm struggling with imposter syndrome": "Acknowledge your achievements, talk about your feelings with trusted colleagues, and focus on your strengths.",
    "how can I improve my listening skills": "Practice active listening techniques, such as paraphrasing and asking clarifying questions.",
    "what's a good way to prepare for a job shadowing opportunity": "Research the role, come with questions, and be open to learning from the experience.",
    "how do I maintain motivation in a long-term project": "Set milestones, celebrate small wins, and remind yourself of the end goal.",
    "what's the best way to network with industry leaders": "Engage with them on social media, attend their talks, and be genuine in your approach.",
    "how can I build a strong reputation in my field": "Deliver quality work consistently, engage with your community, and be a source of knowledge.",
    "how do I handle a challenging project at work": "Break it down into manageable tasks, seek input from others, and stay focused on solutions.",
    "what's a good way to reflect on my career progress": "Schedule regular check-ins with yourself, review your goals, and adjust as needed.",
    "how can I develop a positive attitude at work": "Practice gratitude, focus on solutions rather than problems, and surround yourself with positive influences.",
    "how do I improve my strategic thinking skills": "Engage in problem-solving exercises, stay informed about industry trends, and think critically about challenges.",
    "what's the best way to mentor someone in my field": "Share your knowledge generously, provide constructive feedback, and encourage their growth.",
    "how can I establish credibility with my peers": "Deliver consistent quality work, communicate transparently, and be reliable in your commitments.",
    "what should I do if I feel like I’m in a toxic work environment": "Identify the issues, document specific incidents, and consider discussing your concerns with HR.",
    "how can I enhance my cross-cultural communication skills": "Educate yourself about different cultures, be open-minded, and practice active listening.",
    "what's a good way to leverage social media for my career": "Share industry insights, connect with professionals, and showcase your expertise.",
    "how do I improve my resilience after setbacks": "Reflect on the lessons learned, seek support, and maintain a positive outlook on future challenges.",
    "what's the best way to handle office politics": "Stay professional, build genuine relationships, and focus on your work performance.",
    "how can I create a productive work environment": "Organize your space, minimize distractions, and establish a routine that works for you.",
    "how do I encourage innovation within my team": "Foster a culture of open communication, reward creative ideas, and allow for experimentation.",
    "what should I do if I'm feeling bored at work": "Seek new challenges, take on additional responsibilities, or discuss your interests with your manager.",
    "how can I effectively present data to my team": "Use visuals to support your points, keep it simple, and encourage questions.",
    "what's a good way to cultivate curiosity in my career": "Stay open to learning, ask questions, and explore new areas of interest.",
    "how do I create a career development plan": "Set specific goals, identify the skills needed, and outline steps to achieve those goals.",
    "what should I do if I experience discrimination at work": "Document incidents, seek support from HR, and consider legal options if necessary.",
    "how can I improve my decision-making skills": "Analyze the pros and cons, seek input from others, and trust your instincts.",
    "what's the best way to handle job-related stress": "Identify triggers, develop coping strategies, and prioritize self-care.",
    "how do I maintain professionalism in challenging situations": "Stay calm, focus on solutions, and communicate respectfully.",
    "how can I develop a habit of continuous learning": "Set aside regular time for learning, explore new topics, and seek diverse sources of information.",
    "what's a good strategy for managing remote teams": "Establish clear communication channels, set expectations, and encourage team bonding activities.",
    "how can I make a successful career pivot": "Assess your transferable skills, network in your new field, and consider further education if needed.",
    "what should I do if I want to improve my public speaking skills": "Practice regularly, join speaking groups, and seek constructive feedback.",
    "how can I create a positive work environment": "Encourage collaboration, recognize achievements, and prioritize mental health.",
    "how do I identify and overcome limiting beliefs in my career": "Reflect on your beliefs, challenge them with evidence, and seek support from mentors.",
    "what's the best way to conduct an informational interview": "Prepare thoughtful questions, be respectful of their time, and express gratitude afterward.",
    "how can I improve my project management skills": "Use project management tools, learn from experienced managers, and practice leading small projects.",
    "what's a good way to stay motivated during a long job search": "Set achievable daily goals, celebrate small wins, and connect with others for support.",
    "how do I build a diverse professional network": "Seek out connections from various backgrounds, attend diverse events, and be open to different perspectives.",
    "how can I improve my analytical thinking": "Engage in puzzles and logic games, analyze case studies, and practice breaking down complex problems.",
    "what's the best way to transition from college to the workforce": "Network, seek internships, and develop a professional online presence.",
    "how can I effectively manage my time in a fast-paced environment": "Prioritize tasks, use time-blocking techniques, and avoid multitasking.",
    "how do I prepare for an unexpected job interview": "Research common interview questions, understand the company, and practice your answers.",
    "what's a good way to ask for a mentor": "Be clear about what you hope to gain, express your admiration for their work, and ask respectfully.",
    "how can I improve my adaptability skills": "Stay open to feedback, embrace new challenges, and learn from experiences.",
    "what's the best way to negotiate salary": "Do your research, know your worth, and practice your negotiation points before the discussion.",
    "how can I better handle work-related conflict": "Address issues directly and respectfully, focus on the problem, and seek common ground.",
    "what should I do if I'm considering leaving my job": "Reflect on your reasons, explore other options, and ensure you have a plan before making a move.",
    "how can I enhance my teamwork skills": "Communicate openly, respect diverse opinions, and contribute actively to group efforts.",
    "what's a good way to present myself during a job fair": "Dress professionally, have copies of your resume, and be ready to engage with potential employers.",
    "how do I stay focused on my career goals": "Write down your goals, review them regularly, and track your progress.",
    "what's the best way to foster a culture of feedback": "Encourage regular feedback sessions, model constructive criticism, and create a safe space for sharing.",
    "how can I effectively promote my achievements at work": "Share your successes in team meetings, update your manager regularly, and use your performance reviews as opportunities.",
    "how do I create a successful internship program": "Define clear goals, provide mentorship, and ensure a structured onboarding process.",
    "what's a good way to handle personal challenges while working": "Communicate with your employer, seek support, and prioritize self-care.",
    "how can I improve my ability to influence others": "Build rapport, understand their needs, and communicate your ideas clearly.",
    "what's the best way to cultivate a supportive work environment": "Encourage collaboration, celebrate team successes, and prioritize mental well-being.",
    "how do I create an effective team onboarding process": "Outline roles clearly, provide training, and ensure a welcoming environment.",
    "what should I do if I'm feeling stagnant in my career": "Seek new challenges, set ambitious goals, and consider further education or mentorship.",
    "how can I improve my emotional regulation at work": "Practice mindfulness, identify triggers, and develop coping strategies.",
    "what's a good strategy for giving presentations to executives": "Focus on key points, back up claims with data, and be prepared for questions.",
    "how do I build effective working relationships with colleagues": "Communicate openly, respect their perspectives, and support their efforts.",
    "what's the best way to prepare for a job evaluation": "Review your accomplishments, gather feedback, and be ready to discuss your goals.",
    "how can I improve my conflict resolution skills": "Stay calm, listen actively, and seek to understand all perspectives.",
    "what should I do if I feel like I'm not progressing in my job": "Discuss your career path with your manager and seek opportunities for growth.",
    "how do I stay resilient in the face of challenges": "Focus on your strengths, seek support, and maintain a positive mindset.",
    "what's a good way to create an inclusive workplace culture": "Promote diversity, encourage open dialogue, and provide training on inclusivity.",
    "how can I develop a sense of purpose in my career": "Reflect on your values, align them with your work, and seek roles that resonate with your passions.",
    "what's the best way to network during a pandemic": "Use virtual events, engage on social media, and reach out for one-on-one conversations online.",
    "how do I enhance my skills for a promotion": "Identify the skills needed for the role, seek training, and demonstrate your capabilities.",
    "what's a good way to handle a lack of motivation at work": "Set small, achievable goals, seek support from colleagues, and focus on positive aspects of your job.",
    "how can I improve my public relations skills": "Stay updated on industry trends, practice writing press releases, and build relationships with the media.",
    "how do I navigate office politics effectively": "Stay professional, build alliances, and focus on your work performance.",
    "what's the best way to establish a mentorship relationship": "Find someone you admire, express your interest, and be clear about what you hope to gain.",
    "how can I create a strong first impression at work": "Be punctual, dress appropriately, and be friendly and approachable.",
    "what should I do if I want to change industries": "Research the new field, network with professionals, and consider gaining relevant skills.",
    "how can I improve my skills in a specific area": "Identify resources for learning, seek mentorship, and practice regularly.",
    "what's a good way to foster creativity in my team": "Encourage brainstorming sessions, allow for experimentation, and celebrate innovative ideas.",
    "how do I maintain a positive attitude at work": "Focus on solutions, express gratitude, and surround yourself with positive influences.",
    "what's the best way to stay organized while job searching": "Create a spreadsheet to track applications, follow-ups, and interview dates.",
    "how can I build effective partnerships in my career": "Be clear about your goals, communicate openly, and seek mutually beneficial opportunities.",
    "what's a good way to approach a challenging conversation with a colleague": "Prepare your points, focus on the issue, and approach the conversation with empathy.",
    "how can I improve my skills in leadership roles": "Seek feedback, learn from role models, and take on leadership opportunities.",
    "what's the best way to prepare for a difficult conversation with my manager": "Identify your objectives, prepare your points, and practice how you'll communicate them.",
    "how can I create an effective work-from-home routine": "Set clear boundaries, maintain a schedule, and create a designated workspace.",
    "how do I stay motivated in a monotonous job": "Find ways to challenge yourself, set personal goals, and seek new responsibilities.",
    "what's a good way to handle feedback from peers": "Listen openly, consider their perspectives, and use it as an opportunity for growth.",
    "how can I strengthen my negotiation skills": "Practice role-playing, study negotiation techniques, and learn from experienced negotiators.",
    "what's a good strategy for presenting complex information": "Use visuals to simplify, break down information into key points, and encourage questions.",
    "how can I improve my ability to work under pressure": "Practice time management, stay organized, and maintain a positive mindset.",
    "what's the best way to stay engaged during virtual meetings": "Participate actively, take notes, and follow up with questions afterward.",
    "how can I enhance my social skills at work": "Practice small talk, engage with colleagues, and seek out networking opportunities.",
    "what's a good way to communicate expectations with my team": "Set clear goals, outline responsibilities, and establish regular check-ins.",
    "how do I create a positive feedback loop with my manager": "Ask for feedback regularly, act on it, and communicate your progress.",
    "what's the best way to prepare for an unexpected career change": "Stay adaptable, network within your industry, and be open to new opportunities.",
    "how can I improve my ability to give presentations": "Practice frequently, seek feedback, and watch effective speakers for inspiration.",
    "what's a good way to maintain a positive online presence": "Share valuable content, engage respectfully, and be mindful of your messaging.",
    "how do I develop a clear career vision": "Reflect on your passions and skills, set long-term goals, and create a roadmap to achieve them.",
    "what's the best way to create a feedback-rich culture": "Encourage open communication, provide training on giving and receiving feedback, and model it yourself.",
    "how can I strengthen my critical thinking abilities": "Challenge assumptions, analyze information critically, and engage in discussions.",
    "what's a good way to handle a sudden workload increase": "Prioritize tasks, communicate with your manager, and seek assistance if needed.",
    "how do I create a successful team project plan": "Define clear objectives, outline tasks and responsibilities, and establish deadlines.",
    "what should I do if I'm struggling to find my passion": "Explore different activities, reflect on what excites you, and consider seeking guidance from a mentor.",
    "how can I improve my skills in conflict management": "Practice active listening, stay calm, and focus on finding common ground.",
    "what's the best way to present to a non-technical audience": "Use simple language, avoid jargon, and relate your points to their interests.",
    "how can I stay focused during a long workday": "Take regular breaks, set specific goals, and minimize distractions.",
    "what's a good way to address a lack of engagement in my team": "Seek feedback, encourage open communication, and introduce team-building activities.",
    "how do I improve my adaptability in a rapidly changing workplace": "Stay informed about industry trends, be open to change, and continuously seek new learning opportunities.",
    "what's the best way to manage expectations in a project": "Communicate clearly about timelines, outline potential challenges, and provide regular updates.",
    "how can I develop a strong professional identity": "Be clear about your values, communicate your expertise, and build a personal brand.",
    "what's a good strategy for leading virtual teams": "Foster open communication, establish clear goals, and promote team bonding activities.",
    "how do I build a culture of accountability in my team": "Set clear expectations, provide regular feedback, and model accountability yourself.",
    "what's the best way to prepare for a performance review": "Review your achievements, set goals for the future, and be ready to discuss your contributions.",
    "how can I improve my decision-making under uncertainty": "Gather as much information as possible, weigh the options, and trust your intuition.",
    "what's a good way to foster collaboration across departments": "Encourage interdepartmental projects, facilitate communication, and recognize joint achievements.",
    "how do I create a personal development plan": "Identify your goals, outline steps to achieve them, and set timelines for completion.",
    "what should I do if I'm feeling undervalued in my job": "Communicate your contributions to your manager, seek feedback, and explore opportunities for growth.",
    "how can I enhance my skills in customer service": "Practice empathy, actively listen to customers, and seek feedback to improve.",
    "what's the best way to build rapport with new colleagues": "Be friendly, show genuine interest, and engage in conversations.",
    "how can I manage my workload during peak periods": "Prioritize tasks, delegate when possible, and maintain clear communication with your team.",
    "how do I prepare for a job interview with a panel": "Research the panel members, anticipate questions, and practice your responses.",
    "what's a good way to demonstrate my leadership potential": "Take initiative on projects, mentor others, and seek opportunities to lead.",
    "how can I improve my time management in daily tasks": "Use to-do lists, set deadlines, and minimize distractions.",
    "what's the best way to cultivate a learning mindset in my team": "Encourage curiosity, provide resources for learning, and celebrate experimentation.",
    "how do I handle constructive criticism from a manager": "Listen attentively, ask for clarification if needed, and express gratitude for the feedback.",
    "what's a good way to develop effective communication skills": "Practice active listening, engage in public speaking, and seek feedback.",
    "how can I improve my networking skills": "Attend industry events, follow up with connections, and offer help to others.",
    "what's the best way to approach a difficult conversation with a peer": "Prepare your points, focus on the issue at hand, and listen to their perspective.",
    "how do I establish clear goals for my team": "Involve team members in the goal-setting process, ensure goals are specific, measurable, and achievable.",
    "what's a good way to support my colleagues' professional growth": "Offer mentorship, share resources, and provide constructive feedback.",
    "how can I enhance my critical listening skills": "Practice active listening, summarize what others say, and ask follow-up questions.",
    "what's the best way to manage team dynamics during conflict": "Stay neutral, facilitate open dialogue, and seek to understand all viewpoints.",
    "how do I create a culture of innovation in my team": "Encourage risk-taking, provide resources for brainstorming, and celebrate creative ideas.",
    "what's a good strategy for working with difficult personalities": "Stay calm, focus on the issue, and seek common ground for collaboration.",
    "how can I improve my ability to mentor others": "Be approachable, share experiences, and provide constructive feedback.",
    "what's the best way to establish credibility with clients": "Deliver on promises, communicate transparently, and be knowledgeable in your field.",
    "how do I stay updated on industry changes": "Follow industry news, join professional associations, and engage with thought leaders.",
    "what's a good way to build a diverse team": "Focus on inclusive hiring practices, seek diverse perspectives, and promote an inclusive culture.",
    "how can I enhance my ability to influence decision-making": "Understand the needs of stakeholders, present data-driven arguments, and build rapport.",
    "what's the best way to navigate change in the workplace": "Stay adaptable, communicate openly, and support colleagues through transitions.",
    "how do I handle a lack of resources on a project": "Prioritize tasks, seek alternative solutions, and communicate with stakeholders about limitations.",
    "what's a good way to develop a professional presence online": "Share valuable insights, engage with others respectfully, and showcase your expertise.",
    "how can I effectively evaluate employee performance": "Set clear criteria, provide regular feedback, and involve employees in self-assessment.",
    "what's the best way to create a positive team atmosphere": "Encourage collaboration, recognize achievements, and foster open communication.",
    "how do I improve my strategic planning skills": "Study successful strategic plans, engage in scenario planning, and gather diverse perspectives.",
    "what's a good way to deal with burnout": "Recognize the signs, take breaks, prioritize self-care, and seek support.",
    "how can I strengthen my organizational skills": "Use tools like calendars and to-do lists, prioritize tasks, and set reminders.",
    "what's the best way to support work-life balance in my team": "Encourage flexible schedules, promote self-care, and respect personal time.",
    "how do I navigate different communication styles within my team": "Observe and adapt to each style, encourage open dialogue, and promote understanding.",
    "what's a good way to build trust with team members": "Be transparent, keep commitments, and actively listen to their concerns.",
    "how can I improve my facilitation skills": "Practice leading discussions, seek feedback, and create an inclusive environment.",
    "what's the best way to address skill gaps in my career": "Identify necessary skills, seek training opportunities, and practice regularly.",
    "how do I create a culture of accountability in my organization": "Set clear expectations, provide regular feedback, and celebrate accountability."
       
    
    // Add more responses as needed
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
