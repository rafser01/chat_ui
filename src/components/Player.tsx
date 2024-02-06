import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import PlayImage from '../assets/img/play.png';
import SliderImage from '../assets/img/slider.png';
import Slider2Image from '../assets/img/slider2.png';
import SpeakerImage from '../assets/img/speaker.png';
import ThreeDotsImage from '../assets/img/threeDots.png';

type Props = {};

const Player = (props: Props) => {
  return (
    <View style={styles.voicemailPlayer}>
      <Image source={PlayImage} style={{height: 20, width: 20}} />
      <Image source={SliderImage} style={{height: 20, width: 80}} />
      <Text>00:12</Text>
      <Image source={SpeakerImage} style={{height: 30, width: 30}} />
      <Image source={Slider2Image} style={{height: 20, width: 40}} />
      <TouchableOpacity onPress={() => alert('Text more')}>
        <Image source={ThreeDotsImage} style={{height: 15, width: 25}} />
      </TouchableOpacity>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  voicemailPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#dedede',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
