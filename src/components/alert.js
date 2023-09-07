import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors'
import { Icon} from '@rneui/themed';

const Alert = ({ visible, message, type, onError }) => {
    const [alertVisible, setAlertVisible] = useState(false)
    let bg_color = colors.secondary;
    if (type === 'danger') {
        bg_color = '#F31559';
    }
    
    return (
        <View style={[styles.alertBox, { backgroundColor: bg_color, display: visible ? 'flex' : 'none' }]}>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.icon} onPress={onError}>
                <Icon
                    name='ios-close'
                    type='ionicon'
                    color='#fff'
                />
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    alertBox: {
        padding: 20,
        borderRadius: 10,
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    message: {
        fontSize: 14,
        color: '#fff',
    },
    icon: {
        color: '#fff'
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeText: {

    },
});

export default Alert;