import './home.css'
import illustration from '/bike_drawing.png'

function Home() {
  return (
    <div className='home'>
      <div className="imgContainer text-center">
        <div className='brandStatement'>
              <img src={illustration} className='illustration'>
              </img>
              <div className='alignLeft'>
                <h2 className="typingTitle">// JUNIOR FULL-STACK DEVELOPER</h2>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Home;