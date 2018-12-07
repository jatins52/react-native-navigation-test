import { createBottomTabNavigator, NavigationActions } from "react-navigation";

import HomeTopTabNavigator from './HomeTopTabNavigator'

import BorrowHistoryContainer from '../containers/BorrowHistory';
import LendHistoryContainer from '../containers/LendHistory';
import ProfileContainer from '../containers/Profile';

export default createBottomTabNavigator({
    Home: {
        screen: HomeTopTabNavigator,
        navigationOptions: ({navigation}) => {
            return {
                tabBarOnPress: ({ navigation, defaultHandler }) => {
                    navigation.navigate('Back');
                    defaultHandler()
                }
            }
        }
    },
    BorrowHistory: {
        screen: BorrowHistoryContainer
    },
    LendHistory: {
        screen: LendHistoryContainer
    },
    Profile: {
        screen: ProfileContainer
    }
});