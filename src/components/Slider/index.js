import React, { useState } from 'react'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import Repeat from '../../assets/Repeat'
import Repeat1 from '../../assets/Repeat1'
import { Typo } from '../../components'
import Slider from 'react-native-custom-slider';
import circle from '../../assets/circle'

const SliderComponent = () => {
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
                            {value == 1 ? null :
                                <Typo children="1" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 2 ? null :
                                <Typo children="2" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 3 ? null :

                                <Typo children="3" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 4 ? null :

                                <Typo children="4" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 5 ? null :

                                <Typo children="5" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 6 ? null :

                                <Typo children="6" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 7 ? null :
                                <Typo children="7" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 8 ? null :
                                <Typo children="8" style={{ fontSize: 15 }} />}
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 9 ? null :

                                <Typo children="9" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                        <SvgXml xml={circle} />
                        <View style={{ position: 'absolute', bottom: -30 }}>
                            {value == 10 ? null :
                                <Typo children="10" style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>

                    <Slider
                        value={value}
                        trackStyle={{ width: '100%', backgroundColor: 'transparent' }}
                        minimumValue={1}
                        step={1}
                        style={{ position: 'absolute', width: '110%', backgroundColor: 'transparent', bottom: 10, height: '100%' }}
                        maximumValue={10}
                        onValueChange={(value) => setValue(value)}
                        thumbStyle={{ justifyContent: 'center', alignItems: 'center', width: 45 }}
                        minimumTrackTintColor="transparent"
                        customThumb={
                            <View
                                style={{
                                    width: 45,
                                    height: 55,
                                    overflow: 'hidden',
                                    borderTopLeftRadius: 100,
                                    borderTopRightRadius: 100,
                                    borderBottomLeftRadius: 100,
                                    borderBottomRightRadius: 100,
                                    backgroundColor: '#458ecc',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typo children={value} style={{ textAlign: 'center', fontSize: 18 }} />
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

