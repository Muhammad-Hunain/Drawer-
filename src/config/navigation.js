import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
import IonicIcons from 'react-native-vector-icons/Ionicons'
import SignIn from '../component/signin'
import SignUp from '../component/signup'
import Home from '../component/Home'
import Splash from '../component/splashScreen'
import About from '../component/about';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  const route = useRoute();
    const{email,uid} = route.params
    
  return (
    <Drawer.Navigator  >
      <Drawer.Screen name="Home" options={{drawerIcon:() => <IconContainer name="home"/>}} component={() => <Home uid={uid} email={email} />} />
      <Drawer.Screen name="About" options={{drawerIcon:() => <IconContainer name="setting"/>}} component={About} />
    
    </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash"  component={Splash} options={{ headerShown: false }}  />
        <Stack.Screen name="SignUp"  component={SignUp} options={{ headerShown: false }}  />
        <Stack.Screen name="SignIn" component={SignIn}  options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const IconContainer = props =>{
  return <IonicIcons name={props.name} size={20}/>
}

export default Navigation;