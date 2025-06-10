import { useContext } from "react";
import ProjectsCard from "./ProjectCard";
import Title from "./Title";
import { ThemeContext } from "../context/themeContext";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="projects"
      className={`w-full py-20 border-b-[1px] pad ${
        theme === 'dark' ? 'border-b-bodyColor-dark/50' : 'border-b-bodyColor-light/50'
      } scroll-mt-[100px]`}
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-10">
      <ProjectsCard
          title="Melody Photography"
          des="A realtime react project to show photography works and to book the service."
          src="/projects/melody.png"
          projLink="https://melodyphotographyps.netlify.app/"
        />
        <ProjectsCard
          title="HR Desk"
          des="A Final Year project for automating the HR process in a company. The project is built using React, Node.js, Express.js, and MongoDB."
          src="/projects/finalyr.png"
          projLink="https://melodyphotographyps.netlify.app/"
        />
      <ProjectsCard
          title="Ahmed Paint Traders Karaikudi"
          des="A realtime react project to show up the Landing page for that business."
          src="/projects/ahmed.png"
          projLink="https://ahmedpainttraders.in/"
        />
        <ProjectsCard
          title="Natarajan and co - Ultratech Building solutions"
          des="A realtime react project to show up the Landing page for that business."
          src="/projects/nc.png"
          projLink="https://natarajanandco.com/"
        />
        <ProjectsCard
          title="Shopping Site"
          des="A sample front end shopping site with the help of React, Tailwind CSS."
          src="/projects/shopsite.png"
          projLink="https://p15-ecommerce-site-react-tailwind.netlify.app/"
          gitLink="https://github.com/Kabileshwaran183/P15-Ecommerce-site"
        />
        <ProjectsCard
          title="Recipe App"
          des="Get Recipes of your favourite food items by providing only the ingredients list. The Hugging Face API is used to get the recipes."
          src="/projects/Recipeapp.png"
          projLink="https://p5-recipe-app.netlify.app/"
          gitLink="https://github.com/Kabileshwaran183/P5-Recipe-App"
        />
        <ProjectsCard
          title="Assembly Endgame - Word Finder"
          des="A word finder game built in React. Guess words from a grid. Wrong guesses cost you lives!"
          src="/projects/endgame.png"
          projLink="https://assembly-endgame-react.netlify.app/"
          gitLink="https://github.com/Kabileshwaran183/Assembly-EndGame"
        />
        <ProjectsCard
          title="Tenzies - Roll the Dice"
          des="Roll the dice until all numbers match. Built using React. Track your roll attempts and play again!"
          src="/projects/tenzies.png"
          projLink="https://tenzies-game-prjct.netlify.app/"
          gitLink="https://github.com/Kabileshwaran183/Tenzies-Game"
        />
        <ProjectsCard
          title="Meme Generator"
          des="Create memes instantly by typing your own text. Built using a Meme API and React."
          src="/projects/meme.png"
          projLink="https://p8-meme-generator.netlify.app/"
          gitLink="https://github.com/Kabileshwaran183/P9-Meme-Generator"
        />
      </div>
    </section>
  );
};

export default Projects;
