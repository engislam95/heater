import React from "react";

type HeaterTemperatureGaugeProps = {
  minTemp: number;
  maxTemp: number;
  targetTemp: number;
  size?: number;
};

const HeaterTemperature: React.FC<HeaterTemperatureGaugeProps> = ({
  minTemp,
  maxTemp,
  targetTemp,
  size = 180,
}) => {
  const clampedTarget = Math.min(Math.max(targetTemp, minTemp), maxTemp);

  const mapTempToAngle = (
    temp: number,
    minTemp: number,
    maxTemp: number,
    minAngle = -130,
    maxAngle = 130
  ): number => {
    
    // Clamp temperature to range
    const clamped = Math.min(Math.max(temp, minTemp), maxTemp);

    // Normalize temp to 0–1
    const ratio = (clamped - minTemp) / (maxTemp - minTemp);

    // Map to angle range
    return minAngle + ratio * (maxAngle - minAngle);
  };

  const targetAngle = mapTempToAngle(targetTemp, minTemp, maxTemp);

  return (
    <div className="flex flex-col items-center w-1/2">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Min marker */}
        <div className="absolute w-0.75 h-1/2 bg-gray-400 origin-bottom top-0 -rotate-130">
          <p className="-m-7 rotate-130 text-white">{minTemp} °C</p>
        </div>

        {/* Max marker */}
        <div className="absolute w-0.75 h-1/2 bg-gray-400 origin-bottom top-0 rotate-130">
          <p className="-m-7 text-right -rotate-130 text-white">{maxTemp} °C</p>
        </div>

        {/* Circle (clips inner part) */}
        <div
          className="relative rounded-full border-8 border-r-red-600 border-l-green-500 border-t-yellow-300 border-b-gray-300 bg-white overflow-hidden flex items-center justify-center"
          style={{ width: size * 0.85, height: size * 0.85 }}
        >
          {/* Target line */}
          <div
            className="absolute w-1 h-1/2 bg-gray-900 origin-bottom rounded-full top-0 left-1/2 "
            style={{ transform: `rotate(${targetAngle}deg)` }}
          />

          {/* Center dot */}
          <div className="w-4 h-4 bg-gray-900 rounded-full z-10" />
        </div>
      </div>

      {/* Target temperature text */}
      <div className="mt-2 text-3xl font-semibold text-white">
        {clampedTarget}°C
      </div>
    </div>
  );
};

export default HeaterTemperature;
