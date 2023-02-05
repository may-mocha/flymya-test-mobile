import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { rgba } from 'polished'

import { PlainLayout, TextCom, Header, RadioCom, InputCom} from '../../component'
import { StyledHome, TabStyle } from '../../theme'
import Images from '../../asset/image'
import { colors } from '../../theme'

export const HomePage = props => {

    const [activeCategory,setActiveCategory] = useState({
        id: 1
    })

    const [tab, setTab] = useState('oneway')

    const Banner_data = [
        Images.Banner1,
        Images.Banner2,
        Images.Banner3,
    ]

    const category_data =[
        {
        id: 1,
        icon: Images.Plane1,
        name: 'Flights',
        },
        {
        id: 2,
        icon: Images.Building,
        name: 'Hotels',
        },
        { 
        id: 3,
        icon: Images.Car,
        name: 'Buses',
        },
        {
        id: 4,
        icon: Images.Car2,
        name: 'Cars',
        },
        {
        id: 5,
        icon: Images.Ballon2,
        name: 'Balloons',
        tag: 'New!'
        },
        {
            id: 5,
            icon: Images.Percent,
            name: 'Promos'
            }
    ]

    return(
        <PlainLayout>
            <Header/>
            <StyledHome>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', rowGap: 20 }}>
                    {
                        category_data &&
                        category_data?.map((category,key)=>(
                            <View style={[styles.cate_wrap]} key={key}>
                                <TouchableOpacity onPress={()=>setActiveCategory({id:category?.id})} style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <View style={{backgroundColor: `${activeCategory?.id===category?.id? rgba("#29abe2",.1) : colors?.gray4}`, borderRadius: 30, padding: 10, marginBottom: 5}}>
                                        <Image source={category?.icon} style={[styles.icon]}/>
                                    </View>
                                    <TextCom color={activeCategory?.id===category?.id ? 'primary':''}>{category?.name}</TextCom>
                                    {
                                        category?.tag &&
                                        <TextCom style={[styles.tag]} size='xxs'>{category?.tag}</TextCom>
                                    }
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
                <View style={{marginTop: 20, marginBottom: 20, backgroundColor: colors.background, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 13, paddingRight: 7}}>
                    <TextCom>Myanmar Citizen</TextCom>
                    <RadioCom val='No' option={['Yes','No']}/>
                </View>
                <TabStyle.TabContainer>
                    <TabStyle.StyledTabCon>
                        <TabStyle.StyledTabBtn onPress={()=>setTab('oneway')}  style={{backgroundColor: tab==='oneway'? colors.light:colors.background, borderBottomColor: tab==='oneway'? colors.primary : colors.transparent}}><TextCom weight='xl' color={tab==='oneway'?'primary':'gray'}>One Way</TextCom></TabStyle.StyledTabBtn>
                        <TabStyle.StyledTabBtn onPress={()=>setTab('roundtrip')} style={{backgroundColor: tab==='roundtrip'?  colors.light:colors.background, borderBottomColor: tab==='roundtrip'? colors.primary: colors.transparent}}><TextCom weight='xl' color={tab==='roundtrip'?'primary':'gray'}>Round Trip</TextCom></TabStyle.StyledTabBtn>
                    </TabStyle.StyledTabCon>
                    <TabStyle.StyledTabContent>
                        <InputCom type='text' value='Mandalay' label='From' style={[styles.borderBottom,{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}/>
                        <InputCom type='text' value='Tue, 16 Feb 2021' label='To' style={[styles.borderBottom,{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}/>
                        <InputCom type='text' value='Wed, 17 Feb 2021' label='Departure' style={[styles.borderBottom,{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}/>
                        {
                            tab==='roundtrip' &&
                            <InputCom type='text' value='Fri, 19 Feb 2021' label='Return' style={[styles.borderBottom,{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}/> 
                        }
                        <InputCom type='text' value='1 Adult, 0 Child, 1 Room' label='Pax' style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}/>
                    </TabStyle.StyledTabContent>
                </TabStyle.TabContainer>
                <TouchableOpacity style={{borderRadius: 5, marginBottom: 15, padding: 10,backgroundColor: colors?.primary, justifyContent: 'center', alignItems: 'center'}}>
                    <TextCom color='light' size='lg'>Search</TextCom>
                </TouchableOpacity>
                {
                    Banner_data &&
                    Banner_data.map((banner,key)=>(
                    <TouchableOpacity onPress={()=>{}} key={key} style={{marginBottom: 15}}>
                        <Image source={banner}/>
                    </TouchableOpacity>
                    ))
                }
            </StyledHome>
        </PlainLayout>
    )
}

const styles = StyleSheet.create({
    cate_wrap: {
      width: '33%',
      margin: 0,
      marginTop: 10,
      padding: 3,
      paddingTop: 0,
      paddingBottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    icon:{
        width: 35,
        height: 35
    },
    tag: {
        position: 'absolute',
        top: -5,
        left: 18,
        backgroundColor: colors?.warn,
        color: colors.light,
        borderRadius: 5,
        paddingLeft: 2,
        paddingRight: 2
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor:colors.gray3
    }
  })