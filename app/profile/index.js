import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../../components";

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
        <Text style={styles.heading}>Profile</Text>
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
});

export default ProfileScreen;
