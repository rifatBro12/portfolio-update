class MahmudulAssistant {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.conversationContext = [];
        this.messageHistory = [];
        this.userName = null;
        this.currentTopic = null;
        this.suggestedQuestions = [
            "What are Mahmudul's main skills?",
            "Tell me about his AI projects",
            "How can I hire him?",
            "What's his experience?",
            "Show me his portfolio"
        ];
        
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
        
        // Enhanced event listeners
        this.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        
        // Enhanced input handling
        this.inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Auto-suggestions on focus
        this.inputField.addEventListener('focus', () => this.showInputSuggestions());
        this.inputField.addEventListener('input', () => this.handleTyping());
        
        // Auto-focus input when chat opens
        this.chatWindow.addEventListener('transitionend', () => {
            if (this.isOpen) {
                setTimeout(() => {
                    this.inputField.focus();
                }, 100);
            }
        });
        
        // Initialize welcome message with suggestions
        this.showWelcomeMessage();
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
        const notification = document.getElementById('chat-notification');
        if (notification) {
            notification.style.display = 'none';
        }
        
        // Add entrance animation
        setTimeout(() => {
            this.inputField.focus();
            // Show quick suggestions if first time
            if (this.messageHistory.length <= 1) {
                this.showQuickSuggestions();
            }
        }, 300);
    }

    closeChat() {
        this.isOpen = false;
        this.chatWindow.classList.remove('show');
        
        // Save conversation for next time
        this.saveConversation();
    }
    
    showWelcomeMessage() {
        // Clear any existing messages except the default welcome
        const existingMessages = this.messagesContainer.querySelectorAll('.message.bot-message');
        if (existingMessages.length === 1) {
            // Enhance the existing welcome message
            const welcomeContent = existingMessages[0].querySelector('.message-content p');
            if (welcomeContent) {
                welcomeContent.innerHTML = `
                    Hi there! 👋 I'm Mahmudul's AI assistant. I know everything about him - his skills, projects, experience, and more! 
                    <br><br>
                    <strong>Popular questions:</strong>
                    <br>• What are his main skills?
                    <br>• Tell me about his AI projects
                    <br>• How can I contact/hire him?
                    <br>• What's his experience?
                    <br><br>
                    Feel free to ask me anything! 🚀
                `;
            }
        }
    }
    
    showQuickSuggestions() {
        if (this.messageHistory.length > 1) return; // Don't show if conversation has started
        
        setTimeout(() => {
            const suggestionsHTML = `
                <div class="quick-suggestions">
                    <p><small>💡 <strong>Quick questions you might ask:</strong></small></p>
                    ${this.suggestedQuestions.map(q => `<button class="suggestion-btn" onclick="chatbot.askQuestion('${q}')">${q}</button>`).join('')}
                </div>
            `;
            
            this.addMessage(suggestionsHTML, 'bot', true);
        }, 1500);
    }
    
    askQuestion(question) {
        this.inputField.value = question;
        this.sendMessage();
    }

    async sendMessage() {
        const message = this.inputField.value.trim();
        if (!message || this.isTyping) return;

        // Remove suggestions if they exist
        this.removeSuggestions();

        // Detect user name if mentioned
        this.detectUserName(message);

        // Add user message with enhanced styling
        this.addMessage(message, 'user');
        this.inputField.value = '';
        this.messageHistory.push({ type: 'user', content: message, timestamp: new Date() });

        // Show enhanced typing indicator
        this.showTyping();

        // Generate context-aware response
        const response = await this.generateResponse(message);
        
        // Hide typing indicator and show response with natural delay
        const typingDelay = Math.min(message.length * 50 + 800, 3000); // Dynamic delay based on message length
        setTimeout(() => {
            this.hideTyping();
            this.addMessage(response, 'bot');
            this.messageHistory.push({ type: 'bot', content: response, timestamp: new Date() });
            
            // Show follow-up suggestions if appropriate
            this.showFollowUpSuggestions(message, response);
        }, typingDelay);
    }
    
    detectUserName(message) {
        const namePatterns = [
            /my name is ([a-zA-Z]+)/i,
            /i'm ([a-zA-Z]+)/i,
            /i am ([a-zA-Z]+)/i,
            /call me ([a-zA-Z]+)/i
        ];
        
        for (const pattern of namePatterns) {
            const match = message.match(pattern);
            if (match) {
                this.userName = match[1];
                break;
            }
        }
    }
    
    removeSuggestions() {
        const suggestions = this.messagesContainer.querySelector('.quick-suggestions');
        if (suggestions) {
            suggestions.parentElement.remove();
        }
    }
    
    showFollowUpSuggestions(userMessage, botResponse) {
        // Dynamic follow-up suggestions based on conversation
        let followUps = [];
        
        if (userMessage.toLowerCase().includes('skills') || userMessage.toLowerCase().includes('expertise')) {
            followUps = ["Tell me about his AI projects", "What's his experience?", "How can I hire him?"];
        } else if (userMessage.toLowerCase().includes('projects') || userMessage.toLowerCase().includes('portfolio')) {
            followUps = ["What are his technical skills?", "How can I contact him?", "Tell me about his experience"];
        } else if (userMessage.toLowerCase().includes('hire') || userMessage.toLowerCase().includes('contact')) {
            followUps = ["What services does he offer?", "What are his rates?", "Show me his portfolio"];
        } else if (userMessage.toLowerCase().includes('experience') || userMessage.toLowerCase().includes('background')) {
            followUps = ["What are his main skills?", "Show me his projects", "How can I hire him?"];
        } else {
            // Default follow-ups
            followUps = ["Tell me more about his AI work", "How can I contact him?", "What services does he offer?"];
        }
        
        if (followUps.length > 0 && Math.random() > 0.3) { // 70% chance to show follow-ups
            setTimeout(() => {
                const followUpHTML = `
                    <div class="follow-up-suggestions">
                        <p><small>💭 <strong>You might also want to know:</strong></small></p>
                        ${followUps.slice(0, 3).map(q => `<button class="suggestion-btn small" onclick="chatbot.askQuestion('${q}')">${q}</button>`).join('')}
                    </div>
                `;
                this.addMessage(followUpHTML, 'bot', true);
            }, 2000);
        }
    }

    addMessage(content, type, isHTML = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        
        if (type === 'bot') {
            avatar.innerHTML = `<img src="me.jpg" alt="Mahmudul's Assistant" title="Mahmudul's AI Assistant">`;
        } else {
            avatar.innerHTML = `<div class="user-avatar"><i class="fa fa-user"></i></div>`;
        }

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (isHTML) {
            messageContent.innerHTML = content;
        } else {
            // Process message for better formatting
            const formattedContent = this.formatMessage(content);
            messageContent.innerHTML = formattedContent;
        }

        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Add message status for user messages
        if (type === 'user') {
            const messageStatus = document.createElement('div');
            messageStatus.className = 'message-status';
            messageStatus.innerHTML = '<i class="fa fa-check" title="Delivered"></i>';
        }

        // Arrange elements based on message type
        if (type === 'user') {
            messageDiv.appendChild(messageContent);
            messageDiv.appendChild(avatar);
        } else {
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(messageContent);
        }
        messageDiv.appendChild(messageTime);

        // Add entrance animation
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        this.messagesContainer.appendChild(messageDiv);
        
        // Trigger animation
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 50);

        this.scrollToBottom();

        // Add to conversation context
        this.conversationContext.push({ type, content, timestamp: new Date() });
    }
    
    formatMessage(content) {
        // Enhanced message formatting
        let formatted = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
            .replace(/`(.*?)`/g, '<code>$1</code>') // Code
            .replace(/\n/g, '<br>') // Line breaks
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>'); // Links
        
        // Add emoji enhancements
        formatted = this.enhanceWithEmojis(formatted);
        
        // Personalize with user name if available
        if (this.userName) {
            formatted = formatted.replace(/\bYou\b/g, this.userName);
        }
        
        return `<p>${formatted}</p>`;
    }
    
    enhanceWithEmojis(text) {
        const emojiMap = {
            'email': '📧',
            'phone': '📱',
            'contact': '📞',
            'github': '💻',
            'projects': '🚀',
            'skills': '💪',
            'AI': '🤖',
            'machine learning': '🧠',
            'python': '🐍',
            'javascript': '⚡',
            'web': '🌐',
            'chatbot': '💬'
        };
        
        for (const [keyword, emoji] of Object.entries(emojiMap)) {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            text = text.replace(regex, `${emoji} ${keyword}`);
        }
        
        return text;
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    showTyping() {
        this.isTyping = true;
        
        // Enhanced typing indicator
        this.typingIndicator.innerHTML = `
            <div class="typing-avatar">
                <img src="me.jpg" alt="Assistant typing">
            </div>
            <div class="typing-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="typing-text">Mahmudul's assistant is thinking...</div>
            </div>
        `;
        
        this.typingIndicator.style.display = 'flex';
        this.typingIndicator.style.opacity = '0';
        this.typingIndicator.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            this.typingIndicator.style.transition = 'all 0.3s ease';
            this.typingIndicator.style.opacity = '1';
            this.typingIndicator.style.transform = 'translateY(0)';
        }, 50);
        
        this.scrollToBottom();
    }

    hideTyping() {
        this.isTyping = false;
        
        if (this.typingIndicator) {
            this.typingIndicator.style.opacity = '0';
            this.typingIndicator.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                this.typingIndicator.style.display = 'none';
            }, 300);
        }
    }
    
    handleTyping() {
        // Show "user is typing" feedback
        const inputLength = this.inputField.value.length;
        if (inputLength > 0) {
            this.sendBtn.style.backgroundColor = '#ec1839';
            this.sendBtn.style.transform = 'scale(1.1)';
        } else {
            this.sendBtn.style.backgroundColor = '';
            this.sendBtn.style.transform = 'scale(1)';
        }
    }
    
    showInputSuggestions() {
        // Add input placeholder suggestions
        if (this.inputField.value === '') {
            const suggestions = [
                "Ask me about Mahmudul's skills...",
                "What projects has he built?",
                "How can I hire him?",
                "Tell me about his experience...",
                "What are his contact details?"
            ];
            
            let index = 0;
            const rotatePlaceholder = () => {
                this.inputField.placeholder = suggestions[index];
                index = (index + 1) % suggestions.length;
            };
            
            rotatePlaceholder();
            if (!this.placeholderInterval) {
                this.placeholderInterval = setInterval(rotatePlaceholder, 3000);
            }
        }
    }
    
    saveConversation() {
        // Save conversation to localStorage for persistence
        if (this.messageHistory.length > 0) {
            localStorage.setItem('chatbot_conversation', JSON.stringify(this.messageHistory));
            localStorage.setItem('chatbot_user_name', this.userName || '');
        }
    }
    
    loadConversation() {
        // Load previous conversation
        const saved = localStorage.getItem('chatbot_conversation');
        const savedName = localStorage.getItem('chatbot_user_name');
        
        if (saved) {
            this.messageHistory = JSON.parse(saved);
            this.userName = savedName || null;
        }
    }

    async generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Context-aware responses
        this.currentTopic = this.detectTopic(message);
        
        // Personalized greeting with name
        if (this.containsAny(message, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'])) {
            const personalizedGreetings = [
                `Hello${this.userName ? ` ${this.userName}` : ''}! 👋 I'm Mahmudul's AI assistant. I know everything about him - his skills, projects, experience, and more! What would you like to know?`,
                `Hi there${this.userName ? ` ${this.userName}` : ''}! 😊 Great to meet you! I'm here to tell you all about Mahmudul and his amazing work. How can I help you today?`,
                `Hey${this.userName ? ` ${this.userName}` : ''}! 🌟 Welcome! I'm Mahmudul's personal assistant. Ready to discover what makes him an exceptional AI/ML engineer?`,
                `Greetings${this.userName ? ` ${this.userName}` : ''}! ✨ I'm excited to share everything about Mahmudul's expertise and projects. What interests you most?`
            ];
            return this.getRandomResponse(personalizedGreetings);
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

        // Skills inquiry - Detailed breakdown of Mahmudul's expertise
        if (this.containsAny(message, ['skills', 'programming', 'technologies', 'what can he do', 'expertise', 'abilities', 'technical'])) {
            const skills = this.knowledgeBase.skills;
            return `**Mahmudul's Technical Expertise** is truly exceptional! 💪\n\n🔥 **Programming Languages** that **Mahmudul** masters:\n${skills.programming.map(lang => `• ${lang}`).join('\n')}\n\n🤖 **AI/ML Specializations** where **Mahmudul** excels:\n${skills.aiml.map(skill => `• ${skill}`).join('\n')}\n\n📊 **Mahmudul's Skill Proficiency Levels**:\n• NLP (Natural Language Processing): ${skills.percentages.NLP}\n• Machine Learning: ${skills.percentages['Machine Learning']}\n• Large Language Models (LLM): ${skills.percentages.LLM}\n• Python Programming: ${skills.percentages.Python}\n• SQL Database Management: ${skills.percentages.SQL}\n\n🎯 **Mahmudul's Core Specialties**:\n${skills.specialties.slice(0,6).map(spec => `• ${spec}`).join('\n')}\n\n💡 **What makes Mahmudul unique**: **His combination** of strong programming fundamentals with cutting-edge AI/ML expertise allows **him** to build production-ready intelligent systems that solve real-world problems!\n\nWhich of **Mahmudul's** technical skills interests you most for your project?`;
        }

        // Projects inquiry - Enhanced with specific details
        if (this.containsAny(message, ['projects', 'work', 'portfolio', 'built', 'created', 'developed', 'what did he build', 'show me his work'])) {
            const projects = this.knowledgeBase.projects;
            let response = "Mahmudul has developed some incredible AI/ML projects! 🚀 Here are **Mahmudul's key projects**:\n\n";
            
            projects.forEach((project, index) => {
                response += `**${index + 1}. ${project.name}**\n`;
                response += `📝 **What it does**: ${project.description}\n`;
                response += `⚡ **Technologies**: ${project.tech.join(', ')}\n`;
                response += `🎯 **Impact**: ${project.highlight}\n`;
                response += `💻 **GitHub**: ${project.github}\n\n`;
            });
            
            response += "**All of Mahmudul's projects** showcase his expertise in AI, Machine Learning, and practical problem-solving. ";
            response += "Each project demonstrates **his ability** to create real-world solutions. Which of **Mahmudul's projects** would you like to know more about?";
            return response;
        }

        // Experience inquiry - Detailed about Mahmudul's career
        if (this.containsAny(message, ['experience', 'years', 'background', 'career', 'professional', 'job', 'work history'])) {
            const exp = this.knowledgeBase.experience;
            let response = `**Mahmudul's Professional Journey** is impressive! 📈\n\n🎯 **Current Position**: **Mahmudul** is currently working as **${exp[0].position}** at ${exp[0].company} (${exp[0].duration})\n📝 **What he does**: ${exp[0].description}\n🛠️ **Key skills**: ${exp[0].skills.join(', ')}\n\n**Mahmudul's Previous Experience:**\n`;
            
            exp.slice(1).forEach((job, index) => {
                response += `\n${index + 2}. **${job.position}** at ${job.company} (${job.duration})`;
                if (job.type) response += ` - ${job.type}`;
                response += `\n   📋 **Responsibilities**: ${job.description}\n   ⚡ **Skills developed**: ${job.skills.join(', ')}\n`;
            });
            
            const allSkills = [...new Set(exp.flatMap(job => job.skills))];
            response += `\n🚀 **Overall Impact**: Through **his diverse experience**, **Mahmudul** has developed expertise in ${allSkills.slice(0,8).join(', ')} and more!\n\n💼 This combination makes **him** uniquely qualified for AI/ML development and full-stack web projects. Which aspect of **Mahmudul's** experience interests you most?`;
            return response;
        }

        // Education inquiry - Enhanced with specific details about Mahmudul
        if (this.containsAny(message, ['education', 'study', 'university', 'college', 'degree', 'cgpa', 'gpa', 'academic', 'qualification'])) {
            const edu = this.knowledgeBase.education;
            return `**Mahmudul's Educational Background** is truly impressive! 🎓\n\n🏫 **Current Degree**: **Mahmudul** is completing his ${edu.university.degree} from ${edu.university.institution} (${edu.university.duration})\n📊 **Academic Excellence**: **Mahmudul** maintains an outstanding CGPA of ${edu.university.cgpa} out of 4.00\n🎯 **Session**: ${edu.university.session}\n\n🏆 **HSC Achievement**: **Mahmudul** earned his ${edu.hsc.certificate} from ${edu.hsc.institution} (${edu.hsc.duration}) with a perfect GPA of ${edu.hsc.gpa}\n\n🏆 **SSC Achievement**: **Mahmudul** completed his ${edu.ssc.certificate} from ${edu.ssc.institution} in ${edu.ssc.year} with a perfect GPA of ${edu.ssc.gpa}\n\n✨ **What this means**: **Mahmudul's** consistent academic excellence (perfect GPAs in school, high CGPA in university) demonstrates his dedication, intelligence, and strong work ethic - qualities that make him an exceptional AI/ML engineer!\n\nWould you like to know how **Mahmudul's** education contributes to his professional expertise?`;
        }

        // Services inquiry - What Mahmudul can do for you
        if (this.containsAny(message, ['services', 'what services', 'what can you do', 'offerings', 'what does he offer', 'help with'])) {
            const services = this.knowledgeBase.services;
            let response = "**Mahmudul offers comprehensive professional services** that can transform your business! 💼\n\n**What Mahmudul can do for you:**\n\n";
            
            services.forEach((service, index) => {
                response += `**${index + 1}. ${service.title}**\n`;
                response += `🎯 **How Mahmudul helps**: ${service.description}\n`;
                response += `✨ **Why choose Mahmudul**: His proven expertise and real project experience\n\n`;
            });
            
            response += `🚀 **Mahmudul's Advantage**: **He** combines technical excellence with practical business understanding, ensuring your project succeeds!\n\n📞 **Ready to work with Mahmudul?** Contact him at ${this.knowledgeBase.contact.email} or call ${this.knowledgeBase.contact.phone}\n\nWhich service would you like **Mahmudul** to help you with?`;
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

        // Check if question is portfolio-related
        const isPortfolioRelated = this.isPortfolioRelated(message);
        
        if (!isPortfolioRelated) {
            return this.handleIrrelevantQuestion(message);
        }

        // Advanced context-aware default response for portfolio topics
        const contextualResponse = this.getAdvancedContextResponse(message);
        if (contextualResponse) {
            return contextualResponse;
        }

        // Portfolio-focused unknown response
        const portfolioResponse = [
            "That's an interesting question about **Mahmudul**! Let me share what I know that might be relevant...",
            "Great question! Based on **Mahmudul's** expertise and background...",
            "I'd love to help you learn more about **Mahmudul**! Here's what I can tell you...",
            "Excellent inquiry! **Mahmudul's** experience shows..."
        ];
        
        const unknownResponse = this.getRandomResponse(portfolioResponse);
        const suggestions = this.getTopicSuggestions();
        
        return `${unknownResponse}\n\n**About Mahmudul:**\n• 🤖 **AI/ML Expertise**: ${this.knowledgeBase.skills.aiml.slice(0,3).join(', ')}\n• 💼 **Current Role**: ${this.knowledgeBase.experience[0].position} at ${this.knowledgeBase.experience[0].company}\n• 🚀 **Notable Projects**: ${this.knowledgeBase.projects.slice(0,2).map(p => p.name).join(', ')}\n• � **Contact Mahmudul**: ${this.knowledgeBase.contact.email}\n\n${suggestions}\n\nWhat would you like to know about **Mahmudul's** work? 🤔`;
    }
    
    detectTopic(message) {
        const topics = {
            skills: ['skills', 'programming', 'technologies', 'expertise', 'abilities'],
            projects: ['projects', 'portfolio', 'work', 'built', 'created', 'developed'],
            experience: ['experience', 'background', 'career', 'professional', 'job', 'work history'],
            contact: ['contact', 'hire', 'reach', 'email', 'phone', 'call'],
            education: ['education', 'study', 'university', 'degree', 'college'],
            ai: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'chatbot'],
            personal: ['person', 'personality', 'about', 'who']
        };
        
        for (const [topic, keywords] of Object.entries(topics)) {
            if (this.containsAny(message, keywords)) {
                return topic;
            }
        }
        return 'general';
    }
    
    getAdvancedContextResponse(message) {
        // Advanced NLP-like understanding
        const words = message.toLowerCase().split(' ');
        
        // Question word detection
        const questionWords = ['what', 'how', 'why', 'when', 'where', 'who', 'which'];
        const hasQuestion = questionWords.some(q => words.includes(q));
        
        // Sentiment analysis (basic)
        const positiveWords = ['good', 'great', 'awesome', 'amazing', 'excellent', 'fantastic'];
        const negativeWords = ['bad', 'poor', 'terrible', 'awful', 'difficult'];
        
        const sentiment = positiveWords.some(w => words.includes(w)) ? 'positive' : 
                         negativeWords.some(w => words.includes(w)) ? 'negative' : 'neutral';
        
        // Compound query detection
        if (words.includes('and') || words.includes('also')) {
            return this.handleCompoundQuery(message);
        }
        
        // Time-based queries
        if (this.containsAny(message, ['when', 'time', 'schedule', 'available'])) {
            return `Mahmudul is currently ${this.knowledgeBase.contact.freelance.toLowerCase()} for new projects and ${this.knowledgeBase.contact.availability.toLowerCase()}! 🕐 You can reach him at ${this.knowledgeBase.contact.email} or call ${this.knowledgeBase.contact.phone}. He typically responds within 24 hours and loves discussing new opportunities!`;
        }
        
        // Comparison queries
        if (this.containsAny(message, ['vs', 'versus', 'compare', 'difference', 'better'])) {
            return `Great question! Mahmudul stands out because of his unique combination of skills: 
            
🤖 **AI/ML Expertise**: ${this.knowledgeBase.skills.percentages.NLP} NLP, ${this.knowledgeBase.skills.percentages['Machine Learning']} ML
💻 **Full-Stack Development**: Web development + AI integration
🎓 **Strong Academic Background**: ${this.knowledgeBase.education.university.cgpa} CGPA
🏢 **Real Experience**: Currently ${this.knowledgeBase.experience[0].position} at ${this.knowledgeBase.experience[0].company}

What specific comparison are you looking for?`;
        }
        
        return null;
    }
    
    handleCompoundQuery(message) {
        const topics = [];
        if (this.containsAny(message, ['skills', 'expertise'])) topics.push('skills');
        if (this.containsAny(message, ['projects', 'portfolio'])) topics.push('projects');
        if (this.containsAny(message, ['experience', 'background'])) topics.push('experience');
        if (this.containsAny(message, ['contact', 'hire'])) topics.push('contact');
        
        if (topics.length >= 2) {
            let response = "Great! You want to know about multiple aspects. Here's a comprehensive overview:\n\n";
            
            if (topics.includes('skills')) {
                response += `🛠️ **Skills**: ${this.knowledgeBase.skills.programming.slice(0,3).join(', ')} + ${this.knowledgeBase.skills.aiml.slice(0,2).join(', ')}\n\n`;
            }
            if (topics.includes('projects')) {
                response += `🚀 **Projects**: ${this.knowledgeBase.projects.slice(0,2).map(p => p.name).join(', ')}\n\n`;
            }
            if (topics.includes('experience')) {
                response += `💼 **Experience**: ${this.knowledgeBase.experience[0].position} at ${this.knowledgeBase.experience[0].company}\n\n`;
            }
            if (topics.includes('contact')) {
                response += `📞 **Contact**: ${this.knowledgeBase.contact.email} | ${this.knowledgeBase.contact.phone}\n\n`;
            }
            
            response += "Would you like me to elaborate on any specific area?";
            return response;
        }
        
        return null;
    }
    
    isPortfolioRelated(message) {
        const portfolioKeywords = [
            // About Mahmudul
            'mahmudul', 'rifat', 'hasan', 'about him', 'about you',
            
            // Professional terms
            'skills', 'experience', 'projects', 'work', 'portfolio', 'career', 'professional',
            'developer', 'engineer', 'programmer', 'ai', 'ml', 'machine learning', 'artificial intelligence',
            
            // Education & Background
            'education', 'university', 'degree', 'study', 'background', 'qualification',
            
            // Contact & Hiring
            'contact', 'hire', 'email', 'phone', 'reach', 'availability', 'freelance',
            
            // Technical
            'python', 'javascript', 'programming', 'coding', 'development', 'web', 'database',
            'chatbot', 'nlp', 'deep learning', 'data', 'analysis',
            
            // Services
            'services', 'help', 'build', 'create', 'develop', 'design', 'solution'
        ];
        
        const message_lower = message.toLowerCase();
        return portfolioKeywords.some(keyword => message_lower.includes(keyword));
    }
    
    handleIrrelevantQuestion(message) {
        const redirectResponses = [
            "I appreciate your question, but I'm specifically designed to help you learn about **Mahmudul Hasan** and his professional work! 🎯",
            "That's an interesting topic, but I'm **Mahmudul's portfolio assistant** - I focus on sharing information about his skills, projects, and experience! 💼",
            "I'd love to help, but my expertise is all about **Mahmudul** - his AI/ML projects, technical skills, and professional background! 🤖",
            "Great question! However, I'm specialized in discussing **Mahmudul's** portfolio, work experience, and technical capabilities! 🚀"
        ];
        
        const redirect = this.getRandomResponse(redirectResponses);
        
        const portfolioSuggestions = [
            "What are **Mahmudul's** main AI/ML skills?",
            "Tell me about **Mahmudul's** latest projects",
            "How can I contact or hire **Mahmudul**?",
            "What's **Mahmudul's** professional experience?",
            "What services does **Mahmudul** offer?",
            "Show me **Mahmudul's** educational background"
        ];
        
        const randomSuggestions = portfolioSuggestions
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
        
        return `${redirect}\n\n**Let's talk about Mahmudul! Here are some great questions you could ask:**\n${randomSuggestions.map(q => `• ${q}`).join('\n')}\n\n💡 I'm here to help you discover why **Mahmudul** would be perfect for your AI/ML or web development needs! What would you like to know about **his work**?`;
    }
    
    getTopicSuggestions() {
        const recentTopics = this.messageHistory.slice(-3).map(m => this.detectTopic(m.content));
        const unusedTopics = [
            { topic: 'skills', label: "Mahmudul's technical skills" },
            { topic: 'projects', label: "Mahmudul's AI/ML projects" },
            { topic: 'experience', label: "Mahmudul's work experience" },
            { topic: 'contact', label: "How to hire Mahmudul" },
            { topic: 'education', label: "Mahmudul's educational background" },
            { topic: 'services', label: "Services Mahmudul offers" }
        ].filter(t => !recentTopics.includes(t.topic));
        
        if (unusedTopics.length > 0) {
            return `\n💡 **You might also want to ask about**: ${unusedTopics.slice(0,2).map(t => t.label).join(', ')}`;
        }
        return '\n💡 **Feel free to ask anything about Mahmudul\'s professional work!**';
    }

    containsAny(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Global chatbot instance
let chatbot = null;

// Initialize the enhanced chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    try {
        chatbot = new MahmudulAssistant();
        
        // Load previous conversation if exists
        chatbot.loadConversation();
        
        console.log('✅ Enhanced Mahmudul Assistant chatbot initialized successfully!');
        
        // Add performance monitoring
        chatbot.startTime = Date.now();
        
        // Add smart notifications
        setTimeout(() => {
            if (!chatbot.isOpen && chatbot.messageHistory.length === 0) {
                chatbot.showSmartNotification();
            }
        }, 15000); // Show after 15 seconds if no interaction
        
    } catch (error) {
        console.error('❌ Chatbot initialization failed:', error);
    }
});

