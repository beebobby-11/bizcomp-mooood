// ===================================
// QUIZ DATA & PERSONALITY PROFILES
// ===================================

const quizQuestions = [
    {
        question: "How do you approach complex challenges?",
        answers: [
            { text: "Systematic analysis with data-driven insights", persona: "strategist", points: 3 },
            { text: "Creative brainstorming with innovative solutions", persona: "innovator", points: 2 },
            { text: "Collaborative team discussions", persona: "connector", points: 1 },
            { text: "Quick decisive action with bold moves", persona: "executor", points: 0 }
        ]
    },
    {
        question: "What defines your ideal work environment?",
        answers: [
            { text: "Structured frameworks with clear objectives", persona: "strategist", points: 3 },
            { text: "Dynamic spaces encouraging experimentation", persona: "innovator", points: 2 },
            { text: "Collaborative hubs with strong networks", persona: "connector", points: 1 },
            { text: "High-pressure settings demanding results", persona: "executor", points: 0 }
        ]
    },
    {
        question: "How do you fuel your performance?",
        answers: [
            { text: "Sustained energy for deep analytical work", persona: "strategist", points: 3 },
            { text: "Bursts of creative mental clarity", persona: "innovator", points: 2 },
            { text: "Consistent energy for long meetings", persona: "connector", points: 1 },
            { text: "Quick power boosts for rapid execution", persona: "executor", points: 0 }
        ]
    },
    {
        question: "What's your decision-making style?",
        answers: [
            { text: "Methodical evaluation of all variables", persona: "strategist", points: 3 },
            { text: "Intuitive leaps based on patterns", persona: "innovator", points: 2 },
            { text: "Consensus-building through dialogue", persona: "connector", points: 1 },
            { text: "Swift judgment based on experience", persona: "executor", points: 0 }
        ]
    },
    {
        question: "How do you define professional success?",
        answers: [
            { text: "Achieving long-term strategic objectives", persona: "strategist", points: 3 },
            { text: "Creating innovative breakthrough solutions", persona: "innovator", points: 2 },
            { text: "Building influential networks and relationships", persona: "connector", points: 1 },
            { text: "Delivering measurable results consistently", persona: "executor", points: 0 }
        ]
    }
];

const personalities = {
    strategist: {
        title: "THE STRATEGIST",
        description: "You excel at long-term planning and analytical thinking. Your systematic approach to problem-solving requires sustained mental energy and strategic focus. You thrive on data-driven insights and methodical execution.",
        product: "Bicep Berry Protein Ball",
        productDesc: "15g plant-based protein. Designed to fuel strategic thinking and sustained cognitive performance throughout your analytical sessions."
    },
    innovator: {
        title: "THE INNOVATOR",
        description: "You break boundaries with creative thinking and pattern recognition. Your visionary mindset demands mental clarity for innovative breakthroughs. You transform industries through bold, original ideas.",
        product: "Mango Tango Energy Boost",
        productDesc: "Natural caffeine blend with adaptogens. Engineered for creative bursts and maintaining peak mental clarity during ideation."
    },
    connector: {
        title: "THE CONNECTOR",
        description: "You build bridges and cultivate influential networks. Your relationship-focused approach requires sustained social energy and emotional intelligence. You create value through meaningful professional connections.",
        product: "Coconut Calm Protein Pack",
        productDesc: "Balanced macros with mood-supporting B vitamins. Crafted for consistent energy during extended networking sessions."
    },
    executor: {
        title: "THE EXECUTOR",
        description: "You deliver results with decisive action and rapid execution. Your high-performance drive demands quick energy and unwavering focus. You turn strategies into tangible outcomes efficiently.",
        product: "Protein Punch Power Pack",
        productDesc: "High-protein, quick-release energy formula. Optimized for peak performance and rapid execution under pressure."
    }
};

// ===================================
// STATE MANAGEMENT
// ===================================

let currentStep = 1;
let currentQuestion = 0;
let quizAnswers = [];
let personalityScores = {
    strategist: 0,
    innovator: 0,
    connector: 0,
    executor: 0
};

// ===================================
// NAVIGATION FUNCTIONS
// ===================================

function nextStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    currentStepElement.classList.remove('active');
    
    currentStep++;
    
    if (currentStep <= 5) {
        const nextStepElement = document.getElementById(`step${currentStep}`);
        nextStepElement.classList.add('active');
        
        // Initialize quiz if moving to step 3
        if (currentStep === 3) {
            initializeQuiz();
        }
    }
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function previousStep() {
    if (currentStep > 1) {
        const currentStepElement = document.getElementById(`step${currentStep}`);
        currentStepElement.classList.remove('active');
        
        currentStep--;
        
        const previousStepElement = document.getElementById(`step${currentStep}`);
        previousStepElement.classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===================================
// QUIZ FUNCTIONALITY
// ===================================

function initializeQuiz() {
    currentQuestion = 0;
    quizAnswers = [];
    personalityScores = {
        strategist: 0,
        innovator: 0,
        connector: 0,
        executor: 0
    };
    displayQuestion();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    const questionElement = document.getElementById('quizQuestion');
    const answersElement = document.getElementById('quizAnswers');
    const currentQElement = document.getElementById('currentQ');
    const progressFill = document.getElementById('progressFill');
    
    // Update question number and progress
    currentQElement.textContent = currentQuestion + 1;
    progressFill.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
    
    // Update question text with fade effect
    questionElement.style.opacity = '0';
    setTimeout(() => {
        questionElement.textContent = question.question;
        questionElement.style.opacity = '1';
    }, 200);
    
    // Clear and populate answers
    answersElement.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const answerCard = document.createElement('div');
        answerCard.className = 'answer-card';
        answerCard.innerHTML = `<p class="answer-text">${answer.text}</p>`;
        answerCard.onclick = () => selectAnswer(index);
        answersElement.appendChild(answerCard);
    });
}

function selectAnswer(answerIndex) {
    const question = quizQuestions[currentQuestion];
    const selectedAnswer = question.answers[answerIndex];
    
    // Store answer
    quizAnswers.push(selectedAnswer);
    
    // Update personality scores
    personalityScores[selectedAnswer.persona] += selectedAnswer.points;
    
    // Move to next question or show results
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        setTimeout(() => {
            displayQuestion();
        }, 300);
    } else {
        setTimeout(() => {
            showResults();
        }, 500);
    }
}

function showResults() {
    // Determine dominant personality
    let dominantPersonality = 'strategist';
    let highestScore = 0;
    
    for (const [personality, score] of Object.entries(personalityScores)) {
        if (score > highestScore) {
            highestScore = score;
            dominantPersonality = personality;
        }
    }
    
    // Update profile page with results
    const profile = personalities[dominantPersonality];
    document.getElementById('profilePersona').textContent = profile.title;
    document.getElementById('profileDesc').textContent = profile.description;
    document.getElementById('productName').textContent = profile.product;
    document.getElementById('productDesc').textContent = profile.productDesc;
    
    // Move to results page
    nextStep();
}

// ===================================
// FORM HANDLING
// ===================================

function handleRSVP() {
    const emailInput = document.querySelector('.rsvp-input');
    const email = emailInput.value;
    
    if (email && validateEmail(email)) {
        // In a real implementation, this would send to a backend
        alert(`Thank you! RSVP confirmed for ${email}. You'll receive exclusive access details soon.`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===================================
// EVENT LISTENERS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Add RSVP button handler
    const rsvpButton = document.querySelector('.cta-button.vip');
    if (rsvpButton) {
        rsvpButton.onclick = handleRSVP;
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight' && currentStep < 5) {
            // Only auto-advance on certain steps
            if (currentStep === 1 || currentStep === 2) {
                nextStep();
            }
        } else if (event.key === 'ArrowLeft' && currentStep > 1) {
            previousStep();
        }
    });
    
    // Add smooth transitions for question changes
    const questionElement = document.getElementById('quizQuestion');
    if (questionElement) {
        questionElement.style.transition = 'opacity 0.3s ease';
    }
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = Math.round(end);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Add subtle parallax effect to hero section
window.addEventListener('scroll', function() {
    if (currentStep === 1) {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});
