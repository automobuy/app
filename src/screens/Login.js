import { View, Text } from 'react-native';
import { Divider, Header, Input, Button } from '@rneui/themed';

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import storage from '../Storage.js'

export default function() 
{
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
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

        fetchUserInfo();
    });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
                fontSize: 28
            }}>Log-in</Text>

            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Divider/>
            <Button title="Submit" loading={isLoading} onPress={()=> navigation.replace("Home") }/>
        </View>
    );
}