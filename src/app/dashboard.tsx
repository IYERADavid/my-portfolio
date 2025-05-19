'use client';
import React from "react";
import dynamic from "next/dynamic";
import Card from "@/components/card";
import Section from "@/components/section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export function Dashboard() {
  const cards = [
    { title: "Web Development", description: "High-quality development of sites at the professional level." },
    { title: "Photography", description: "I make high-quality photos of any category at a professional level." },
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
    <section className="w-full">
      <Slider {...sliderSettings}>
        {/* Slide 1: About Me and Skills */}
        <div className="p-4">
          <Section
            title="About Me"
            content="I'm a Full Stack Developer with X years of experience crafting responsive and functional web interfaces.
            Proficient in HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB. I build engaging web apps
            and thrive on solving challenging UI problems."
          />
          <Section
            title="Skills"
            content="I have expertise in a wide range of technologies, including:
            - Frontend: HTML5, CSS3, JavaScript, React.js, Next.js
            - Backend: Node.js, Express.js, MongoDB, PostgreSQL
            - Tools: Git, Docker, Webpack, Babel"
          />
        </div>

        {/* Slide 2: Projects and Experience */}
        <div className="p-4">
          <Section
            title="Projects"
            content="Here are a few personal and professional projects I've worked on, showcasing my development skills and creativity."
          />
          <Section
            title="Experience"
            content="I have worked on various projects, including:
            - Building scalable e-commerce platforms
            - Developing real-time chat applications
            - Creating responsive and accessible web interfaces"
          />
        </div>

        {/* Slide 3: Cards Section */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </div>
        </div>

        {/* Slide 4: Contact Section */}
        <div className="p-4">
          <Section
            title="Contact"
            content="Feel free to reach out to me via:
            - Email: iyerdavid@gmail.com
            - Phone: +250798697626
            - LinkedIn: my linkedin"
          />
        </div>
      </Slider>
    </section>
  );
}