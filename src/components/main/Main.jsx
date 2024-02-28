import './Main.scss';
import aboutImh1 from '../../../public/about1.png'
import aboutImh2 from '../../../public/about2.png'
import aboutImh3 from '../../../public/about3.png'


function Main() {
  return <div className='main'>
    <div className='about container'>
      <h2 className='about_title'>
        About Us
      </h2>
      <p className='about_info'>
        Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.
      </p>
      <ul className='about_list'>
        <li className="about_item">
          <img src={aboutImh1} alt="" />
          <h3>
            1. Schedule online
          </h3>
          <p>
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
          </p>
        </li>
        <li className="about_item">
          <img src={aboutImh2} alt="" />
          <h3>
            2. Pay online easily
          </h3>
          <p>
            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
          </p>
        </li>
        <li className="about_item">
          <img src={aboutImh3} alt="" />
          <h3>
            3. Get your house cleaned
          </h3>
          <p>
            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.
          </p>
        </li>
      </ul>
    </div>
  </div>;
}

export default Main;
