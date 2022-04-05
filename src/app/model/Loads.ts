import {tapType} from "./TapType";

export class loads {
  truckNames: string[];
  loaded?: number;
  uploaded?: number;


  constructor( tapType: tapType, truckNames: string[], loaded: number,  uploaded: number) {
    this.truckNames = truckNames;
    this.loaded = loaded;
    this.uploaded = uploaded;

  }
}
