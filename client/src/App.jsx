import { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductChart from './components/ProductChart';
import ProductPopup from './components/ProductPopup'; // Novo componente
import axios from 'axios';
import './App.css';

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [detalheProduto, setDetalheProduto] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // Controle do popup

  const loadProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  useEffect(() => {
    loadProdutos();
  }, []);

  const handleSave = async (produto) => {
    if (produto.id) {
      await axios.put(`http://localhost:3001/produtos/${produto.id}`, produto);
    } else {
      await axios.post('http://localhost:3001/produtos', produto);
    }
    loadProdutos();
    setProdutoSelecionado(null);
  };

  const handleEdit = (produto) => {
    setProdutoSelecionado(produto);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/produtos/${id}`);
    loadProdutos();
  };

  const handleShowPopup = (produto) => {
    setDetalheProduto(produto);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setDetalheProduto(null);
  };

  return (
    <div className="container">
      <div className='titulo'>
      <h1>Gerenciamento de Produtos</h1>
      </div>
      <ProductChart produtos={produtos} />
      <ProductForm produto={produtoSelecionado} onSave={handleSave} />
      <ProductList produtos={produtos} onEdit={handleEdit} onDelete={handleDelete} onClickItem={handleShowPopup} />
      {showPopup && detalheProduto && <ProductPopup produto={detalheProduto} onClose={handleClosePopup} />}
    </div>
  );
};

export default App;
