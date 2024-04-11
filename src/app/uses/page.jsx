import "./Uses.css";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro.jsx";
import PropTypes from "prop-types";
import UseCard from "@/components/UsesCard/UsesCard.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const UsesSection = () => {
  const intro = {
    title: "Software I use, gadgets I love, and other things I recommend.",
    introduction:
      "Listed below is what I have to work with and what I use to make my work and projects be successful. I am new to all of this so if you have already upgraded you are way ahead of me and I should take your advice!",
  };

  const items = [
    {
      groupName: "Workstation",
      items: [
        {
          title: "12” Surface Pro, Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz, 16GB RAM (2022)",
          description:
            "I use this as my portable take anywhere, to go device as it has enough juice to get the job done.",
        },
        {
          title: "LG 19 inch Windows Machine, Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz   1.50 GHz , 32Gb RAM, 1TB SSD (2020)",
          description:
            "This is my home device that I use for big projects as well as a few servers for others things. It has enough power and storage to have a good workstation.",
        },
        {
          title: "Dell 27 inch 4k Monitor",
          description:
            "I’ve been using these Monitors for a few years now and I love it. It’s 4k, has a great Visual, and the multiple screens help with the projects.",
        },
        {
          title: "Dell Mouse",
          description:
            "I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.",
        },
        {
          title: "Dell Keyboard",
          description:
            "I’ve been using this keyboard for a few years now and they’re great. They’re comfortable, keys feel good, and are built like a tank.",
        },
        {
          title: "Microsoft Xbox Headset",
          description:
            "I’ve been using this Headset for my computers for a few years now and it’s great. It’s sturdy, sounds good, and mic works well.",
        },
      ],
    },
    {
      groupName: "Development",
      items: [
        {
          title: "Visual Studio Code",
          description:
            "I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.",
        },
        {
          title: "iTerm2 + Oh My Zsh",
          description:
            "I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.",
        },
      ],
    },
    {
      groupName: "Design",
      items: [
        {
          title: "Figma",
          description:
            "I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.",
        },
        {
          title: "Whimsical",
          description:
            "I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.",
        },
      ],
    },
    {
      groupName: "Productivity",
      items: [
        {
          title: "Notion",
          description:
            "I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.",
        },
        {
          title: "Alfred",
          description:
            "I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.",
        },
      ],
    },
  ];

  return (
    <div id="page-wrapper">
      <Header />
      <Intro title={intro.title} introduction={intro.introduction} />
      <main className="uses-main-content">
        {items.map((group, index) => (
          <section className="uses-section" key={index}>
            <h2 className="uses-section-title">{group.groupName}</h2>
            <div className="uses-cards-container">
              {group.items.map((item, itemIndex) => (
                // Props passed to UsesCard match the prop names in the updated UsesCard component
                <UseCard key={itemIndex} title={item.title} description={item.description} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};
export default UsesSection;
