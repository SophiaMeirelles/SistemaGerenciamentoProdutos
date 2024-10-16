const ProductPopup = ({ produto, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{produto.nome}</h2>
        <p><strong>Preço:</strong> R${produto.preco.toFixed(2)}</p>
        <p><strong>Quantidade:</strong> {produto.quantidade}</p>
        <p><strong>Descrição:</strong> {produto.descricao}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ProductPopup;
