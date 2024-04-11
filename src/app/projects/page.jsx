import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Project from "@/components/Project/Project";
import "./Projects.css";

export const metadata = {
  title: "These are all places where I learned skills to take into my life.",
  description:"All below are companies that taught me something and help develop who I am today.",
  projects: [
    {
      company: "The Church of Jesus Christ of Latter-Day Saints",
      description: "As a Employee here I have gained understanding of how to discuss and assist others. I learned how to problem-solve and guide others to finding as solution.",
      link: "https://www.churchofjesuschrist.org/?lang=eng",
    },
    {
      company: "ZipFizz",
      description: "This Company taught me how to Communicate as I was a sales, I have grown an ability to speak to others and have conversations that are more meaningful.",
      link: "https://zipfizz.com/",
    },
    {
      company: "McDonalds",
      description: "I learned how to serve others here. I honestly had this Job as a place I have always wanted to work but learned how to listen and follow and serve anyone who came looking for a good burger.",
      link: "https://www.mcdonalds.com/us/en-us.html",
    },
    {
      company: "Morgan Door Company",
      description: "This was my first official job it is family owned and I learned how to work hard and use my hands to fix and overcome obsticals and problems that happen within a project.",
      link: "http://morgandoorcompany.com/",
    },
    {
      company: "Slack",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://app.slack.com/",
    },
    {
      company: "Ensign College",
      description: "Developing capable and trusted disciples of Jesus Christ. Need I say more?",
      link: "https://www.ensign.edu",
    },
  ],
};

export default function Projects() {
  const projects = metadata.projects.map((project, index) => (
    <Project key={index} company={project.company} description={project.description} link={project.link} />
  ));
  return (
    <div id="page-wrapper">
      <Header />
      <div id="main-content">
        <Intro title={metadata.title} introduction={metadata.description} />
        <div id="projects">{projects}</div>
      </div>
      <Footer />
    </div>
  );
}
