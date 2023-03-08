import { Text, View, StyleSheet, Image } from 'react-native';

export default function comment({userName, userComment}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <strong>{userName}</strong> {userComment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    position: 'aboslute',
    bottom: -500,
    marginTop: -7,
    marginBottom: 20
  },
  text: {
    marginTop: 30,
  }
});
