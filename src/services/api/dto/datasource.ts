export enum AvailableDatasources {
  canvas = "canvas",
}

export interface BaseDatasource {
  name: AvailableDatasources;
  token: string;
}

export interface CanvasDatasource extends BaseDatasource {}
