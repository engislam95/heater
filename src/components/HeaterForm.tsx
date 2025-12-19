import React from "react";

type HeaterFormProps = {
  minTemp: number;
  maxTemp: number;
  targetTemp: number;
  size: number;
  onChange: (field: string, value: number) => void;
};

const HeaterForm: React.FC<HeaterFormProps> = ({
  minTemp,
  maxTemp,
  targetTemp,
  size,
  onChange,
}) => {
  return (
    <div className="max-w-md mx-auto mb-8 overflow-hidden ">
      <div className="p-8">
        <h2 className="mb-5 text-2xl font-bold text-white">
          Display the target temperature
        </h2>

        <form className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-2">
            <label className=" mb-1 font-medium text-white">
              Min Temperature (°C)
            </label>
            <input
              type="number"
              value={minTemp}
              onChange={(e) => onChange("minTemp", Number(e.target.value))}
              className="flex-1 px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="block mb-1 font-medium text-white">
              Max Temperature (°C)
            </label>
            <input
              type="number"
              value={maxTemp}
              onChange={(e) => onChange("maxTemp", Number(e.target.value))}
              className="flex-1 px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="block mb-1 font-medium text-white">
              Target Temperature (°C)
            </label>
            <input
              type="number"
              value={targetTemp}
              onChange={(e) => onChange("targetTemp", Number(e.target.value))}
              className="flex-1 px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="block mb-1 font-medium text-white">
              Gauge Size (px)
            </label>
            <input
              type="number"
              value={size}
              onChange={(e) => onChange("size", Number(e.target.value))}
              className="flex-1 px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaterForm;
