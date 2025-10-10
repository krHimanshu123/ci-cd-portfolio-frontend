import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

// Import all skill icons
import javascriptIcon from "../assets/tech/javascript-icon.svg";
import javaIcon from "../assets/tech/java-icon.svg";
import cppIcon from "../assets/tech/cpp-icon.svg";
import typescriptIcon from "../assets/tech/typescript-icon.svg";
import reactIcon from "../assets/tech/react-icon.svg";
import nodejsIcon from "../assets/tech/nodejs-icon.svg";
import postgresIcon from "../assets/tech/postgresql-icon.svg";
import mongodbIcon from "../assets/tech/mongodb-icon.svg";
import mysqlIcon from "../assets/tech/mysql-icon.svg";
import awsIcon from "../assets/tech/aws-icon.svg";
import dockerIcon from "../assets/tech/docker-icon.svg";
import gitIcon from "../assets/tech/git-icon.svg";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: javascriptIcon, color: "#F7DF1E" },
      { name: "TypeScript", icon: typescriptIcon, color: "#3178C6" },
      { name: "Java", icon: javaIcon, color: "#ED8B00" },
      { name: "C++", icon: cppIcon, color: "#00599C" },
      { name: "Python", icon: null, color: "#3776AB" }
    ]
  },
  
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: reactIcon, color: "#61DAFB" },
      { name: "HTML5", icon: null, color: "#E34F26" },
      { name: "CSS3", icon: null, color: "#1572B6" },
      { name: "Tailwind CSS", icon: null, color: "#06B6D4" },
      { name: "Bootstrap", icon: null, color: "#7952B3" }
    ]
  },
  {
    title: "Backend Development", 
    skills: [
      { name: "Node.js", icon: nodejsIcon, color: "#339933" },
      { name: "Express.js", icon: null, color: "#000000" },
      { name: "REST APIs", icon: null, color: "#FF6B35" },
      { name: "GraphQL", icon: null, color: "#E10098" },
      { name: "PHP", icon: null, color: "#777BB4" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: mongodbIcon, color: "#4DB33D" },
      { name: "PostgreSQL", icon: postgresIcon, color: "#336791" },
      { name: "MySQL", icon: mysqlIcon, color: "#F29111" },
      { name: "Redis", icon: null, color: "#DC382D" },
      { name: "Firebase", icon: null, color: "#FFCA28" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: awsIcon, color: "#FF9900" },
      { name: "Docker", icon: dockerIcon, color: "#2496ED" },
      { name: "Git", icon: gitIcon, color: "#DE4C36" },
      { name: "GitHub", icon: null, color: "#181717" },
      { name: "CI/CD", icon: null, color: "#326CE5" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "VS Code", icon: null, color: "#007ACC" },
      { name: "Postman", icon: null, color: "#FF6C37" },
      { name: "Figma", icon: null, color: "#F24E1E" },
      { name: "Webpack", icon: null, color: "#8DD6F9" },
      { name: "NPM/Yarn", icon: null, color: "#CB3837" }
    ]
  }
];

const TechSkill = ({ skill, index }) => {
  const skillRef = useRef(null);

  useEffect(() => {
    const element = skillRef.current;
    if (!element) return;

    // GSAP hover animations
    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl
      .to(element, {
        scale: 1.1,
        rotation: 5,
        backgroundColor: skill.color + "20",
        borderColor: skill.color,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(element.querySelector('.skill-icon'), {
        rotation: 360,
        scale: 1.2,
        duration: 0.5,
        ease: "power2.out"
      }, 0)
      .to(element.querySelector('.skill-text'), {
        color: skill.color,
        duration: 0.3,
        ease: "power2.out"
      }, 0);

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Entry animation with GSAP
    gsap.fromTo(element, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotation: -10
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [skill.color, index]);

  return (
    <div
      ref={skillRef}
      className="bg-gray-800 px-4 py-3 rounded-xl text-center border border-gray-700 transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
        style={{ backgroundColor: skill.color }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-2">
        {skill.icon ? (
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="skill-icon w-6 h-6"
          />
        ) : (
          <div 
            className="skill-icon w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name.charAt(0)}
          </div>
        )}
        <span className="skill-text text-white text-sm font-medium transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

const TechCategory = ({ category, index }) => {
  const categoryRef = useRef(null);

  useEffect(() => {
    const element = categoryRef.current;
    if (!element) return;

    gsap.fromTo(element, {
      opacity: 0,
      y: 100,
      rotationY: -15
    }, {
      opacity: 1,
      y: 0,
      rotationY: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Floating animation
    gsap.to(element, {
      y: -10,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: index * 0.5
    });
  }, [index]);

  return (
    <div
      ref={categoryRef}
      className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 relative group"
    >
      {/* Category glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <h3 className="text-white text-xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {category.title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {category.skills.map((skill, skillIndex) => (
            <TechSkill key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Main container entrance animation
    gsap.fromTo(container, {
      opacity: 0,
      scale: 0.9
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050816] py-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My technical expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
          Skills & Technologies.
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {skillCategories.map((category, index) => (
          <TechCategory 
            key={category.title} 
            category={category} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
