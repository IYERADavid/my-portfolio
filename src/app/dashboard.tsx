'use client';
import React from "react";
import dynamic from "next/dynamic";
import Section from "@/components/section";
import Card from "@/components/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export function Dashboard() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce platform with user authentication, product management, and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/images/hero11.jpg",
      link: "https://example.com/portfolio",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects, skills, and contact information.",
      tags: ["Next.js", "Tailwind CSS"],
      image: "/images/hero11.jpg",
      link: "https://example.com/portfolio",
    },
    {
      title: "Real-Time Chat App",
      description: "A real-time chat application with WebSocket integration for instant messaging.",
      tags: ["React", "Socket.IO", "Express"],
      image: "/images/hero11.jpg",
      link: "https://example.com/portfolio",
    },
  ];

  const skills = [
    { title: "Frontend", description: "HTML5, CSS3, JavaScript, React.js, Next.js" },
    { title: "Backend", description: "Node.js, Express.js, MongoDB, PostgreSQL" },
    { title: "Tools", description: "Git, Docker, Webpack, Babel" },
    { title: "Frontend", description: "HTML5, CSS3, JavaScript, React.js, Next.js" },
    { title: "Backend", description: "Node.js, Express.js, MongoDB, PostgreSQL" },
    { title: "Tools", description: "Git, Docker, Webpack, Babel" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="w-full max-w-screen-lg mx-auto px-4">
      <Slider {...sliderSettings}>
        {/* Slide 1: About Me */}
        <div className="p-4">
          <Section
            title="About Me"
            content="I'm a Full Stack Developer with X years of experience crafting responsive and functional web interfaces.
            Proficient in HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB. I build engaging web apps
            and thrive on solving challenging UI problems."
          />
        </div>

        {/* Slide 2: Skills */}
        <div className="p-4">
          <Section
            title="Skills"
            content="Here are some of the technologies and tools I specialize in:"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {skills.map((skill, index) => (
              <Card key={index} title={skill.title} description={skill.description} />
            ))}
          </div>
        </div>

        {/* Slide 3: Projects */}
        <div className="p-4">
          <Section
            title="Projects"
            content="Here are a few personal and professional projects I've worked on, showcasing my development skills and creativity."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                {/* Project Description */}
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Project Link */}
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 4: Contact */}
        <div className="p-4">
          <Section
            title="Contact"
            content="Feel free to reach out to me via:
            - Email: iyerdavid@gmail.com
            - Phone: +250798697626
            - LinkedIn: linkedin.com/in/iyerdavid"
          />
        </div>
      </Slider>
    </section>
  );
}