import { useState } from "react";
import HeaterForm from "./components/HeaterForm";
import HeaterTemperature from "./components/Heater";

const App = () => {
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(100);
  const [targetTemp, setTargetTemp] = useState(60);
  const [size, setSize] = useState(300);

  const handleChange = (field: string, value: number) => {
    switch (field) {
      case "minTemp":
        setMinTemp(value);
        break;
      case "maxTemp":
        setMaxTemp(value);
        break;
      case "targetTemp":
        setTargetTemp(value);
        break;
      case "size":
        setSize(value);
        break;
    }
  };

  return (
    <div className="flex md:flex-row flex-col-reverse  items-center mt-10 justify-between w-[80%] mx-auto bg-gray-900 rounded-lg shadow-lg">
      <HeaterForm
        minTemp={minTemp}
        maxTemp={maxTemp}
        targetTemp={targetTemp}
        size={size}
        onChange={handleChange}
      />

      <HeaterTemperature
        minTemp={minTemp}
        maxTemp={maxTemp}
        targetTemp={targetTemp}
        size={size}
      />
    </div>
  );
};

export default App;
