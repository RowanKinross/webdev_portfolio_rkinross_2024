import './home.css'
import illustration from '/bike_drawing_draft.png'

function Home() {
  return (
    <div className='home'>
      <div className="container text-center">
        <div className='row'>
          <div className='p-5 brandStatement'>
              <img src={illustration} className='illustration'>
              </img>
              <p className='statement'>
                ~ Junior Front-End Developer, UK | Seeking opportunities in the charity & social enterprise sector
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;