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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={verdura} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={huerta} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default HeroImage;