// Enhanced periodic notifications with intelligence
document.addEventListener('DOMContentLoaded', () => {
    let notificationCount = 0;
    const maxNotifications = 3; // Limit notifications to avoid annoyance
    
    const showPeriodicNotification = () => {
        const notification = document.getElementById('chat-notification');
        
        if (notification && !document.querySelector('.chatbot-window.show') && 
            notificationCount < maxNotifications && chatbot && chatbot.messageHistory.length === 0) {
            
            // Smart notification messages
            const messages = [
                '💬 Questions about Mahmudul?',
                '🤖 AI Assistant ready to help!',
                '🚀 Ask me about his projects!'
            ];
            
            notification.textContent = messages[notificationCount];
            notification.style.display = 'flex';
            notification.style.animation = 'pulse 2s infinite';
            
            setTimeout(() => {
                notification.style.display = 'none';
                notification.style.animation = '';
            }, 4000);
            
            notificationCount++;
        }
    };
    
    // Show first notification after 30 seconds, then every 45 seconds
    setTimeout(showPeriodicNotification, 30000);
    setInterval(showPeriodicNotification, 45000);
});

// Add enhanced chatbot methods
if (typeof MahmudulAssistant !== 'undefined') {
    MahmudulAssistant.prototype.showSmartNotification = function() {
        const notification = document.getElementById('chat-notification');
        if (notification && !this.isOpen) {
            const smartMessages = [
                "👋 Hi! I'm Mahmudul's AI assistant",
                "💡 Got questions about Mahmudul?",
                "🚀 Ready to help with any queries!"
            ];
            
            notification.textContent = smartMessages[Math.floor(Math.random() * smartMessages.length)];
            notification.style.display = 'flex';
            notification.classList.add('pulse-animation');
            
            setTimeout(() => {
                notification.style.display = 'none';
                notification.classList.remove('pulse-animation');
            }, 5000);
        }
    };
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '/' && chatbot) {
            e.preventDefault();
            chatbot.toggleChat();
        }
        
        if (e.key === 'Escape' && chatbot && chatbot.isOpen) {
            chatbot.closeChat();
        }
    });
}