import {StackNavigator,TabNavigator } from 'react-navigation';
import table from '../../screen/table';
import cs from '../../screen/cs';
import it from '../../screen/it';
import se from '../../screen/se';
import MainScreen from '../../screen/MainScreen';


const mytab=TabNavigator
(
    {
    cs:{screen:cs},
    it:{screen:it},
    se:{screen:se},
    },
        { 
        animationEnabled:true,
        tabBarPosition:'top',
        },
);
export default AppNavigator= StackNavigator
({
    MainScreen:{screen:MainScreen},
    mytab:{screen:mytab},
})
