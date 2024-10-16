const ProductList = ({ produtos, onEdit, onDelete, onClickItem }) => {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id} onClick={() => onClickItem(produto)} className="product-item">
          <span>
            <strong>Produto:</strong> {produto.nome} <br />
            <strong>Unidades:</strong> {produto.quantidade} <br />
            <strong>Preço:</strong> R$ {produto.preco},00
          </span>
          <div className="buttons">
            <button className="edit" onClick={(e) => { e.stopPropagation(); onEdit(produto); }}>Editar</button>
            <button onClick={(e) => { e.stopPropagation(); onDelete(produto.id); }}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
