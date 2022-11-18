import { Icon } from 'native-base';
import React, { useState } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { COLORS } from '../../utils/Colors';
import { CustomFontText } from '../customFontText/CustomFontText';

export const Loading = () => {
    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, .4)' }}>
            <View style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white, borderRadius: 12 }}>
                <ActivityIndicator animating={true} color={'rgba(0, 0, 0, .7)'} size='large' />
                <CustomFontText style={{ color: 'rgba(0, 0, 0, .8)', fontSize: 16, marginTop: 10, textAlign: 'center' }}>Loading...</CustomFontText>
            </View>
        </View>
    );
};
