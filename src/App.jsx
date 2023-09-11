import './App.css'
import Team from './Team';
import Counter from './counter';
import Friends from './friends';
import Users from './users';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
<Team></Team>
<Counter></Counter>
<Users></Users>
<Friends></Friends>
     

      <button onClick={handleClick}>Click me</button>

      <button onClick={handleClick2}>Click2</button>

      {/* anonimas function bole nicher take */}
      <button onClick={() => { alert('third clicked') }}>third</button>

      <button onClick={() => addToFive(5)}>Four</button>
    </>
  )
}

export default App
