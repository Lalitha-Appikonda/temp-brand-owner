import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" }
  ];

  return (
    <div>
      <h2>product list</h2>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

         
          <button onClick={() => navigate(`/product/${item.id}`)}>
            View
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList;