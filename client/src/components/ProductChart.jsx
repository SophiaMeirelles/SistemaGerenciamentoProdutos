import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductChart = ({ produtos }) => {
  const precoData = {
    labels: ['Menos de R$50', 'R$50 a R$100', 'R$100 a R$200', 'Mais de R$200'],
    datasets: [
      {
        label: 'Distribuição por Preço',
        data: [
          produtos.filter(produto => produto.preco < 50).length,
          produtos.filter(produto => produto.preco >= 50 && produto.preco < 100).length,
          produtos.filter(produto => produto.preco >= 100 && produto.preco < 200).length,
          produtos.filter(produto => produto.preco >= 200).length,
        ],
        backgroundColor: 'rgba(39, 88, 245, 0.8)',
      },
      {
        label: 'Distribuição por Quantidade',
        data: [
          produtos.filter(produto => produto.preco < 50).reduce((acc, produto) => acc + produto.quantidade, 0),
          produtos.filter(produto => produto.preco >= 50 && produto.preco < 100).reduce((acc, produto) => acc + produto.quantidade, 0),
          produtos.filter(produto => produto.preco >= 100 && produto.preco < 200).reduce((acc, produto) => acc + produto.quantidade, 0),
          produtos.filter(produto => produto.preco >= 200).reduce((acc, produto) => acc + produto.quantidade, 0),
        ],
        backgroundColor: 'rgba(111, 21, 174, 0.9)',
      },
    ],
  };
  // amei esse trem de gráfico sandrinha
  return (
    <div>
      <Bar data={precoData} />
    </div>
  );
};

export default ProductChart;
