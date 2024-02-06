import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Avatar2 from '../assets/img/avatar2.png';
import RoundedCheckImage from '../assets/img/roundedCheck.png';
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
        <Image source={Avatar2} style={styles.imgStyle} />
        <Text style={styles.commentText}>
          {commentCount} {pluralize(commentCount, 'comment')}
        </Text>
        <Text style={styles.todayText}>Today, 9:38 AM</Text>
      </View>
      <View style={styles.rightHeader}>
        <Image
          tintColor={colors.checkImageTint}
          source={RoundedCheckImage}
          style={styles.checkImageStyle}
        />
        <TouchableOpacity onPress={() => Alert.alert('Three dot press')}>
          <Image source={ThreeDotsImage} style={styles.threeDots} />
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
  imgStyle: {height: 20, width: 20},
  threeDots: {height: 15, width: 20, marginTop: 3},
});
