import './style.css';
import AOS from 'aos';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Typed.js
new Typed('#typed-text', {
    strings: ['Automation Engineer', 'IoT Developer', 'Robotics Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    cursorChar: '|'
});

// Projects Data
const projects = [

    {
        title: "Smart Alcohol Detection and Engine Locking System",
        category: "IoT",
        image:"image/iot project.jpg",
        description: "The Smart Alcohol Detection and Engine Locking System is a solution aimed at preventing drunk driving by integrating cutting-edge technology to ensure road safety. This system combines a user-friendly platform, MEMS Ethanol sensors, GPS tracking, and real-time notifications to address the critical issue of impaired driving.",
        link: "https://github.com/Pasanbasuru1124/IOT",
        technologies: ["ESP32", "Arduino"]
    },
    {
        title: "Design and Creation of a Pneumatic System for Industrial Application",
        category: "Pneumatic",
        image: "image/Pneumatic.png",
        description: "The Pneumatic Sorting System automates the sorting and marking of boxes using pneumatic mechanisms controlled by an Arduino UNO board.",
        link: "https://www.linkedin.com/in/pasanbasuruwijerathna/details/projects/",
        technologies: ["Pneumatics", "FluidSIM", "Automation", "Sensors"]
    },
    {
        title: "Automated Apple Packing Warehouse Conveyor System",
        category: "Automation",
        image: "image/Apple Package.png",
        description: "IoT-based environmental monitoring system with advanced features and real-time alerts.",
        link: "https://drive.google.com/drive/folders/1-PvNId0SBlPO8GaQhO76bYQ0NAiheP0v?usp=sharing",
        technologies: ["IndustrialAutomation", "XinjePLC", "ConveyorSystem", "Selpro Ladder Diagram", "Xinje Ladder Diagram"]
    },
    {
        title: "Water Hyacinth Removal and Waste-to-Energy System",
        category: "Other",
        image: "image/Removal.png",
        description: "An innovative Vesak lantern project combining traditional art with modern technology.",
        link: "https://drive.google.com/drive/folders/1-w7fEC9tXPhh3ehmRrroDo1CjD3eeRS2?usp=sharing",
        technologies: ["CAD", "Energy", "Innovation"]
    }
];

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Initialize projects
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    function createProjectCard(project) {
        return `
            <div class="project-card" data-aos="fade-up">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                </div>
            </div>
        `;
    }

    function renderProjects(category = 'All') {
        const filteredProjects = category === 'All' 
            ? projects 
            : projects.filter(project => project.category === category);
        
        projectsGrid.innerHTML = filteredProjects.map(createProjectCard).join('');
        AOS.refresh();
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.category);
        });
    });

    renderProjects();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);
