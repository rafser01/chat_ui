import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type Props = {};

import ThreeDotsImage from '../assets/img/threeDots.png';
import SendMessage from '../assets/img/sendMessage.png';
import ManEmoji from '../assets/img/manEmoji.png';

const InputMessage = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Replay internally..." />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => alert('Text more')}>
          <Image
            source={ThreeDotsImage}
            style={{height: 15, width: 25, marginTop: 2}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={ManEmoji}
            style={{height: 20, width: 20, marginHorizontal: 2}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={SendMessage}
            style={{height: 20, width: 20, marginLeft: 5}}
          />
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
});
