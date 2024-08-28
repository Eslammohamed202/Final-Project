import Category from '../Category/Category';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import MainSlider from '../MainSlider/MainSlider';

export default function Home() {
  
  
  return (
    <div>
      <MainSlider></MainSlider>
      <Category />
      <FeaturedProduct></FeaturedProduct>
    </div>
  )
}