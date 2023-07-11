import { Products } from "../../components/Products";
import { products } from "../../media/products.json";

export function Gallery() {
  return (
    <div className='main' name='gallery'>
      <h2>Nuestros trabajos</h2> 
      <Products products={products} />
    </div>
  )
}

export default Gallery