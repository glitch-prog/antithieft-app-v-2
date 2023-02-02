import {DocumentData, Timestamp} from '@firebase/firestore';
import {TFunction} from 'i18next';

export interface IItem {
  user: string;
  action: string;
  time: Timestamp;
}

export interface IHistoryListItem {
  t: TFunction<'translation', undefined, 'translation'>;
  item: IItem | DocumentData;
}

export interface IHistoryPageView {
  history: IItem[] | DocumentData[] | [];
}
