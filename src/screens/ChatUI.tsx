import React from 'react';
import {View, StyleSheet} from 'react-native';
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
    <View style={styles.subContainer}>
      {/* ::: Avatar ::: */}
      <OwnerAvatar />
      {/* ::: Bubble ::: */}
      <View style={styles.flexNinety}>
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
  subContainer: {flexDirection: 'row', flex: 1},
  flexNinety: {flex: 0.9},
});

export default ChatUI;
