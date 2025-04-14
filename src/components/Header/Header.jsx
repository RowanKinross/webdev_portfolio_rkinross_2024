import './header.css'
import NavToggle from '../NavToggle/NavToggle';
import headerImg from '/rowan-branch-long.png'

function Header() {
  return (
    <header className='header'>
      <div className='headerContainer'>
        <h1>
        // ROWAN KINROSS
        </h1>
        <NavToggle />
      </div>
    </header>
  );
}

export default Header;