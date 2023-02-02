import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../App';
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'bottomNav'
>;

export interface IMainPage {
  navigation: ProfileScreenNavigationProp;
}

export interface IUser {
  email: string | undefined;
}
