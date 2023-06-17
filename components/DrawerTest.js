import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import MainMenu from "./MainMenu";

const Main = () => <MainMenu />;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const DrawerTest = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'main', title: 'Start', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        main: Main,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default DrawerTest;
