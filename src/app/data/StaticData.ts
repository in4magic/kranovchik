// тестовые данные в виде массивов (заменяют таблицы БД)

import {Smena} from "../model/Smena";

export class StaticData {
  //public halloween = moment([2011, 9, 31]);
  public startDate = new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00
  public endtDate = new Date(2012, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00

  static allShifts: Smena[] = [
    {
      id: 1,
      FIO: 'Иванов И.П.',
      startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
      endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
      tapTypeSingle: true,
      totalLoad: 20
     },
    {
      id: 2,
      FIO: 'Иванов И.B.',
      startDate: new Date(2011, 0, 1, 0, 0, 0, 0),
      endDate: new Date(2011, 0, 1, 0, 0, 0, 0),
      tapTypeSingle: false,
      totalLoad: 30
    },
  ];


 /* static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень срочно!!', color: '#F1128D'}
  ];


  // не забывать - индексация приоритетов и категорий начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10')
    }

  ];*/

}

