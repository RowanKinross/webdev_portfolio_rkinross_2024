import './about.css'
import Headshot from '/headshot.jpg'
import Leaf from '/leaf_drawing_dark.png'
import Home from '../Home/Home'

function About() {
  return (
    <div className='about '>
      <div className="container text-center flexColumn">
        <div className='row'>

          <Home></Home>



          <div className='aboutText'>
            <div className='flexColumn '>
              <img src={Headshot} alt="Headshot" className='headshot'/>
              <img src={Leaf} alt="leaf decoration" className='leaf'/>
            </div>
            <div className=' aboutMeText'>
              <h2>About Me</h2>
              <br></br>
              <p className='bio'>
              ~ My professional journey is driven by a diverse range of interests and hobbies that mirror my passion for technical thinking, creativity, people, and the dynamic world we inhabit. With a background in precision-design (BSc Architecture) and recent transition into Full-Stack Engineering, I am now specializing in Applied Data Science to tackle the urgent challenges of climate change and sustainability. I am particularly interested in how geospatial data and predictive modeling can improve our understanding of environmental impact.
              <br/>
              <br/>
              In my personal pursuits, I apply a careful hands-on logic to everything I do - whether it's the precision and skill involved in renovating my home or the use of statistical data to streamline operations as a Head Chef. I derive immense satisfaction from deciphering the mathematical patterns inherent in everyday life. My diverse interests converge in my affinity for software development, where I can translate these patterns into the logic of the programs I build.
              <br/>
              <br/>
              As technology evolves, I am focused on leveraging computational tools to drive meaningful progress. My goal is to use my versatility across software, design, and data to contribute to a more sustainable future, utilizing evidence-based insights to support social enterprise and environmental action.
              </p>
            </div>
          <div className='socials'>
            <a href="https://linkedin.com/in/rowan-kinross" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/RowanKinross" target="_blank" ><i className="fa-brands fa-github"></i></a>
            <a href="/RKinross_DataScience_CV_2026.pdf" target="_blank"><i className="fa-solid fa-file"></i></a>
            <a href='mailto:rowan.kinross@outlook.com'><i className="fa-solid fa-envelope"></i></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;