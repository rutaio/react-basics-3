// priimamas product yra objektas:
// product = {name: 'Iphone 15', isOnSale = true}

export const Product = ({product}) => {

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.isOnSale ? 'Siuo metu yra akcija!' : ''}</p>
    </div>
  );
};
