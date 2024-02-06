import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  comment: string;
};

const CommentTranscript: React.FC<Props> = ({comment}) => {
  return (
    <View style={styles.bodyTextContainer}>
      <Text style={styles.transcriptText}>Transcript</Text>
      <Text style={styles.messageBodyText}>{comment}</Text>
    </View>
  );
};

export default CommentTranscript;

const styles = StyleSheet.create({
  bodyTextContainer: {
    paddingVertical: 10,
  },
  transcriptText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: '#7a7a7a',
  },
  messageBodyText: {
    fontSize: 16,
    lineHeight: 22,
  },
});
