import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LoginScreen from './src/screens/Login.js';
import HomeScreen from './src/screens/Home.js';
import UserScreen from './src/screens/User.js';
import VehicleScreen from './src/screens/Vehicle.js';
import VendorScreen from './src/screens/Vendor.js';
import TestDriveScreen from './src/screens/TestDrive.js';
import { colors } from './src/theme.js';
import { VEHICLES } from './src/data.js';

const theme = createTheme({
	lightColors: {
		primary: colors.primary,
	},
	darkColors: {
		primary: '#000',
	},
	mode: 'light',
	components: {
		Button: {
			buttonStyle: { borderRadius: 10, paddingVertical: 12 },
			titleStyle: { fontWeight: '600' },
		},
	},
});

const headerStyle = {
	headerTintColor: colors.primary,
	headerTitleStyle: { color: colors.text, fontWeight: '700' },
	headerShadowVisible: false,
	headerStyle: { backgroundColor: colors.bg },
};

const tabIcon = (name) => ({ color, size }) => <MaterialCommunityIcons name={name} size={size} color={color} />;

const HomeTab = createBottomTabNavigator({
	screenOptions: {
		...headerStyle,
		tabBarActiveTintColor: colors.primary,
	},
	screens: {
		Catalog: {
			screen: HomeScreen,
			options: { title: 'Catálogo', tabBarIcon: tabIcon('storefront-outline') },
		},
		Profile: {
			screen: UserScreen,
			options: { title: 'Perfil', tabBarIcon: tabIcon('account-circle-outline') },
		},
	},
});

const RootStack = createNativeStackNavigator({
	initialRouteName: 'Login',
	screenOptions: { ...headerStyle, headerBackTitle: 'Voltar', contentStyle: { backgroundColor: colors.bg } },
	screens: {
		Login: {
			screen: LoginScreen,
			options: { title: 'Entrar', headerShown: false },
		},
		Main: {
			screen: HomeTab,
			options: { headerShown: false },
		},
		Vehicle: {
			screen: VehicleScreen,
			options: ({ route }) => ({ title: VEHICLES[route.params.id].name }),
		},
		Vendor: {
			screen: VendorScreen,
			options: { title: 'Perfil do vendedor' },
		},
		TestDrive: {
			screen: TestDriveScreen,
			options: { title: 'Test drive monitorado' },
		},
	},
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="dark" />
			<Navigation />
		</ThemeProvider>
	);
}
