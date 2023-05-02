import "./App.css";

const array = [1, 2, 3, 4, 5];

const App = () => {
  return (
    <div>
      {array.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </div>
  );
};

export default App;
// const fruit = [
//   {
//     id: 1,
//     name: "apple",
//     color: "red",
//     price: "120",
//   },
//   {
//     id: 2,
//     name: "banana",
//     color: "yellow",
//     price: "200",
//   },
//   {
//     id: 3,
//     name: "melon",
//     color: "green",
//     price: "900",
//   },
// ];

// function App() {
//   return (
//     <div className="container" key={fruit.id}>
//       {fruit.map((fruit) => {
//         return (
//           <div className="fruit" key={fruit.id}>
//             <h2>{fruit.name}</h2>
//             <p>{fruit.color}</p>
//             <p>{fruit.price}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
