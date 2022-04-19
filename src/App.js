import logo from './logo.svg';
import './App.css';
import { Button } from "./componetns/Button"

function App() {
  return (
    <div className="App">
     <div className='btn'>
     <Button background={'blue'} borders = {'none'} color={'white'}>Primary button</Button>
      <Button background={'whitesmoke'} borders = {'1px solid black'}>Default Button</Button>
      <Button background={'whitesmoke'} borders = {'2px dashed grey'}>Dashed Button</Button>
     </div>
    </div>
  );
}

export default App;
