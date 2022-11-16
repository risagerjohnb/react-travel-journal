import './App.css';
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import data from "./data"

function App() {
  const contents = data.map(item => {
    return (
      <Content 
            key={item.id}
            item={item}
      />
    )
  })
  return (
    <>
    <Navbar />
    {contents}
    </>
  );
}

export default App;