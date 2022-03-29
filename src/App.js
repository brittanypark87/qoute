import './App.css';
import Header from "./components/header"
import JSX from "./components/pcclesson1"
import QuoteGenerator from "./components/quoteGenerator"
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        
        <QuoteGenerator />
      </div>
    </div>
  );
}

export default App;
