import * as React from 'react';
import { createStaticNavigation, useLinkBuilder, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@rneui/base';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { Text, PlatformPressable } from '@react-navigation/elements';

import LoginScreen from './src/screens/Login.js'
import HomeScreen from './src/screens/Home.js'
import UserScreen from './src/screens/User.js'

const theme = createTheme({
	lightColors: {
		primary: '#2882c8',
	},
	darkColors: {
		primary: '#000',
	},
	mode: 'light',
});

import { View } from 'react-native';
function BottomTabBar({ navigation }) {
	return (
		<View>
			<Button
			onPress={() => navigation.navigate('A')}
			>
			A
			</Button>
			<Button
			onPress={() => navigation.navigate('B')}
			>
			B
			</Button>
		</View>
	);
}

const HomeTab = createBottomTabNavigator({
	tabBar: (props) => <BottomTabBar {...props} />,
	screens: {
		A: HomeScreen,
		B: UserScreen
	},
	screenOptions: { headerShown: false }
});

const RootStack = createNativeStackNavigator({
	initialRouteName: "Login",
	screens: {
		Login: {
			screen: LoginScreen,
			options: {
				title: 'Log-in',
			},
		},
		Home: HomeTab,
	},
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
	return <ThemeProvider theme={theme}> <Navigation/> </ThemeProvider>;
}