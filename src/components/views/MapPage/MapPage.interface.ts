export type CoordName =
  | 'latitude'
  | 'longitude'
  | 'latitudeDelta'
  | 'longitudeDelta';

export interface IMapPageView {
  coord: Record<CoordName, number>;
}
