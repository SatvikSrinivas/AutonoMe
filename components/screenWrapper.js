import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

export default function screenWrapper({ children }) {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : Platform.OS == 'ios' ? 30 : 0;
    return (
        <View style={{ paddingTop: statusBarHeight }}>
            {
                children
            }
        </View>
    )
}

