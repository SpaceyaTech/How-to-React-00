import Header from "./components/Header";
import { useState } from "react";
const App = () => {
  const [firstName] = useState("Ian");
  const [secondName] = useState("John");
  return (
    <div>
      <Header firstName={firstName} />
      <div>Hello </div>
      <Header firstName={secondName} />
    </div>
  );
};

export default App;
