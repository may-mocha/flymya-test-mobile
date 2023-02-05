import styled from 'styled-components'
import { View, TouchableOpacity } from 'react-native'
import { colors } from '../../attribute'

export const StyledHome = styled(View)`
    padding-Left: 12px;
    padding-right: 12px;
`
export const TabStyle = {
    TabContainer: styled.View`
    border-radius: 10px;
    overflow: hidden;
    shadow-color: #ddd;
    shadow-offset: 0px 0px;
    shadow-opacity: 0.1;
    shadow-radius: 2.22px;
    elevation: 3;
    margin-bottom: 20px;
    `,
    StyledTabCon : styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${colors?.light}
    `,
    StyledTabBtn : styled.TouchableOpacity`
    width: 50%;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    background:red;
    `,
    StyledTabContent: styled.View`
    background: ${colors?.light}
    `
}
