// tanishq_portfolio/src/App.jsx
import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="max-w-6xl mx-auto py-20 px-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold mb-10 text-gray-100 tracking-wide border-b-2 border-blue-500 pb-2 w-fit">
      {title}
    </h2>
    {children}
  </motion.section>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`${darkMode ? 'dark' : ''} flex`}>      
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col gap-4 fixed top-0 left-0 h-screen w-60 bg-gray-900 text-white shadow-lg py-10 px-6 z-50 border-r border-gray-800">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-10">Tanishq</h1>
        <nav className="flex flex-col gap-4 text-lg">
          {[
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-3000 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setDarkMode(!darkMode)} className="mt-auto text-xl self-start">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-60 font-sans bg-gradient-to-br from-gray-800 to-gray-950 text-gray-100 dark:from-gray-950 dark:to-black dark:text-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-900 dark:bg-black">
          <motion.img 
            src="/tanishq.jpg" 
            alt="Tanishq Jain" 
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-blue-500 shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Tanishq Jain
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light">AI/ML Engineer | Data Analyst | Full-Stack Developer</p>
          <div className="flex gap-6 text-3xl">
            <a href="mailto:tanishq7389@gmail.com" className="hover:text-blue-500"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/tanishq-jain-08a63a358/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
          </div>
        </section>

        <Section id="about" title="About Me">
          <p className="text-lg leading-relaxed max-w-3xl">
            I’m Tanishq Jain, an innovative AI/ML engineer passionate about solving real-world
            problems through scalable intelligent systems. From enhancing interiors with GANs to
            translating ancient Sanskrit using Transformers, I thrive at the intersection of
            creativity and computation.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            {['Python','Java','C','React.js','Flask','MySQL','TensorFlow','PyTorch','Power BI','Computer Vision','GANs / Transformers','Predictive Modeling'].map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm dark:bg-blue-900 dark:text-blue-300 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Interior Design AI System", desc: "YOLOv8, CycleGAN, Pix2Pix – FID: 0.072" },
              { title: "ShabdSaar: Sanskrit Translator", desc: "Transformer-based NLP, BLEU: 85%" },
              { title: "OTT Performance Dashboard", desc: "Power BI dashboard with viewer KPIs" },
              { title: "Loan Approval Predictor", desc: "91% accuracy using logistic regression" },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{proj.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="border-l-4 pl-6 space-y-6">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">AI Intern – Interior Design Automation</h3>
              <p className="text-sm text-gray-400">Mar 2025 – May 2025</p>
              <ul className="list-disc pl-5">
                <li>Built YOLOv8 & GAN-based room layout enhancer</li>
                <li>Reduced redesigns by 60%</li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">ML Intern – ShabdSaar Sanskrit NLP</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2025 – Feb 2025</p>
              <ul className="list-disc pl-5">
                <li>Achieved BLEU score of 85% with Transformers</li>
                <li>Optimized pre-processing to reduce errors by 30%</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-4">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold">B.Tech – Artificial Intelligence & Machine Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Symbiosis Institute of Technology | 2022 – 2026</p>
            </div>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold">HSC – PCM</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Vandana Convent School | 2020 – 2022</p>
            </div>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold">SSC</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Vandana Convent School | 2010 – 2020</p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Get in Touch">
          <div className="mb-6">
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
          <p className="text-lg">
            Feel free to reach out via email at{' '}
            <a href="mailto:tanishq7389@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              tanishq7389@gmail.com
            </a>{' '}or connect on{' '}
            <a
              href="https://linkedin.com/in/tanishq-jain-08a63a358/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>.
          </p>
        </Section>
      </div>
    </main>
  );
};

export default App;
