import Board from "./components/Board";


function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-[100vh] font-mono">

        <h1 className="text-center font-semibold text-4xl">Tic-Tac-Toe</h1>

        <Board />

    </div>
  );
}

export default App;
