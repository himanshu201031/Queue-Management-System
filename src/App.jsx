import Queueform from "./components/Queueform";
import "./App.css";
import { useState } from "react";
import Queuedisplay from "./components/Queuedisplay";
function App() {
  const [queue, setqueue] = useState([]);

  const addToqueue = (customer) => {
    setqueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (Id, newStatus) => {
    setqueue(
      queue.map((customer) =>
        customer.id === Id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };
  const removeFromqueue = (Id) => {
    setqueue(queue.filter((customer) => customer.id !== Id));
  };

  return (
    <>
      <header>
        <h1>Queue Management System</h1>
        <p>Welcome to the Queue Management System application!</p>
      </header>
      <main>
        <Queueform onAdd={addToqueue} />
        <Queuedisplay   
        queue={queue} 
        onUpdateStatus={updateStatus} 
        onRemove={removeFromqueue}
        />
      </main>
    </>
  );
}

export default App;
