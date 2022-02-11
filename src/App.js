import Cuisines from './components/food_and_restaurant/Cuisines';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Cuisines />
    </div>
  );
}

export default App;
