import cls from './MyCarousel.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Slide {
  id: number;
  image: string;
}

interface MyCarouselProps {
  slides: Slide[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

export const MyCarousel = (props: MyCarouselProps) => {
  const {
    slides
  } = props;

  return (
    <div className={cls.Carousel}>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        
      >
        {slides.map(slide => (
          <div key={slide.id} className={cls.slide}>
            <img src={slide.image} alt="Screenshot" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}