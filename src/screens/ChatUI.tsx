import React from 'react';
import {View, StyleSheet} from 'react-native';

import PlayImage from '../assets/img/play.png';
import SliderImage from '../assets/img/slider.png';
import Slider2Image from '../assets/img/slider2.png';
import SpeakerImage from '../assets/img/speaker.png';
import ThreeDotsImage from '../assets/img/threeDots.png';
import Avatar2 from '../assets/img/avatar2.png';
import RoundedCheckImage from '../assets/img/avatar2.png';
import OwnerAvatar from '../components/OwnerAvatar';
import ThreadSignStyle from '../components/ThreadSignStyle';
import MissedCall from '../components/MissedCall';
import InputMessage from '../components/InputMessage';
import ReplayMessage from '../components/ReplayMessage';
import ReplayHeader from '../components/ReplayHeader';
import Player from '../components/Player';
import CommentTranscript from '../components/CommentTranscript';

const ChatUI = () => {
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      {/* ::: Avatar ::: */}
      <OwnerAvatar />
      {/* ::: Bubble ::: */}
      <View style={{flex: 0.9}}>
        {/* === Main Replay Message === */}
        <View style={styles.mainReplayMessageContainer}>
          {/* === Main Replay header === */}
          <MissedCall />
          <Player />
          <CommentTranscript
            comment={
              'Hi there. Just checking in to see when the proposal will be ready.Please call me back when you have a chance. Thanks.'
            }
          />
        </View>
        <View>
          {/* === @@@ Thread Sign @@@ === */}
          <ThreadSignStyle />
          {/* === Replay Threads Message === */}
          <View style={styles.replayThreadSection}>
            <ReplayHeader commentCount={2} />
            <ReplayMessage />
            <InputMessage />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  replayThreadSection: {
    marginLeft: 35,
    marginRight: 5,
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  // upper bubbles
  mainReplayMessageContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default ChatUI;
