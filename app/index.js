import { useState } from 'react';

import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

import Menu from '../components/home/menu/Menu';

const Home = () => {
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState("");
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => {
        setMenuVisible(true);
      };
    
      const closeMenu = () => {
        setMenuVisible(false);
      };
    
      const handleLogout = () => {
        // Handle logout logic here
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" /> 
                        ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={openMenu} /> 
                        ),
                    headerTitle: "",
                }}
            />

            <Menu isVisible={menuVisible} onClose={closeMenu} onLogout={handleLogout} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if(searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;