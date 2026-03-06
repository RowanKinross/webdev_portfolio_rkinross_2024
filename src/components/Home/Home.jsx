import './home.css'
import illustration from '/bike_drawing.png'

function Home() {
  return (
    <div className='home'>
      <div className="imgContainer text-center">
        <div className='brandStatement'>
              {/* <img src={illustration} className='illustration'>
              </img> */}
              <div className='alignLeft'>
                <h2 className="typingTitle">// FULL-STACK DEVELOPER & ARCHITECTURAL DESIGNER </h2>
              </div>
              <p>Transitioning Technical Expertise into Climate Action</p>
        </div>
      </div>
    </div>
  )
}

export default Home;