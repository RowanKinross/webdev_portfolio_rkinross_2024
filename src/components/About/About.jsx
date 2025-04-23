import './about.css'
import Headshot from '/headshot.jpg'
import Leaf from '/leaf_drawing.png'
import Home from '../Home/Home'

function About() {
  return (
    <div className='about'>
      <div className="container text-center">
        <div className='row'>

          <Home></Home>



          <div className='aboutText'>
            <div className='flexColumn'>
              <img src={Headshot} alt="Headshot" className='headshot'/>
              <img src={Leaf} alt="leaf decoration" className='leaf'/>
            </div>
            <div className='px-5 aboutMeText'>
              <h2>About Me</h2>
              <br></br>
              <p className='bio'>
              ~ My professional journey is driven by a diverse range of interests and hobbies that mirror my passion for creativity, people, and the dynamic world we inhabit. I have recently graduated from a bootcamp in Front-End Web Development, with edX and in partnership with University of Birmingham. I have a precision-design background, obtaining a BSc in Architecture with International Study from Strathclyde University. My philosophy is inspired by the arts and crafts movement, where art can be both accessible and functional. Observing the impact of good quality accessible design fueled my pursuit of Architecture and continues to drive me as I switch careers. <br/><br/>
              In my personal pursuits, I find joy in hosting dinner parties where I can showcase my culinary creations and foster meaningful connections with friends and family. Taking a hands-on approach to my living space, I've undertaken projects involving structural modifications, such as removing walls, constructing staircases, crafting and painting much of my home's interior. I have a holistic approach to well-being. I enjoy cycling, running and have a keen interest in nutrition. These diverse interests converge in my affinity for web development where I can problem solve and utilise my skills to aid positively impactful well-being projects. I derive immense satisfaction from deciphering the mathematics and patterns inherent in everyday life and, by virtue, the programs I write. <br/><br/>
              As technology evolves, I am enthusiastic about adapting and acquiring new skills on the job. I see front-end development not just as a career but as a dynamic avenue for exploration and growth. I am driven by a belief that web development and technology can be powerful tools for positive change, particularly for charitable organisations and social enterprise. My goal is to contribute to a future where technology serves as a catalyst for meaningful progress, and I am eager to make a tangible impact in this realm.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;