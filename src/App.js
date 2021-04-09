
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Time from './components/Time/Time';
import Foot from './components/Footer/Foot';


// import '';
function App() {

  return (
    <div className="bg">
      <Navbar />
      <Time time="343" quote="helloooooooo" />
      <Foot />

    </div>
  );
}

export default App;
