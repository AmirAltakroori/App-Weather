/**
 * Class that have all weather attributes
 */
export class WeatherComponent {

  private _id: number;
  private _city: string;
  private _temp: number;
  private _maxTemp: number;
  private _minTemp: number;
  private _main: string;
  private _description: string;
  private _icon: string;
  private _date: string;
  private _pressure: number;
  private _windSpeed: number;
  private _lon: number;
  private _lat: number;

  constructor() {

    this._city = "city";
    this._date = "date";
    this._description = "dis";
    this._icon = "10n";
    this._id = 0;
    this._lat = 0;
    this._lon = 0;
    this._main = "main";
    this._maxTemp = 0;
    this._minTemp = 0;
    this._pressure = 0;
    this._temp = 0;
    this._windSpeed = 0;

  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get city(): string {
    return this._city;
  }

  public set city(value: string) {
    this._city = value;
  }

  public get temp(): number {
    return this._temp;
  }

  public set temp(value: number) {
    this._temp = value;
  }

  public get maxTemp(): number {
    return this._maxTemp;
  }

  public set maxTemp(value: number) {
    this._maxTemp = value;
  }

  public get minTemp(): number {
    return this._minTemp;
  }

  public set minTemp(value: number) {
    this._minTemp = value;
  }

  public get main(): string {
    return this._main;
  }

  public set main(value: string) {
    this._main = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get icon(): string {
    return this._icon;
  }

  public set icon(value: string) {
    this._icon = value;
  }

  public get date(): string {
    return this._date;
  }

  public set date(value: string) {
    this._date = value;
  }

  public get pressure(): number {
    return this._pressure;
  }

  public set pressure(value: number) {
    this._pressure = value;
  }

  public get windSpeed(): number {
    return this._windSpeed;
  }

  public set windSpeed(value: number) {
    this._windSpeed = value;
  }

  public get lon(): number {
    return this._lon;
  }

  public set lon(value: number) {
    this._lon = value;
  }

  public get lat(): number {
    return this._lat;
  }

  public set lat(value: number) {
    this._lat = value;
  }

}
