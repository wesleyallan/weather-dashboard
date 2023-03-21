import { SetStateAction } from "react";

type Day =  "domingo" | "segunda" | "terça" | "quarta" | "quinta" | "sexta" | "sábado";
export type Weather = "sol" | "chuva" | "nuvens" | "tempestade" | "nublado";

type Temp = {
  actual: number;
  min: number;
  max: number;
}

export type AirQuality = {
  quality: string;
  value: number;
  pm25: number;
  pm10: number;
  so2: number;
  no2: number;
  o3: number;
  co: number;
}

export type DayVariation = {
  day: Day;
  weather: Weather;
  max: number;
  min: number;
}

export interface IState {
  locate: string;
  temp: Temp;
  wind: number;
  humidity: number;
  rainChance: number;
  airQuality: AirQuality;
  forecast: DayVariation[];
}

export type TempContextType = {
  state: IState,
  setState: React.Dispatch<SetStateAction<IState>>,
}