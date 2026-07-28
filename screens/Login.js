import { View, Text } from 'react-native';
import { Button } from '@rneui/base';

import { useNavigation } from '@react-navigation/native';

export default function() 
{
    const navigation = useNavigation();

    navigation.preload("Home");
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login temp</Text>
            <Button title="Log-in" onPress={()=> navigation.replace("Home")}/>
        </View>
    );
}