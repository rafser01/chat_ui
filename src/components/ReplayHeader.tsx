import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Avatar2 from '../assets/img/avatar2.png';
import RoundedCheckImage from '../assets/img/avatar2.png';
import ThreeDotsImage from '../assets/img/threeDots.png';
import colors from '../constants/Colors';
import {pluralize} from '../utils/Pluralize';

type Props = {
  commentCount: number;
};

const ReplayHeader: React.FC<Props> = ({commentCount}) => {
  return (
    <View style={styles.replayThreadHeader}>
      <View style={styles.leftHeader}>
        <Image source={Avatar2} style={{height: 20, width: 20}} />
        <Text style={styles.commentText}>
          {commentCount} {pluralize(commentCount, 'comment')}
        </Text>
        <Text style={styles.todayText}>Today, 9:38 AM</Text>
      </View>
      <View style={styles.rightHeader}>
        <Image
          tintColor={'#a7a7a7'}
          source={RoundedCheckImage}
          style={styles.checkImageStyle}
        />
        <TouchableOpacity onPress={() => alert('Three dot press')}>
          <Image
            source={ThreeDotsImage}
            style={{height: 15, width: 20, marginTop: 3}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReplayHeader;

const styles = StyleSheet.create({
  replayThreadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: '600',
  },
  todayText: {
    fontSize: 13,
    color: colors.todayText,
    marginTop: 2,
  },
  rightHeader: {
    flexDirection: 'row',
  },
  checkImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
