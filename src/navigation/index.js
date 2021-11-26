import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AddNote from '../screen/AddNote'
import UpdateNote from '../screen/UpdateNote'

import ViewNote from '../screen/ViewNote'

const Stack = createStackNavigator({
    ViewNotes: {
        screen: ViewNote
    },
    AddNote: {
        screen: AddNote
    },
    UpdateNote: {
        screen: UpdateNote
    }
},
{
    initialRouteName: "ViewNotes",
    headerMode: 'none'
}
)

export default createAppContainer(Stack)

