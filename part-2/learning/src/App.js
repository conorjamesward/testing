import {useState} from 'react';

function App() {

  const [goodBoy, setGoodBoy] = useState(null)

  const getGoodBoy = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setGoodBoy(data.message));
  }

  return (
    <div className="App">
      {goodBoy && <img src={goodBoy} alt="Good Boy"/>}
      <button onClick={getGoodBoy}>Get Good Boy</button>
    </div>
  );
}

export default App;
