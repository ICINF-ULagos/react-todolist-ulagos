import HomeScreen from './screens/home/home'
import './App.css';
import Taskboard from './screens/home/taskboard/Taskboard';

function App() {

  return (
    <div className="App">
      <HomeScreen />
      <Taskboard />
    </div>
  );
}

export default App;