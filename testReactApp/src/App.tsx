//Button Alert code - figured out how to add close button to alert, but could not figure out making the close button work and making the alert show up and dissapear
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>ALERT!</Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          Button Test
        </Button>
      </div>
    </>
  );
}

export default App;

//MICAHBUTTON CODE
/*
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Button Test
      </Button>
    </div>
  );
}

export default App;
*/

//ALERT CODE
/*
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;
*/

// LISTGROUP CODE
/* 
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Berlin", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
*/
