import './App.css';

const fruit = [
  {
    name : "apple",
    color : 'red',
    price : "120",
  },
  {
    name: "banana",
    color: 'yellow',
    price: "200",
  },
  {
    name: "melon",
    color: 'green',
    price: "900",
  },
]


function App() {
  return (
  <div>
    {fruit.map(fruit => {
      return (
        <h2>fruit.name<h2/>
        <p>fruit.color<p/>
        <p>fruit.price<p/>
      )
    }) 

    }
    
  </div>
  );
}

export default App;
