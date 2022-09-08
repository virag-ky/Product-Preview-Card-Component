import './App.css';
import Card from './Card';

const App = () => {
  return (
    <div className="App">
      <Card />
      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/virag-ky"
          target="_blank"
          rel="noopener noreferrer"
        >
          Virag Kormoczy
        </a>
        .
      </div>
    </div>
  );
};

export default App;
