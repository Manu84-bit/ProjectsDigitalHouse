

export const ProductDetails = ({ title, price, thumbnail, available_quantity, condition, closeProductDetail, marca}) => {

  return (
    <div className="modal">
      <h4>Product Details</h4>

      <div className="product-content">
        <div className="cart-header">
          <h3>{title}</h3>
          <button id="close-cart" onClick={closeProductDetail}>
            x
          </button>
        </div>

        <img src={thumbnail} alt={title} />
        <h4>Precio unitario ${price}</h4>
        <h4>Marca: {marca}</h4>
        <h4>Unidades disponibles: {available_quantity}</h4>
        <h4>Estado: {condition}</h4>
      </div>
    </div>
  );
};