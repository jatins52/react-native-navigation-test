import { createStackNavigator } from 'react-navigation';

import BorrowRequestAmountContainer from '../containers/BorrowRequestAmount';
import BorrowRequestTimeContainer from '../containers/BorrowRequestTime'

const BorrowRequestNavigator = createStackNavigator({

    Amount: {
        screen: BorrowRequestAmountContainer
    },
    Weeks: {
        screen: BorrowRequestTimeContainer
    }
},{
    initialRouteName:'Amount',
    headerMode: 'none',
    defaultNavigationOptions: {
        headerVisible: false
    }
});

export default BorrowRequestNavigator;