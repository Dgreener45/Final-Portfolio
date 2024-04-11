import Header from "@/components/Header/Header";
import Intro from "@/components/introduction/intro";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkedWidget/WorkedWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

const articles = [
  {
    date: "April 9, 2024",
    title: "IT Specialist",
    content:
      "I am an IT Specialist and This is why I built the Uses page as it explains what I use while at work and focusing within the Uses page. Please check out Uses to see what my uses and preferences.",
    link: "https://ominous-disco-jjrrvrrgv459fjpxw-3000.app.github.dev/about",
  },
  {
    date: "April 10, 2024",
    title: "Being a Father",
    content:
      "The about page talks about who I am and what my meanings of life is. If you want to learn more about me go to the about page and see who I am.",
    link: "https://ominous-disco-jjrrvrrgv459fjpxw-3000.app.github.dev/uses",
  },
  {
    date: "April 2, 2024",
    title: "Being a Believer in Christ",
    content:
      "Projects show who I am and how my previous jobs have made me a better person and a harder worker. There are opportunities to learn in all things. Please go to the projects page to see what I have overcome and what I am becoming.",
    link: "https://ominous-disco-jjrrvrrgv459fjpxw-3000.app.github.dev/projects",
  },
];

const intro = {
  image: "Second profile.jpg",
  title: "IT Specialist, Father, Believer, and Student",
  introduction:
    "This portfolio is to show what I have learned this semester and proves an understanding in Java Script. I am a father to a beautiful 1 year old girl. I am currently studying for a BAS in CyberSecurity at ensign business college. I am a Member of the Church of Jesus Christ of Latter Day Saints.",
  linkedIn_link: "https://www.linkedin.com/in/dexter-greener-b1b757193/",
  x_link: "https://www.twitter.com",
  github_link: "https://github.com/Dgreener45/Final-Portfolio",
};

const skills = [
  { name: "HTML", proficiency: 70, icon: "html5.png" },
  { name: "CSS", proficiency: 40, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
];

export default function Home() {
  return (
    <div id="page-wrapper">
      <Header />
      <Intro
        image={intro.image}
        title={intro.title}
        introduction={intro.introduction}
        linkedIn_link={intro.linkedIn_link}
        x_link={intro.x_link}
        github_link={intro.github_link}
      />
      <div className="content-wrapper">
        <div id="main-content">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>

        <div id="main_right">
          <SignupWidget
            title={"Stay up to date"}
            content={"Get notified when I publish something new, and unsubscribe at any time."}
          />
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "/slack.png",
                organization: "Slack",
                jobTitle: "Software Engineer",
                startYear: 2016,
                endYear: 2020,
              },
              {
                logo: "/spotify.png",
                organization: "Spotify",
                jobTitle: "Software Engineer",
                startYear: 2014,
                endYear: 2015,
              },
              {
                logo: "/audible.png",
                organization: "Audible",
                jobTitle: "Software Engineer",
                startYear: 2012,
                endYear: 2013,
              },
              {
                logo: "/microsoft.png",
                organization: "Microsoft",
                jobTitle: "Software Engineer",
                startYear: 2010,
                endYear: 2011,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={"These are how I feel I excell and feel what my skills are."}
            skills={skills}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
