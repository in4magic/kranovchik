import {Loads} from "./Loads";

export class Smena {
  id?: number;
  FIO: string;
  startDate: Date;
  endDate: Date;
  tapTypeSingle?: boolean;
  loading?: Loads;
  totalLoad: number;
  totalUpload?: number;

  constructor(id: number,
              FIO: string,
              startDate: Date,
              endDate: Date,
              tapTypeSingle: boolean,
              loading: Loads,
              totalLoad: number,
              totalUpload: number
  ) {
    this.id = id;
    this.FIO = FIO;
    this.startDate = startDate;
    this.endDate = endDate;
    this.tapTypeSingle = tapTypeSingle;
    this.loading = loading;
    this.totalLoad = totalLoad;
    this.totalUpload = totalUpload;
  }
}
