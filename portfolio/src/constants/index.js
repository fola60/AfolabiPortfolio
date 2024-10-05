import fyp1 from "../assets/fyp1.png"
import syd1 from "../assets/syd1.png"
import ppg2 from "../assets/ppp2.png"
export const HERO_CONTENT = `I'm an full-stack developer currently studying computer science infrastructure at the Technological University of Dublin. I have focused mainly on frontend frameworks like React and backend technologies like Postgresql, Nodejs, Expressjs and Springboot. I love learning the details of how things work and building exciting projects.`



export const ABOUT_TEXT = `I’m a passionate full-stack developer currently pursuing a degree in Computer Science Infrastructure at the Technological University of Dublin. My focus has been on mastering both frontend and backend technologies. On the frontend, I work primarily with React, creating dynamic and responsive user interfaces. On the backend, I have experience with PostgreSQL, Node.js, Express.js, and Spring Boot to build scalable and efficient applications.

I have a deep curiosity for understanding how systems work and enjoy diving into the details. Whether it's troubleshooting code or building something from scratch, I thrive on learning new skills and pushing myself to take on exciting projects.`

export const PROJECTS = [
    {
        title: "FindYourPlayer",
        image: fyp1,
        description: "This project is a tool for football enthusiasts and analysts. It allows users to search for their desired player within europe's top 5 leagues and view percentile statistics and graphs on the player. You can also find new exciting players by searching for players by attributes such as chances created, defending, ball retention etc.",
        technologies: ["HTML", "CSS", "React", "Express.js","Postgresql"],
        link: "https://findyourplayers.xyz"
    },
    {
        title: "ScoreYourDay",
        image: syd1,
        description: "This project is a tool for students, or anyone to keep track of, not only their tasks but the progress they have made in each of their tasks. It provides users with a simple and friendly UI and easy to use components. You can also dynamically make tasks for each day of the week, month or year. As well as providing analytics on what days, weeks and months the user performs well on and doesnt perform well. The implementation of a test score rating motivates users to maintain a high score each day by completing each of their tasks with a 100% score.",
        technologies: ["HTML", "CSS", "React", "Springboot","Postgresql"],
        link: "https://scoreyourday.xyz"
    },
    {
        title: "Predict Prem Games",
        image: ppg2,
        description: "This project is a tool for football analysts and enthusiats to gather data on football teams and football match results, and to see predictions made based on data points. This can be used to see what statistics affect match outcomes the most.",
        technologies: ["Python", "SciKitLearn","BeautifulSoup"],
    }



]

export const CONTACT = {
    address: "Dublin, Ireland",
    email: "afolabiadekanle@gmail.com",
    phone: "0857313407",
    linkedin: "https://www.linkedin.com/in/afolabi-adekanle-68428b1b6/",
    github: "https://github.com/fola60"
}