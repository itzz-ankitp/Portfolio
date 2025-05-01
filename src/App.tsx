import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import LoadingSpinner from './components/LoadingSpinner';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('6-MJoDO4I25iIaW0G');

function App() {
  const [loading, setLoading] = useState(true);
  const form = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setFormStatus('sending');
    console.log('Form data:', new FormData(form.current));
    
    emailjs.sendForm(
      'service_smzwjyp',
      'template_1d33cre',
      form.current,
      '6-MJoDO4I25iIaW0G'
    )
      .then((result) => {
        console.log('Success:', result);
        setFormStatus('success');
        if (form.current) form.current.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        setFormStatus('error');
      });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 text-gray-900">
      <Navbar />
      
      {/* Home Section */}
      <Section id="home" className="flex items-center justify-center relative min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Welcome to Piratla Ankit Rama Datt's Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Innovating with AI, engineering solutions, and shaping the future through technology.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Hi, I'm Ankit, a passionate engineer with a focus on AI, blockchain, and software development. 
                With a background in creating innovative solutions, I thrive on building impactful 
                projects and collaborating on cutting-edge technologies.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/itzz-ankitp" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/piratla-ankit-rama-datt/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:itsme.ankit2006@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programming', items: ['Java', 'Solidity', 'Python'] },
              { title: 'Technologies', items: ['AR/VR', 'AI/ML', 'Blockchain'] },
              { title: 'Frameworks', items: ['React', 'TensorFlow', 'Web3.js'] },
              { title: 'Tools', items: ['Git', 'Docker', 'AWS'] },
              { title: 'Soft Skills', items: ['Problem Solving', 'Leadership', 'Communication'] },
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ChronoSpect',
                description: 'AR/VR historical exploration application with AI-enhanced visualizations.',
                image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d',
                link: 'https://chronospect.pages.dev/'
              },
              {
                title: 'Disaster Helper App',
                description: 'Mobile app providing real-time emergency response support.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
                link: '#'
              },
              {
                title: 'Forwarder Contract',
                description: 'Secure, gas-efficient blockchain contract for ERC-20 and ERC-721 transfers.',
                image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
                link: '#'
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Get in Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors disabled:bg-gray-400"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;