import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "#915EFF", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      icon={
        experience.logo ? (
          <img 
            src={experience.logo} 
            alt={`${experience.title} logo`} 
            className="w-full h-full object-contain rounded-full p-1"
          />
        ) : (
          <span style={{fontWeight:'bold', fontSize: '22px', color: '#fff'}}>•</span>
        )
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {experience.company && (
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            {experience.company}
          </p>
      
        )}
        {experience.location && (
          <p className='text-gray-400 text-[14px]' style={{ margin: 0 }}>
            {experience.location}
          </p>
        )}
        {experience.technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-[#915EFF] text-white px-2 py-1 rounded text-[12px] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="w-full min-h-screen bg-[#050816] flex flex-col justify-center py-16 px-4 md:px-10 lg:px-24">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
