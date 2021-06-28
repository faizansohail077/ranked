import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { SvgXml } from 'react-native-svg'
import Repeat from '../../assets/Repeat'
import Repeat1 from '../../assets/Repeat1'
import { Typo } from '../../components'
import Slider from 'react-native-custom-slider';
import circle from '../../assets/circle'
import { useEffect } from 'react'
import slider from '../../assets/slider.png'

const SliderComponent = ({ setSelfScore, Score }) => {
    const [value, setValue] = useState(2);


    return (
        <View>
            <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around', position: 'relative' }}>
                <View>
                    <SvgXml xml={Repeat1} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, backgroundColor: '#4F5A6E', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20, padding: 10 }}>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>

                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 1 ? null :
                                <Typo children="1" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 2 ? null :
                                <Typo children="2" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 3 ? null :

                                <Typo children="3" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 4 ? null :

                                <Typo children="4" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 5 ? null :

                                <Typo children="5" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 6 ? null :

                                <Typo children="6" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 7 ? null :
                                <Typo children="7" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 8 ? null :
                                <Typo children="8" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 9 ? null :

                                <Typo children="9" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {Score == 10 ? null :
                                <Typo children="10" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>

                    <Slider
                        value={Score}
                        trackStyle={{ width: '100%', backgroundColor: 'transparent' }}
                        minimumValue={1}
                        step={1}
                        style={{ position: 'absolute', width: '110%', backgroundColor: 'transparent', bottom: 10, height: '100%' }}
                        maximumValue={10}
                        onValueChange={(value) => setSelfScore(value)}
                        thumbStyle={{ justifyContent: 'center', alignItems: 'center', width: 45 }}
                        minimumTrackTintColor="transparent"
                        customThumb={
                            <View
                                style={{
                                    width: '100%',
                                    height: 55,
                                    position: 'relative'
                                }}
                            >
                                <Image style={{ width: '90%', height: '90%', resizeMode: "stretch", position: 'absolute', top: 3 }} source={slider} />
                                <Typo children={Score ? Score : value} style={{ textAlign: 'center', fontSize: 18, top: 18, right: 5 }} />
                            </View>
                        }
                    />
                </View>

                <View>
                    <SvgXml xml={Repeat} />
                </View>
            </View>
        </View>
    )
}

export default SliderComponent

