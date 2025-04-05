import ProjectsCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
    return (
        <section
        id="projects"
        className="w-full py-20 border-b-[1px] border-b-black scroll-mt-[100px]"
    >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            <ProjectsCard
                    title="Natarajan and co - Ultratech Building solutions"
                    des="A realtime react project to showup the Landing page for that business."
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
                    des="Get Recipes of your favourite food items by providing only the ingredients list. The hugging face API is used to get the recipes."
                    src="/projects/Recipeapp.png"
                    projLink="https://p5-recipe-app.netlify.app/"
                    gitLink="https://github.com/Kabileshwaran183/P5-Recipe-App"
                />
                <ProjectsCard
                    title="Assembly Endgame - word finder"
                    des="A word finder game where you have to find the words from the given grid of alphabets.If you enter as wrong guessing then you lost 1 life. The game is built using React."
                    src="/projects/endgame.png"
                    projLink="https://assembly-endgame-react.netlify.app/"
                    gitLink="https://github.com/Kabileshwaran183/Assembly-EndGame"
                />
                <ProjectsCard
                    title="Tenzies - Roll the dice"
                    des="Roll the dice untill all the dice are in the same number. The game is built using React."
                    src="/projects/tenzies.png"
                    projLink="https://tenzies-game-prjct.netlify.app/"
                    gitLink="https://github.com/Kabileshwaran183/Tenzies-Game"
                />
                <ProjectsCard
                    title="Meme Generator"
                    des="A quick way to create memes - providing the text and generate random image. Random image is generated using the Meme API."
                    src="/projects/meme.png"
                    projLink="https://p8-meme-generator.netlify.app/"
                    gitLink="https://github.com/Kabileshwaran183/P9-Meme-Generator"
                />
            </div>
        </section>
    );
}

export default Projects