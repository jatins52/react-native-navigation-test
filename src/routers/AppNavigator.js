import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const MainStackNavigator = createStackNavigator({
    Tab: {
        screen: TabNavigator,
        navigationOptions: ({
            title: 'Home'
        })
    }
}, {
    initialRouteName: 'Tab',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({
        headerStyle: {
            backgroundColor: 'purple'
        },
        headerTintColor: 'yellow'
    })
});

const AppContainer = createAppContainer(MainStackNavigator);

export default AppContainer;
