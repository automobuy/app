import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
import { Divider, Header, Input, Button } from '@rneui/themed';

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import storage from '../Storage.js'

export default function() 
{
	const navigation = useNavigation();
	const [isLoading, setLoading] = useState(true);

	const fetchUserInfo = async function()
	{
		try
		{
			const token = await storage.getItem("userToken");
		}
		catch (error)
		{
			console.error('Error loading token:', error);
		}
		finally
		{
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUserInfo();
	});

	return (
		<ScrollView>
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Image
				source={require('../../assets/android-icon-foreground.png')}
				style={{
					marginTop: 128,
					width: '40%',
					height: '40%'
				}}
			/>
			<Input placeholder="Username" style={{ marginBottom: 32 }}/>
			<Input placeholder="Password" style={{ marginBottom: 32 }}/>
			<Divider/>
			<Button style={{ marginBottom: 128 }} title="Submit" loading={isLoading} onPress={()=> navigation.replace("Home") }/>
		</View>
		</ScrollView>
	);
}