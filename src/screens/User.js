import { View, ScrollView, Text } from 'react-native';

export default function() 
{
	return (
		<ScrollView>
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>User Screen</Text>
		</View>
		</ScrollView>
	);
}