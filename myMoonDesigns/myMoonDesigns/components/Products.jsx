import "../src/App.css";
{/* eslint-disable-next-line react/prop-types*/}
export function Products({ products }) {
  return (
    <main className="portfolio">
      <ul className="portfolio-gallery-1">
        {/* eslint-disable-next-line react/prop-types*/}
        {products.map((product) => (
          <li className="portfolio-item" key={product.id}>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}
