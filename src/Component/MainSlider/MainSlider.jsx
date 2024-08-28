import Slider from 'react-slick';
import MainImage from '../../assets/images/slider-image-1.jpeg'
import img1 from '../../assets/images/slider-image-2.jpeg'
import img2 from '../../assets/images/slider-image-3.jpeg'


export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };


    return (
        <div className='row my-5'>
            <div className="w-2/3">
                <Slider {...settings}>
                    <img className='w-full h-[400px]' src={MainImage} alt="" />
                    <img className='w-full h-[400px]' src={MainImage} alt="" />
                    <img className='w-full h-[400px]' src={MainImage} alt="" />
                </Slider>
            </div>
            <div className="w-1/3">
                <img className='w-full h-[200px]' src={img1} alt="" />
                <img className='w-full h-[200px]' src={img2} alt="" />
            </div>
        </div>
    )
}
