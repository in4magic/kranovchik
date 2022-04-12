import {tapType} from "./TapType";

export class Loads {
  truckName?: string;
  loaded: number;
  uploaded: number;

  constructor( tapType: tapType, truckName: string, loaded: number,  uploaded: number) {

    this.truckName = truckName;
    this.loaded = loaded;
    this.uploaded = uploaded;

  }
}
