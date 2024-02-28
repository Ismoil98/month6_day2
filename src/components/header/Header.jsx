import './Header.scss';
import logoSite from '../../../public/logo_site.png'

function Header() {
  return <div className='header container'>
    <a href="#">
      <img src={logoSite} alt="" />
    </a>
    <ul className=''>
      <li className="item">
        <a href="#">
          Home
        </a>
      </li>
      <li className="item">
        <a href="#">
          About
        </a>
      </li>
      <li className="item">
        <a href="#">
          Services
        </a>
      </li>
      <li className="item">
        <a href="#">
          Articles
        </a>
      </li>
      <li className="item">
        <a href="#">
          Contact
        </a>
      </li>
    </ul>
    <a href="#">
      Card(0)
    </a>
    <button>
      Get a free quote
    </button>
  </div>;
}

export default Header;
