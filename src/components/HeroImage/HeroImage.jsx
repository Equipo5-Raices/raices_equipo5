import Carousel from 'react-bootstrap/Carousel';
import './HeroImage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import quesos from '../../assets/quesos.png';
import huerta from '../../assets/huerta.png';
import verdura from '../../assets/verdura.png'



function HeroImage() {
  return (
    <Carousel className="responsive-carousel">
      <Carousel.Item>
        <img 
        src={quesos}
        alt= "viva el queso!" />
        <Carousel.Caption>
          <h3>Quesos de Galicia</h3>
          <p>¡Prueba las cuatro denominaciones de origen!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={verdura} />
        <Carousel.Caption>
          <h3>Venta de verduras imperfectas</h3>
          <p>Damos una segunda oportunidad a todo alimento rechazado por las grandes superfícies</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={huerta} />
        <Carousel.Caption>
          <h3>De la tierra a tu casa</h3>
          <p>Colaboramos con los pequeños agricultores y artesanos para vender sus productos KM0</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default HeroImage;