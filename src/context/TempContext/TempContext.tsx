import { createContext, useReducer, useContext, useState } from "react";
import { TempContextType, IState } from "./types";

const initialState: IState = {
  locate: "Rio do Sul, SC",
  temp: {
    actual: 18,
    min: 16,
    max: 22,
  },
  wind: 17,
  humidity: 31,
  rainChance: 10,
  airQuality: {
    quality: "Bom",
    value: 21,
    pm25: 12.9,
    pm10: 12.9,
    so2: 2.1,
    no2: 1.4,
    o3: 21.2,
    co: 0.7,
  },
  forecast: [
    {
      day: "quinta",
      weather: "nublado",
      max: 21,
      min: 16,
    },
    {
      day: "sexta",
      weather: "sol",
      max: 28,
      min: 20,
    },
    {
      day: "sábado",
      weather: "chuva",
      max: 25,
      min: 21,
    },
    {
      day: "domingo",
      weather: "tempestade",
      max: 20,
      min: 14,
    },
    {
      day: "segunda",
      weather: "nuvens",
      max: 24,
      min: 18,
    },
  ]
}

const TempContext = createContext<TempContextType | null>(null);

export const TempProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, setState] = useState<IState>(initialState);

  return (
    <TempContext.Provider value={{ state, setState }}>
      {children}
    </TempContext.Provider>
  );
};

export const useTemp = () => {
  const context = useContext(TempContext);
  if (!context) throw new Error("useTemp must be used within a TempProvider");
  return context;
}