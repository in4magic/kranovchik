import {Smena} from "../model/Smena";
import {InMemoryDbService, RequestInfo} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

export class StaticData implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let allShifts: Smena[] = [
      {
        id: 1,
        FIO: 'Иванов В.В.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: true,
        totalLoad: 20
      },
      {
        id: 2,
        FIO: 'Петров Б.Б.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: false,
        totalLoad: 30
      },
      {
        id: 3,
        FIO: 'Иванов В.В.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: true,
        totalLoad: 20
      },
      {
        id: 4,
        FIO: 'Петров Б.Б.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: false,
        totalLoad: 30
      },
      {
        id: 5,
        FIO: 'Иванов В.В.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: true,
        totalLoad: 20
      },
      {
        id: 4,
        FIO: 'Петров Б.Б.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: false,
        totalLoad: 30
      },
      {
        id: 5,
        FIO: 'Иванов В.В.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: true,
        totalLoad: 20
      },
      {
        id: 6,
        FIO: 'Петров Б.Б.',
        startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
        tapTypeSingle: false,
        totalLoad: 30
      }
    ];
    return {allShifts};
  }

}

