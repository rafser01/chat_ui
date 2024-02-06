import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type Props = {};

import ThreeDotsImage from '../assets/img/threeDots.png';
import SendMessage from '../assets/img/sendMessage.png';
import ManEmoji from '../assets/img/manEmoji.png';

const InputMessage: React.FC<Props> = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Replay internally..." />
      <View style={styles.flexRow}>
        <TouchableOpacity onPress={() => Alert.alert('Text more')}>
          <Image source={ThreeDotsImage} style={styles.threeDotsImgStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ManEmoji} style={styles.manEmojiImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={SendMessage} style={styles.sendMessageImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputMessage;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    borderColor: '#e9e9e9',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  flexRow: {flexDirection: 'row'},
  threeDotsImgStyle: {height: 15, width: 25, marginTop: 2},
  manEmojiImage: {height: 20, width: 20, marginHorizontal: 2},
  sendMessageImage: {height: 20, width: 20, marginLeft: 5},
});
