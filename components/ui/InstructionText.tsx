import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';
import Colors from '../../constants/Colors';

type InstructionTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
