import { DayVariation, Weather } from "../../context/TempContext/types"

export type ForecastProps = {
  day: DayVariation;
}

export type WeatherIcon = {
  [key in Weather]: string;
}