class MahmudulAssistant {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.conversationContext = [];
        
        // Initialize chatbot
        this.init();
        
        // Personal information and knowledge base
        this.knowledgeBase = {
            personal: {
                name: "MD Mahmudul Hasan",
                nickname: "Mahmudul",
                fullName: "Md Mahmudul Hasan",
                title: "AI / ML Engineer",
                currentPosition: "Junior AI Engineer",
                location: "Dhaka, Bangladesh",
                email: "rifathasan5u@gmail.com",
                phone: "+8801975395845",
                birthday: "27 Feb 2001",
                age: "24",
                degree: "CSE (Computer Science & Engineering)",
                freelanceStatus: "Available",
                github: "https://github.com/rifatBro12",
                personality: "passionate, creative, problem-solver, friendly, professional, responsive, innovative",
                languages: ["Bengali", "English"],
                hobbies: ["coding", "learning new technologies", "AI research", "machine learning", "data analysis", "problem solving"]
            },
            
            education: {
                university: {
                    degree: "BSc in Computer Science & Engineering",
                    institution: "Dhaka International University",
                    duration: "2021 - 2025",
                    cgpa: "3.82 out of 4.00",
                    session: "2021-2022",
                    status: "Current/Recent Graduate"
                },
                hsc: {
                    certificate: "Higher Secondary Certificate",
                    institution: "Govt. Kadam Rasul College, Dhaka",
                    duration: "2018 - 2020",
                    gpa: "5.00",
                    session: "2018-2020"
                },
                ssc: {
                    certificate: "Secondary School Certificate",
                    institution: "B.M. Union High School, Dhaka",
                    year: "2018",
                    gpa: "5.00"
                }
            },
            
            skills: {
                programming: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
                aiml: ["Machine Learning", "NLP", "LLM", "Agentic AI", "RAG", "Deep Learning"],
                technologies: ["Machine Learning", "AI", "Natural Language Processing", "Large Language Models", "Web Development", "Data Analysis", "Data Visualization"],
                tools: ["Git", "VS Code", "Django Framework", "Various ML Libraries"],
                databases: ["MySQL", "PostgreSQL", "MongoDB"],
                specialties: ["AI Chatbots", "Voice Recognition", "Sentiment Analysis", "Object Detection", "Image Classification", "Medical AI", "Production ML Deployment"],
                webSkills: ["Responsive Design", "UI/UX Design", "Color Theory", "Visual Design", "Frontend Development", "Backend Development"],
                percentages: {
                    "Machine Learning": "86%",
                    "LLM": "85%",
                    "NLP": "96%",
                    "Python": "85%",
                    "SQL": "80%"
                }
            },
            
            experience: [
                {
                    position: "Junior AI Engineer",
                    company: "orDevs Software Company",
                    duration: "2025 - present",
                    status: "Current",
                    description: "Develop and deploy Machine learning and AI models in production environments, optimizing performance and scalability for real-world applications.",
                    skills: ["Machine Learning", "AI Models", "Production Deployment", "Performance Optimization"]
                },
                {
                    position: "Junior Web Developer",
                    company: "Aachol Foundation",
                    duration: "2023 - 2025",
                    status: "2 Years",
                    type: "Non-Profit",
                    description: "Collaborate with cross-functional teams to design and implement user-friendly web applications, ensuring responsiveness and performance.",
                    skills: ["Web Development", "Responsive Design", "Team Collaboration", "UI/UX"]
                },
                {
                    position: "Graphics & Web Designer",
                    company: "Aachol Foundation",
                    duration: "2021 - 2024",
                    status: "3 Years",
                    type: "Non-Profit",
                    description: "Create visually engaging and user-friendly website layouts with a focus on UI/UX, color theory, and responsive design.",
                    skills: ["Graphic Design", "UI/UX Design", "Color Theory", "Visual Design"]
                }
            ],
            
            services: [
                {
                    title: "ML Engineer",
                    description: "Develop and deploy machine learning models in production environments, optimizing performance and scalability for real-world applications."
                },
                {
                    title: "AI Engineer", 
                    description: "Design and implement AI models and systems that leverage machine learning and deep learning techniques to solve complex problems."
                },
                {
                    title: "Data Analyst",
                    description: "Transform raw data into clear insights through visualization, reporting, and statistical analysis to guide business strategies."
                },
                {
                    title: "Data Scientist",
                    description: "Uncover insights and build predictive models using machine learning and statistical techniques to support data-driven decisions."
                },
                {
                    title: "Web Design",
                    description: "Craft visually engaging and user-friendly website layouts with a focus on UI/UX, color theory, and responsive design."
                },
                {
                    title: "Web Developer",
                    description: "Build and maintain functional, responsive websites using HTML, CSS, JavaScript, and modern frameworks to deliver seamless user experiences."
                }
            ],
            
            projects: [
                {
                    name: "Medical ChatBot",
                    description: "An AI-powered medical assistant chatbot that provides health guidance and medical information to users",
                    tech: ["Python", "Machine Learning", "NLP", "AI"],
                    github: "https://github.com/rifatBro12/Medical-ChatBot",
                    highlight: "Helps users get preliminary medical insights and health guidance through conversational AI"
                },
                {
                    name: "Voice Medicine Selector",
                    description: "An intelligent voice-powered medicine selection system using natural language processing",
                    tech: ["Python", "Voice Recognition", "NLP", "AI"],
                    github: "https://github.com/rifatBro12/Voice-Based-Medicine-Selector",
                    highlight: "Revolutionizes medicine selection through voice commands and AI understanding"
                },
                {
                    name: "Movie Sentiment Analyzer System", 
                    description: "Advanced sentiment analysis system for movie reviews and text emotion detection",
                    tech: ["Python", "Machine Learning", "NLP", "Sentiment Analysis"],
                    github: "https://github.com/rifatBro12/Movie_Sentiment_Analyzer_System",
                    highlight: "Analyzes text sentiment with high accuracy for entertainment and business insights"
                },
                {
                    name: "Object Detection System",
                    description: "Computer vision system for real-time object detection and recognition",
                    tech: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
                    github: "https://github.com/rifatBro12/Object-Detection",
                    highlight: "Real-time object detection using advanced computer vision techniques"
                },
                {
                    name: "Cat-Dog Classification",
                    description: "Image classification system using deep learning to classify cats and dogs",
                    tech: ["Python", "Deep Learning", "Image Processing", "CNN"],
                    github: "https://github.com/rifatBro12/Cat-Dog-classification",
                    highlight: "High-accuracy image classification using convolutional neural networks"
                },
                {
                    name: "Face Mask Detector",
                    description: "Computer vision system to detect whether people are wearing face masks",
                    tech: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
                    github: "https://github.com/rifatBro12/Face-Mask-Detector",
                    highlight: "Real-time face mask detection for safety compliance monitoring"
                }
            ],
            
            contact: {
                phone: "+8801975395845",
                email: "rifathasan5u@gmail.com",
                office: "Dhaka",
                github: "https://github.com/rifatBro12",
                availability: "Very responsive to messages",
                freelance: "Available"
            }
        };
        
