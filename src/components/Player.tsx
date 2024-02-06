import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

import PlayImage from '../assets/img/play.png';
import SliderImage from '../assets/img/slider.png';
import Slider2Image from '../assets/img/slider2.png';
import SpeakerImage from '../assets/img/speaker.png';
import ThreeDotsImage from '../assets/img/threeDots.png';

type Props = {};

const Player: React.FC<Props> = () => {
  return (
    <View style={styles.voicemailPlayer}>
      <Image source={PlayImage} style={styles.play} />
      <Image source={SliderImage} style={styles.slider} />
      <Text>00:12</Text>
      <Image source={SpeakerImage} style={styles.speaker} />
      <Image source={Slider2Image} style={styles.slider2} />
      <TouchableOpacity onPress={() => Alert.alert('Text more')}>
        <Image source={ThreeDotsImage} style={styles.threeDots} />
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
  play: {height: 20, width: 20},
  slider: {height: 20, width: 80},
  speaker: {height: 30, width: 30},
  slider2: {height: 20, width: 40},
  threeDots: {height: 15, width: 25},
});
