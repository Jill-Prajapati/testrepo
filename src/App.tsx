import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const[alertVisible,setALertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setALertVisibility(false)}>My Alert</Alert>}
      <Button color='primary' onClick={() => setALertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
