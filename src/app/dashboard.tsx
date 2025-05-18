import Card from "@/components/card";
import Section from "@/components/section";

export function Dashboard() {
  const cards = [
    { title: "Web Development", description: "High-quality development of sites at the professional level." },
    { title: "Photography", description: "I make high-quality photos of any category at a professional level." },
  ];

  return (
    <>
      <section className="w-full md:w-2/3">
        {/* About Me Section */}
        <Section
          title="About Me"
          content="I'm a Full Stack Developer with X years of experience crafting responsive and functional web interfaces.
          Proficient in HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB. I build engaging web apps
          and thrive on solving challenging UI problems."
        />

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>

        {/* Projects Section */}
        <Section
          title="Projects"
          content="Here are a few personal and professional projects I've worked on, showcasing my development skills and creativity."
        />

        {/* Testimonials Section */}
        <Section
          title="Testimonials"
          content="Here are some testimonials from my clients and colleagues."
        />

        {/* Skills Section */}
        <Section
          title="Skills"
          content="I have expertise in a wide range of technologies, including:
          - Frontend: HTML5, CSS3, JavaScript, React.js, Next.js
          - Backend: Node.js, Express.js, MongoDB, PostgreSQL
          - Tools: Git, Docker, Webpack, Babel"
        />

        {/* Experience Section */}
        <Section
          title="Experience"
          content="I have worked on various projects, including:
          - Building scalable e-commerce platforms
          - Developing real-time chat applications
          - Creating responsive and accessible web interfaces"
        />

        {/* Contact Section */}
        <Section
          title="Contact"
          content="Feel free to reach out to me via:
          - Email: iyerdavid@gmail.com
          - Phone: +250798697626
          - LinkedIn: my linkedin"
        />
      </section>
    </>
  );
}