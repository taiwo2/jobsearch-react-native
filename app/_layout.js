import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

// export const unstable_settings = {
//   // Ensure any route can link back to `/`
//   initialRouteName: "home",
// };

const Layout = () => {
  // const [fontsLoaded] = useFonts({
  //   DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  //   DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  //   DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  // });

  // const onlayoutRootView = useCallback(async () => {
  //   if (fontsLoaded){
  //     await SplashScreen.hideAsync()
  //   }
  // },[fontsLoaded])
  // if (!fontsLoaded) {
  //   return "walit";
  // }

  return <Stack />
  // (
   
  //   <Stack initialRouteName="home">
  //     <Stack.Screen name="home" />
  //   </Stack>
  // )
};

export default Layout;
