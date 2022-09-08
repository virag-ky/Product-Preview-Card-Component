import './App.css';
import Card from './Card';

const App = () => {
  return (
    <div className="App">
      <Card />
      <div className="attribution">
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{' '}
          <a
            href="https://github.com/virag-ky"
            target="_blank"
            rel="noopener noreferrer"
          >
            Virag Kormoczy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default App;
