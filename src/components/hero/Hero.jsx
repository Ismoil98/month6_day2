import './Hero.scss';
import hiroImg from '../../../public/hiro.png'


function Hero() {
  return <div className='hero container'>
    <div className='content'>
      <h1>
      Quality cleaning for your home
      </h1>
      <p>
      Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
      </p>
      <div>
        <button>
          Get a free quote
        </button>
      </div>
    </div>
    <img src={hiroImg} alt="" />
  </div>;
}

export default Hero;
