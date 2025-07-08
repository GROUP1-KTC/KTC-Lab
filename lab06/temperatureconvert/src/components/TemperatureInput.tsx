import React from "react";

type TemperatureInputProps = {
  label: string;
  unit: string;
  value: number;
  onChange: (value: string) => void;
};

const TemperatureInput: React.FC<TemperatureInputProps> = ({
  label,
  unit,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="flex text-black mb-1 justify-center font-bold">
        {label} ({unit})
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default TemperatureInput;
