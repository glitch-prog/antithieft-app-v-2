import {DocumentData} from 'firebase/firestore';

export interface IMarkerView {
  obj: Record<'data', string> | DocumentData | undefined;
}
