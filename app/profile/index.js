import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { COLORS, icons, SIZES, images } from "../../constants";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../../components";

import { checkImageURL } from "../../utils";

const ProfileScreen = () => {

    const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <View style={styles.container}>
      <Image 
          source={{ 
            uri:  'https://d33wubrfki0l68.cloudfront.net/b58b4086e25febc9a4a1e7c1a015850e8031ea3b/6061d/images/risto.webp'
          }}
         style={styles.logo}
         resizeMode="cover"
        />
        <Text style={styles.heading}>Ricoboy</Text>
        <Text style={styles.text}>Web Developer at vDisain</Text>
        {/* Add your profile content here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 130,
    borderRadius: 15,
    marginBottom: 16,
  },
});

export default ProfileScreen;
