import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import { ThemeProvider, createTheme } from '@rneui/themed';

import LoginScreen from './src/screens/Login.js'
import HomeScreen from './src/screens/Home.js'

const theme = createTheme({
	lightColors: {
		primary: '#2882c8',
	},
	darkColors: {
		primary: '#000',
	},
	mode: 'light',
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
		Home: {
			screen: HomeScreen,
			options: {
				title: 'Overview',
			},
		},
	},
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
	return <ThemeProvider theme={theme}> <Navigation/> </ThemeProvider>;
}