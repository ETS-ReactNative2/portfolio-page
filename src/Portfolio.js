import React, { Component } from 'react';


class Portfolio extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {   
                    id: 1, 
                    image:"Images/flat-calculator.png",
                    title:"Calculator",
                    description: "Use this basic calculator to perform addition, subtraction, multiplication, and division.",
                    link: "https://aesthetic-calculator.herokuapp.com/"
                },
                {
                    id: 2,
                    image:"Images/quote-machine-flat.png",
                    title:"Quote Machine",
                    description: "Press the button and receive a random inspirational or memorable quote delivered fresh from an API!",
                    link: "https://quote-machine-client.herokuapp.com/"
                },
                {
                    id: 3,
                    image:"Images/appli-logo.png",
                    title:"APPLi",
                    description: "This full-stack site lets users create, retrieve, update, and delete posts track their job application progess while looking for work. Built with Express, Passport.js, mySQL, and Material-UI.",
                    link: "https://appli-front.herokuapp.com/"
                },
                {
                    id: 4,
                    image:"Images/super.jpg",
                    title:"Excelsior",
                    description: "Search a custom MongoDB database for a variety of famous superheroes and villains. The site administrator can even upload and create new characters with a browser interface.",
                    link: "https://excelsior-front.herokuapp.com/"
                },
                {
                    id: 5,
                    image:"Images/illustration-list.png",
                    title:"The Greatest Redux List Ever",
                    description: "The project name may be hyperbole, but Redux is a much more effecient way to handle a central state in React. I'm glad I learned this powerful tool, and I'll be using it in any big React-based app in the future. Styled with Bootstrap.",
                    link: "https://redux-list.herokuapp.com/"
                }
            ],
            
        }

    }
    

    render() {

        const styles = {
            a: {
                textDecoration: "none"
            }
        }

        return (
            <div>
                <div >
                     <img className="page-logo" src="Images/portfolio-logo.png" alt="portfolio logo"/>
                </div>
                <section id="portfolio">
                    {this.state.projects.map(project=> {
                        return (
                            <div className="item" key={project.id.toString()}>
                                <a href={project.link} style={styles.a}>
                                    <img className="portfolio-img" alt="project representation" src={project.image} />
                                </a>
                                <a href={project.link} >
                                    <h3 className="title">{project.title}</h3>
                                </a>
                                <p className="page-description">{project.description}</p>      
                            </div>    
                        )
                    })}	         
                </section>		
            </div>
        );
        
    }
}

export default Portfolio;