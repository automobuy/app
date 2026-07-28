import { View, Text, ActivityIndicator, Image } from 'react-native';
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Image
                source={require('../../assets/android-icon-foreground.png')}
                style={{
                    marginTop: 6,
                    width: '50%',
                    height: '50%'
                }}
            />
            <Input placeholder="Username" style={{ marginTop: 32 }}/>
            <Input placeholder="Password" style={{ marginTop: 32 }}/>
            <Divider/>
            <Button style={{ marginTop: 192 }} title="Submit" loading={isLoading} onPress={()=> navigation.replace("Home") }/>
        </View>
    );
}