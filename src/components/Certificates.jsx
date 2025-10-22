import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const certificates = [
  {
    title: "Accenture Developer Virtual Experience",
    year: "2024",
    issuer: "Accenture",
    type: "Other",
    image: "/accenture.png",
    verifyLink: "#",
  },
  
  {
    title: "Aviatrix Certified Engineer (ACE) Multicloud Network Associate",
    year: "2024",
    issuer: "Aviatrix",
    type: "Cloud",
    image: "/Aviatrix.png",
    verifyLink: "#",
  },
  
  {
    title: "Salesforce Developer Virtual Internship",
    year: "2024",
    issuer: "Salesforce",
    type: "Cloud",
    image: "/salesforce.png",
    verifyLink: "#",
  },
];

const CertificateCard = ({ certificate, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.8)}
    className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl w-full sm:w-[320px] flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
    whileHover={{ y: -8, scale: 1.04 }}
  >
    <div className="flex items-center gap-4 mb-2">
      <img
        src={certificate.image}
        alt={certificate.issuer + " logo"}
        className="w-12 h-12 object-contain rounded-xl border border-white/30 shadow-md bg-white/20 p-1"
        loading="lazy"
      />
      <div>
        <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-1 group-hover:text-blue-300 transition-colors duration-200">{certificate.title}</h3>
        <p className="text-gray-300 text-xs md:text-sm mb-1">{certificate.issuer} • {certificate.year}</p>
        <a href={certificate.verifyLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-xs md:text-sm hover:text-blue-300 transition-colors">Verify</a>
      </div>
    </div>
    <div className="mt-auto text-[13px] text-gray-400 italic">{certificate.type}</div>
    <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:opacity-60 opacity-40 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-pink-500/10" />
  </motion.div>
  
);

const Certificates = () => (
  <section className="w-full min-h-screen bg-[#050816] flex flex-col justify-center py-16 px-4 md:px-10 lg:px-24">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Achievements</p>
      <h2 className={styles.sectionHeadText}>Certificates</h2>
    </motion.div>
    <motion.div
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {certificates.map((certificate, index) => (
        <CertificateCard key={certificate.title} certificate={certificate} index={index} />
      ))}
    </motion.div>
  </section>
);

export default SectionWrapper(Certificates, "certificates");
