import Footer from "../Footer/Footer"
import './About.css'
import logo from '../../logo.svg';
const About = () => {
  return (

    <div className="bodyAbout">
      <div className="aboutContent">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>Ecommerce</h2>
        </div>
        <div className="aboutTitle2">
          <h1>¿Quienes Somos?</h1>
        </div>
        <div className="aboutText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolore tenetur neque similique voluptatibus voluptas expedita mollitia dolorem minima, fugiat veniam esse tempore nulla numquam consectetur quo veritatis, cupiditate quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, fuga adipisci pariatur minus libero amet alias ratione quos quae maxime nam, fugiat saepe perspiciatis quia totam itaque velit impedit optio.</p>
        </div>
        <div className="aboutTitle">
          <h1>¿Que ofrecemos?</h1>
        </div>
        <div className="aboutText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolore tenetur neque similique voluptatibus voluptas expedita mollitia dolorem minima, fugiat veniam esse tempore nulla numquam consectetur quo veritatis, cupiditate quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, fuga adipisci pariatur minus libero amet alias ratione quos quae maxime nam, fugiat saepe perspiciatis quia totam itaque velit impedit optio.</p>
        </div>
        <div className="aboutTitle">
          <h1>¿Cual es nuestra garantia?</h1>
        </div>
        <div className="aboutText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolore tenetur neque similique voluptatibus voluptas expedita mollitia dolorem minima, fugiat veniam esse tempore nulla numquam consectetur quo veritatis, cupiditate quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, fuga adipisci pariatur minus libero amet alias ratione quos quae maxime nam, fugiat saepe perspiciatis quia totam itaque velit impedit optio.</p>
        </div>
        <div className="sign">
          <p>Gracias por elegirnos. Ecommerce</p>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default About