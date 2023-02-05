import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import { colors } from 'app/utils'

export const LayoutContainer = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
`

export const Scroll = styled.ScrollView``

export const ScrollGap = styled.View`
  width: 100%;
  height: 50px;
`


export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`