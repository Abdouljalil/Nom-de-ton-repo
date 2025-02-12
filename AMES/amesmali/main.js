// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Progress bar
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}

window.addEventListener('scroll', updateProgressBar);

// Mobile navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `fadeInUp 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
        navLinks.forEach(link => link.style.animation = '');
    });
});


// Theme toggling
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Language translation
const translations = {
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.team': 'Équipe',
        'nav.activities': 'Activités',
        'nav.partners': 'Partenaires',
        'hero.title': "Association Maliennne pour l'Équitée social",
        'hero.subtitle': 'Ensemble pour un Mali plus équitable',
        'hero.cta': 'En savoir plus',
        'about.title': 'À Propos de AMES',
        'about.description': "L’Association Malienne pour l’Équité Sociale (AMES) est une organisation à but non lucratif qui œuvre activement pour réduire les profondes inégalités sociales, économiques et environnementales auxquelles sont confrontées les populations vulnérables au Mali. Créée avec la ferme conviction que l’équité constitue un pilier essentiel du développement durable, AMES se donne pour mission de relever des défis cruciaux tels que l’accès restreint à l’éducation, aux soins de santé, à la justice ou encore aux opportunités économiques. En proposant des solutions concrètes, adaptées et centrées sur les besoins réels des communautés marginalisées, l’association ambitionne de favoriser une transformation sociale significative et de bâtir une société plus équitable et solidaire.",
        'about.stats.founded': 'Année de création',
        'about.stats.beneficiaries': 'Bénéficiaires',
        'about.stats.projects': 'Activités réalisées',

        "vision.title": "Notre vision",
        "vision.description": "Les valeurs fondamentales d’AMES :",
        "vision.list.inclination": "AMES fait de l’humilité et de l’empathie les piliers de son engagement. Nous prêtons une oreille attentive aux besoins et aspirations des communautés, en veillant à leur apporter des réponses adaptées et respectueuses.",
        "vision.list.transparency": "La transparence est au cœur des principes d’AMES. Nous nous engageons à communiquer ouvertement sur nos décisions et nos actions.",
        "vision.list.responsibility": "AMES est convaincue que les communautés possèdent les ressources nécessaires pour prendre en main leur propre développement.",
        "vision.list.synergy": "AMES valorise le pouvoir de la collaboration pour créer des alliances stratégiques.",
        "vision.list.innovation": "L’innovation est au cœur de la mission d’AMES en intégrant des solutions créatives.",
        "vision.list.environment": "AMES s’efforce de préserver l’environnement avec des pratiques durables.",
        "vision.list.justice": "AMES lutte contre les inégalités en œuvrant pour l’égalité des droits.",
        "vision.list.empowerment": "AMES renforce les capacités des communautés locales.",
        //TEAM
        'team.title': 'Notre Équipe',
        'team.president': 'Président',
        'team.informatique': "Responsable de l'informatique et Numérique",
        'team.adminSec': 'Secrétaire administrative',
        'team.partEtGouv': 'Chargé des relations avec les partenaires et gouvernement',
        'team.Adjoint secrétaire général': 'Adjoint secrétaire général',
        'team.Org': 'Responsable des organisations',
        'team.MobCom':'Chargée de la mobilisation communautaire',
        'team.Edu': 'Responsable de l\'éducation',
        'Team.SuiEva':'Chargé de suivi évaluation',
        'team.AdjPartGouv':'Adjointe Chargé des relations avec les partenaires et gouvernement',
        'team.AdjMobCom':'Adjoint Chargée de la mobilisation communautaire',
        'team.AdjSan':'Adjointe Chargée de la santé',
        'team.AdjEdu':'Adjointe Responsable de l\'éducation',
        'team.AdjOrg':'Adjoint Responsable des organisations',

        //END TEAM
        'activities.title': 'Nos Activités',
        'activities.title2':'Aide aux enfants défavorisés',
        'activities.education.title': 'Éducation',
        'activities.education.description': 'Programmes éducatifs pour les jeunes défavorisés',
        'activities.support.title': 'Soutien Social',
        'activities.support.description': 'Aide aux familles en difficulté',
        'activities.environment.title': 'Environnement',
        'activities.environment.description': 'Projets de développement durable',
        'activities.justice.title': 'Droits et Justice',
        'activities.justice.description': 'Droits Humains et Justice sociale',
        'partners.title': 'Nos Partenaires',
        'footer.description': "Association Maliennne pour l'Équitée social",
        'footer.contact': 'Contact',
        'footer.social': 'Réseaux Sociaux',
        'footer.rights': 'Tous droits réservés',
        'team.VicePresident': 'Vice-Président',
        'team.SecGen': 'Secrétaire Générale',
        'team.TreGen': 'Trésorier Générale',
        'team.ChaPro':'Chargé de Projets',
        'team.SecAdm':'Adjoint Secrétaire Administratif',
        'team.ChaCom':'Chargé de la Communication',
        'team.AdjSuiEva':'Adjoint Chargé de suivi évaluation',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.team': 'Team',
        'nav.activities': 'Activities',
        'nav.partners': 'Partners',
        'hero.title': 'Malian Association for Social Equity',
        'hero.subtitle': 'Together for a more equitable Mali',
        'hero.cta': 'Learn More',
        'about.title': 'About AMES',
        'about.description': "The Malian Association for Social Equity (AMES) is a non-profit organization that actively works to reduce the profound social, economic, and environmental inequalities faced by vulnerable populations in Mali. Founded with the firm conviction that equity is a fundamental pillar of sustainable development, AMES aims to tackle critical challenges such as limited access to education, healthcare, justice, or economic opportunities. By offering concrete, tailored, and needs-based solutions, the association strives to facilitate meaningful social transformation and build a more equitable and socially cohesive society.",
        'about.stats.founded': 'Founded',
        'about.stats.beneficiaries': 'Beneficiaries',
        'about.stats.projects': 'Projects Completed',

        "vision.title": "Our Vision",
        "vision.description": "The core values of AMES:",
        "vision.list.inclination": "AMES makes humility and empathy the pillars of its commitment by listening carefully to community needs with adapted and respectful responses.",
        "vision.list.transparency": "Transparency is at the heart of AMES’ principles. We commit to communicating openly about our decisions and actions.",
        "vision.list.responsibility": "AMES believes that communities have the resources to take charge of their own development.",
        "vision.list.synergy": "AMES values the power of collaboration to forge strategic alliances.",
        "vision.list.innovation": "Innovation is at the core of AMES’ mission, integrating creative and adapted solutions.",
        "vision.list.environment": "AMES strives to preserve the environment through sustainable practices.",
        "vision.list.justice": "AMES fights inequalities and works to ensure equal rights.",
        "vision.list.empowerment": "AMES is dedicated to strengthening local communities so they can drive their own development.",
        //TEAM
        'team.title': 'Our Team',
        'team.president': 'President',
        'team.informatique': "Head of IT and Digital",
        'team.adminSec': 'Administrative Secretary',
        'team.partEtGouv': 'Partnership and Government Relations',
        'team.AdjSecGen': 'Deputy Secretary General',
        'team.Org': 'Organizational Secretary',
        'team.MobCom':'Community Mobilization Officer',
        'team.Edu':'Education Secretary',
        'team.SuiEva':'Monitoring and Evaluation Officer',
        'team.AdjPartGouv':'Deputy Partnership and Government Relations',
        'team.AdjMobCom':'Deputy Community Mobilization Officer',
        'team.AdjSan':'Deputy Health Officer',
        'team.AdjEdu':'Deputy Education Secretary',
        'team.AdjOrg':'Deputy Organizational Secretary',
        'team.VicePresident': 'Vice-President',
        'team.SecGen': 'Secretary General',
        'team.TreGen': 'Treasurer General',
        'team.ChaPro':'Project Manager',
        'team.SecAdm':'Deputy Administrative Secretary',
        'team.ChaCom':'Communication Manager',
        'team.AdjSuiEva':'Deputy Monitoring and Evaluation Officer',
        
        


        //END TEAM
        'activities.title': 'Our Activities',
        'activities.title2': 'Help the most vulnerable children',
        'activities.education.title': 'Education',
        'activities.education.description': 'Educational programs for disadvantaged youth',
        'activities.support.title': 'Social Support',
        'activities.support.description': 'Aid for families in need',
        'activities.environment.title': 'Environment',
        'activities.environment.description': 'Sustainable development projects',
        'activities.justice.title': 'Rights and Justice',
        'activities.justice.description': 'Human Rights and Social Justice',
        'partners.title': 'Our Partners',
        'footer.description': 'Malian Association for Social Equity',
        'footer.contact': 'Contact',
        'footer.social': 'Social Media',
        'footer.rights': 'All rights reserved'
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Initialize with French
updateLanguage('fr');