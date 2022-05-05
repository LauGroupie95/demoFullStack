import Welcome from './components/Welcome';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState<string>("")

  useEffect(() => {
    axios
      .get('http://localhost:5555/welcome')
      .then(response => {
        console.log(`received answer ${response.data}`)
        setName(response.data)
      })
  }, [])


  return (
    <div className="App">
      <Welcome name={name} />
    </div>
  );
}
export default App;
