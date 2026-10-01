import { View, ScrollView, Text } from 'react-native';

export default function() 
{
	return (
		<ScrollView>
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
		</ScrollView>
	);
}