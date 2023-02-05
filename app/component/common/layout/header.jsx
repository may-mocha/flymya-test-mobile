import React from "react";
import {View, Image, TouchableOpacity } from "react-native";
import Images from '../../../asset/image'

export const Header = props => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, marginRight: 20}}>
            <Image source={Images.Logo1} style={{marginLeft: -10}}/>
            <View style={{flexDirection: 'row', gap: 20}}>
                <Image source={Images.LangEn} style={{width: 30,height: 30}}/>
                <Image source={Images.Profile} style={{width: 27,height: 27}}/>
            </View>
        </View>
    )
}