        // Response patterns for natural conversation
        this.responsePatterns = {
            greetings: [
                "Hello! 👋 I'm Mahmudul's AI assistant. What would you like to know about him?",
                "Hi there! 😊 Great to meet you! I'm here to tell you all about Mahmudul and his work.",
                "Hey! 🌟 Welcome! I'm Mahmudul's personal assistant. How can I help you today?",
                "Greetings! ✨ I'm here to share everything about Mahmudul's skills and projects!"
            ],
            
            unknownResponse: [
                "That's an interesting question! Let me tell you what I know about Mahmudul that might be relevant...",
                "Hmm, let me think about that in the context of Mahmudul's expertise...",
                "Great question! Based on what I know about Mahmudul's experience...",
                "I'd love to help! Here's what Mahmudul would probably say about that..."
            ]
        };
    }

    init() {
        // Get DOM elements
        this.toggleBtn = document.getElementById('chatbot-toggle');
        this.closeBtn = document.getElementById('chatbot-close');
        this.chatWindow = document.getElementById('chatbot-window');
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.inputField = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
        this.typingIndicator = document.getElementById('typing-indicator');
        
        // Event listeners
        this.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Auto-focus input when chat opens
        this.chatWindow.addEventListener('transitionend', () => {
            if (this.isOpen) {
                this.inputField.focus();
            }
        });
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.chatWindow.classList.add('show');
        document.getElementById('chat-notification').style.display = 'none';
        setTimeout(() => {
            this.inputField.focus();
        }, 300);
    }

    closeChat() {
        this.isOpen = false;
        this.chatWindow.classList.remove('show');
    }

    async sendMessage() {
        const message = this.inputField.value.trim();
        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage(message, 'user');
        this.inputField.value = '';

        // Show typing indicator
        this.showTyping();

        // Generate response
        const response = await this.generateResponse(message);
        
        // Hide typing indicator and show response
        setTimeout(() => {
            this.hideTyping();
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1500); // Random delay for more natural feel
    }

    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = `<img src="me.jpg" alt="${type === 'bot' ? 'Assistant' : 'User'}">`;

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p>${content}</p>`;

        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (type === 'user') {
            messageDiv.appendChild(messageContent);
            messageDiv.appendChild(avatar);
        } else {
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(messageContent);
        }
        messageDiv.appendChild(messageTime);

        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

        // Add to conversation context
        this.conversationContext.push({ type, content, timestamp: new Date() });
    }

    showTyping() {
        this.isTyping = true;
        this.typingIndicator.style.display = 'flex';
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    hideTyping() {
        this.isTyping = false;
        this.typingIndicator.style.display = 'none';
    }

    async generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Greeting patterns
        if (this.containsAny(message, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'])) {
            return this.getRandomResponse(this.responsePatterns.greetings);
        }

        // Goodbye patterns
        if (this.containsAny(message, ['bye', 'goodbye', 'see you', 'farewell', 'take care', 'see ya', 'later', 'gotta go'])) {
            const goodbyeResponses = [
                "Thank you for visiting me! 👋 It was wonderful chatting with you. Don't hesitate to reach out to Mahmudul if you need anything!",
                "Thank you for visiting me! 🌟 I hope I was helpful in telling you about Mahmudul. Have a fantastic day!",
                "Thank you for visiting me! 😊 Feel free to come back anytime if you have more questions about Mahmudul or his work!",
                "Thank you for visiting me! ✨ It's been a pleasure talking with you. Wishing you all the best!"
            ];
            return this.getRandomResponse(goodbyeResponses);
        }

        // How are you patterns
        if (this.containsAny(message, ['how are you', 'how do you do', 'how are things', 'how is everything', "what's up", 'whats up'])) {
            const howAreYouResponses = [
                "I'm doing fantastic, thank you for asking! 😊 I'm always excited to talk about Mahmudul and his amazing work. How can I help you today?",
                "I'm wonderful! 🌟 I love sharing information about Mahmudul's projects and skills. It never gets old! What would you like to know?",
                "I'm great, thanks! 🤖 I'm having a fantastic time being Mahmudul's assistant and helping people learn about his expertise. How are you doing?",
                "I'm doing excellent! ✨ Every day is exciting when you get to represent someone as talented as Mahmudul. What brings you here today?"
            ];
            return this.getRandomResponse(howAreYouResponses);
        }

        // How to contact/hire specifically  
        if (this.containsAny(message, ['how to hire', 'how to contact', 'how can i hire', 'how can i contact', 'how do i hire', 'how do i contact', 'how to reach'])) {
            const contact = this.knowledgeBase.contact;
            return `Here's exactly how to hire or contact Mahmudul! 🎯\n\n📞 **Phone**: ${contact.phone} (Direct call/WhatsApp)\n📧 **Email**: ${contact.email} (Professional inquiries)\n💻 **GitHub**: ${contact.github} (Check his work)\n\n**Best approach**: \n1. Call or email him directly with your project details\n2. He responds within 24 hours\n3. Free consultation to discuss your needs\n4. Competitive rates and quality delivery guaranteed!\n\nHe's actively looking for exciting projects! 🚀`;
        }

        // Personal information
        if (this.containsAny(message, ['who are you', 'tell me about', 'about mahmudul', 'who is mahmudul'])) {
            return `I'm ${this.knowledgeBase.personal.fullName}'s AI assistant! 🤖 Mahmudul is a ${this.knowledgeBase.personal.title} from ${this.knowledgeBase.personal.location}. He's ${this.knowledgeBase.personal.age} years old, born on ${this.knowledgeBase.personal.birthday}. He's incredibly ${this.knowledgeBase.personal.personality.split(', ').join(', ')} and loves ${this.knowledgeBase.personal.hobbies.slice(0,3).join(', ')}. Currently working as a ${this.knowledgeBase.experience[0].position} at ${this.knowledgeBase.experience[0].company}. What specific aspect would you like to know more about?`;
        }

        // Skills inquiry
        if (this.containsAny(message, ['skills', 'programming', 'technologies', 'what can he do', 'expertise'])) {
            const skills = this.knowledgeBase.skills;
            return `Mahmudul is incredibly skilled! 💪 His programming languages include ${skills.programming.join(', ')}. He's especially strong in AI/ML with ${skills.aiml.join(', ')}. His skill levels: NLP (${skills.percentages.NLP}), Machine Learning (${skills.percentages['Machine Learning']}), LLM (${skills.percentages.LLM}), Python (${skills.percentages.Python}), and SQL (${skills.percentages.SQL}). He also specializes in ${skills.specialties.slice(0,4).join(', ')}. Is there a specific technology you'd like to know more about?`;
        }

        // Projects inquiry
        if (this.containsAny(message, ['projects', 'work', 'portfolio', 'built', 'created', 'developed'])) {
            const projects = this.knowledgeBase.projects;
            let response = "Mahmudul has created some amazing projects! 🚀 Here are his latest works:\n\n";
            projects.forEach((project, index) => {
                response += `${index + 1}. **${project.name}**: ${project.description} Built with ${project.tech.join(', ')}. ${project.highlight} (GitHub: ${project.github})\n\n`;
            });
            response += "All projects are available on his GitHub profile! Which project interests you the most?";
            return response;
        }

        // Experience inquiry
        if (this.containsAny(message, ['experience', 'years', 'background', 'career', 'professional', 'job'])) {
            const exp = this.knowledgeBase.experience;
            let response = `Mahmudul has excellent professional experience! 📈 Currently working as ${exp[0].position} at ${exp[0].company} where he ${exp[0].description.toLowerCase()}\n\nPrevious roles:\n`;
            exp.slice(1).forEach((job, index) => {
                response += `• ${job.position} at ${job.company} (${job.duration}) - ${job.type ? job.type + ' - ' : ''}${job.description}\n`;
            });
            response += `\nHe's gained expertise in ${exp[0].skills.concat(exp[1].skills).slice(0,6).join(', ')}. Want to know about any specific role?`;
            return response;
        }

        // Education inquiry
        if (this.containsAny(message, ['education', 'study', 'university', 'college', 'degree', 'cgpa', 'gpa'])) {
            const edu = this.knowledgeBase.education;
            return `Mahmudul has an excellent educational background! 🎓\n\n🏫 **Current/Recent**: ${edu.university.degree} from ${edu.university.institution} (${edu.university.duration}) with CGPA ${edu.university.cgpa}\n\n🏆 **HSC**: ${edu.hsc.certificate} from ${edu.hsc.institution} with perfect GPA ${edu.hsc.gpa}\n\n🏆 **SSC**: ${edu.ssc.certificate} from ${edu.ssc.institution} with perfect GPA ${edu.ssc.gpa}\n\nHe's maintained excellent academic performance throughout his education!`;
        }

        // Services inquiry
        if (this.containsAny(message, ['services', 'what services', 'what can you do', 'offerings'])) {
            const services = this.knowledgeBase.services;
            let response = "Mahmudul offers comprehensive professional services! 💼\n\n";
            services.forEach((service, index) => {
                response += `${index + 1}. **${service.title}**: ${service.description}\n\n`;
            });
            response += "He can handle everything from AI development to web design! Which service interests you?";
            return response;
        }

        // Contact information
        if (this.containsAny(message, ['contact', 'email', 'reach', 'phone', 'call'])) {
            const contact = this.knowledgeBase.contact;
            return `You can reach Mahmudul easily! 📧\n\n📞 **Phone**: ${contact.phone}\n📧 **Email**: ${contact.email}\n🏢 **Office**: ${contact.office}\n💻 **GitHub**: ${contact.github}\n\nHe's ${contact.availability.toLowerCase()} and currently ${contact.freelance.toLowerCase()} for new projects! You can also use the contact form on this website. He typically responds within 24 hours and loves connecting with fellow developers and potential clients!`;
        }

        // Hiring specific inquiries
        if (this.containsAny(message, ['hire', 'hiring', 'work together', 'work with', 'collaborate', 'employ', 'recruit'])) {
            const contact = this.knowledgeBase.contact;
            return `Great! You can hire Mahmudul for your project! 💼\n\n📞 **Call him directly**: ${contact.phone}\n📧 **Email him**: ${contact.email}\n\nHe's currently ${contact.freelance.toLowerCase()} for new opportunities and ${contact.availability.toLowerCase()}. Whether you need AI/ML development, web development, or data analysis, he's ready to help!\n\n💡 **Quick tip**: Mention your project details when you contact him - he loves discussing technical challenges and will provide personalized solutions!`;
        }

        // AI/Machine Learning specific
        if (this.containsAny(message, ['ai', 'artificial intelligence', 'machine learning', 'ml', 'chatbot', 'voice recognition'])) {
            return `Mahmudul is passionate about AI! 🧠 He's built AI chatbots, voice recognition systems, and sentiment analysis tools. His Medical Chatbot helps users get health guidance, and his Voice Medicine Selector revolutionizes customer interactions. He combines his development skills with AI expertise to create intelligent solutions that solve real problems!`;
        }

        // Web development
        if (this.containsAny(message, ['web development', 'frontend', 'backend', 'django', 'react', 'javascript'])) {
            return `Mahmudul is a full-stack web development expert! 🌐 He's proficient in frontend technologies like JavaScript, HTML, CSS, and backend development with Django and Python. He creates beautiful, responsive websites like this portfolio, and integrates them with powerful systems. Need a website or web application? He's your guy!`;
        }

        // Personal touch questions
        if (this.containsAny(message, ['personality', 'person', 'like to work with', 'character'])) {
            return `Mahmudul is genuinely amazing to work with! 😊 He's ${this.knowledgeBase.personal.personality}. He's ${this.knowledgeBase.personal.age} years old, born on ${this.knowledgeBase.personal.birthday}, and approaches every project with enthusiasm and creativity. He speaks ${this.knowledgeBase.personal.languages.join(' and ')}, and he's always eager to learn new things. He believes in writing clean code and creating solutions that make a real difference!`;
        }

        // Availability/hiring
        if (this.containsAny(message, ['available', 'freelance', 'hiring', 'job', 'opportunity', 'hire mahmudul', 'want to hire'])) {
            const contact = this.knowledgeBase.contact;
            return `Mahmudul is always open to exciting opportunities! 🌟 He's currently working as ${this.knowledgeBase.experience[0].position} at ${this.knowledgeBase.experience[0].company} and is also ${this.knowledgeBase.contact.freelance.toLowerCase()} for freelance work! \n\n📞 **Call**: ${contact.phone}\n📧 **Email**: ${contact.email}\n\nWhether you need help with AI/ML development, web development, or building something completely new, he's ready to bring your ideas to life. He takes on both short-term projects and long-term collaborations. Contact him directly to discuss your project!`;
        }

        // GitHub/Portfolio specific
        if (this.containsAny(message, ['github', 'repository', 'code', 'source code'])) {
            return `Check out Mahmudul's GitHub profile! 💻 ${this.knowledgeBase.contact.github}\n\nHe has amazing projects there including:\n• Medical ChatBot\n• Voice Medicine Selector\n• Movie Sentiment Analyzer\n• Object Detection System\n• Cat-Dog Classification\n• Face Mask Detector\n\nAll projects showcase his expertise in AI, ML, computer vision, and NLP. His code is clean, well-documented, and demonstrates real-world problem-solving skills!`;
        }

        // Age/Birthday specific
        if (this.containsAny(message, ['age', 'old', 'birthday', 'born'])) {
            return `Mahmudul is ${this.knowledgeBase.personal.age} years old! 🎂 He was born on ${this.knowledgeBase.personal.birthday}. Despite being young, he has already achieved so much - currently working as ${this.knowledgeBase.experience[0].position}, has ${this.knowledgeBase.projects.length} major projects, and maintains an excellent CGPA of ${this.knowledgeBase.education.university.cgpa} in his ${this.knowledgeBase.education.university.degree}!`;
        }

        // Location specific
        if (this.containsAny(message, ['location', 'where', 'city', 'dhaka', 'bangladesh'])) {
            return `Mahmudul is based in ${this.knowledgeBase.personal.location}! 🏙️ He completed his education there - HSC from ${this.knowledgeBase.education.hsc.institution} and SSC from ${this.knowledgeBase.education.ssc.institution}. Currently pursuing/completed his ${this.knowledgeBase.education.university.degree} from ${this.knowledgeBase.education.university.institution}. He's proud of his roots and loves working on projects that can make a difference locally and globally!`;
        }

        // Pricing/rates (professional but friendly)
        if (this.containsAny(message, ['price', 'cost', 'rate', 'budget', 'charges'])) {
            return `Great question! 💰 Mahmudul believes in fair, competitive pricing based on project scope and complexity. He offers both hourly rates and project-based pricing. For AI/ML projects, web development, or custom solutions, he'd be happy to discuss your specific needs and provide a detailed quote. Contact him at ${this.knowledgeBase.contact.email} or call ${this.knowledgeBase.contact.phone} for a personalized estimate!`;
        }

        // Thanks/positive feedback
        if (this.containsAny(message, ['thank', 'thanks', 'great', 'awesome', 'amazing', 'good'])) {
            return `You're so welcome! 😊 I'm glad I could help! Mahmudul would be thrilled to hear your positive feedback. If you have any more questions about his work, skills, or if you'd like to start a project together, don't hesitate to reach out. He's always excited to connect with new people and work on interesting challenges!`;
        }

        // Default response with context
        const contextualResponse = this.getRandomResponse(this.responsePatterns.unknownResponse);
        return `${contextualResponse} Mahmudul specializes in ${this.knowledgeBase.skills.technologies.slice(0,3).join(', ')}, has ${this.knowledgeBase.experience.length} years of professional experience, and has created projects like ${this.knowledgeBase.projects[0].name} and ${this.knowledgeBase.projects[1].name}. What specific aspect interests you most? 🤔`;
    }

    containsAny(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MahmudulAssistant();
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    // Show notification periodically
    setInterval(() => {
        const notification = document.getElementById('chat-notification');
        if (notification && !document.querySelector('.chatbot-window.show')) {
            notification.style.display = 'flex';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
    }, 30000); // Show every 30 seconds if chat is closed
});