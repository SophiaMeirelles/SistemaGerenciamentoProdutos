const ProductDetail = ({ produto }) => (
    <div className="product-detail">
      <h3>{produto.nome}</h3>
      <p>Descrição: {produto.descricao}</p>
      <p>Preço: {produto.preco}</p>
      <p>Quantidade: {produto.quantidade}</p>
    </div>
  );
  
  export default ProductDetail;
  