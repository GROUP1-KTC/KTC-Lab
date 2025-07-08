import { useState } from "react";
import TemperatureInput from "./components/TemperatureInput";

const App = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [kelvin, setKelvin] = useState(273.15);

  const round = (num: number) => Math.round(num * 100) / 100;

  const handleCelsiusChange = (value: string) => {
    const c = parseFloat(value);
    if (isNaN(c)) return;
    setCelsius(c);
    setFahrenheit(round((c * 9) / 5 + 32));
    setKelvin(round(c + 273.15));
  };

  const handleFahrenheitChange = (value: string) => {
    const f = parseFloat(value);
    if (isNaN(f)) return;
    setFahrenheit(f);
    const c = ((f - 32) * 5) / 9;
    setCelsius(round(c));
    setKelvin(round(c + 273.15));
  };

  const handleKelvinChange = (value: string) => {
    const k = parseFloat(value);
    if (isNaN(k)) return;
    setKelvin(k);
    const c = k - 273.15;
    setCelsius(round(c));
    setFahrenheit(round((c * 9) / 5 + 32));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-[450px]">
        <h1 className="text-2xl font-bold mb-6">Temperature Converter</h1>
        <div className="flex gap-4 justify-center">
          <TemperatureInput
            label="Celsius"
            unit="°C"
            value={celsius}
            onChange={handleCelsiusChange}
          />
          <TemperatureInput
            label="Fahrenheit"
            unit="°F"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
          <TemperatureInput
            label="Kelvin"
            unit="°K"
            value={kelvin}
            onChange={handleKelvinChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
