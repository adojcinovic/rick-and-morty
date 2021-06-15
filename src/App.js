import { useState } from 'react';
import { Header } from './Header/Header'
import { List } from './List/List'
import { Card } from './Card/Card'
import './App.css';

function App() {
  const [id, setId] = useState(null);



  return (
    <div className="App">
      <Header />
      {!id && <List onIdChange={setId} />}
      {id && <Card id={id} />}
    </div>
  );
}

export default App;
