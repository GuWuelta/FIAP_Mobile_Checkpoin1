import { Text, View, StyleSheet, Image } from 'react-native';

export default function user({userName, locale}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <strong>{userName}</strong>
      </Text>
      <Text style={styles.locale}>
        {locale}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    position: 'aboslute',
    bottom: 15,
    left: 35,
    marginBottom: 30
  },
  text: {
    marginTop: 15
  },
  locale: {
    marginTop: -5
  }
});
