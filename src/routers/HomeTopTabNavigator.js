import { createMaterialTopTabNavigator, StackActions, NavigationActions } from "react-navigation";

// import BorrowContainer from "../containers/Borrow";
import BackContainer from "../containers/Back";
import BorrowRequestNavigator from './BorrowRequestNavigator';

HomeTopTabNavigator = createMaterialTopTabNavigator({
    Back: {
        screen: BackContainer
    },
    Borrow: {
        screen: BorrowRequestNavigator,
        navigationOptions: ({navigation, focused}) => {
            return {
                tabBarOnPress: ({ navigation, defaultHandler }) => {
                    if(!focused){
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Amount' })],
                          });
                          navigation.dispatch(resetAction);
                    }
                    //navigation.navigate('Back');
                    defaultHandler()
                }
            }
        }
    }
});

export default HomeTopTabNavigator;