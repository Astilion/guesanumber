import { StyleSheet, Text, Platform } from 'react-native';
import Colors from '../../constants/Colors';

type TitleProps = {
  children: React.ReactNode;
};
function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.accent500,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
