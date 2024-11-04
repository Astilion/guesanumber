import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

type InstructionTextProps = {
  children: React.ReactNode;
};

function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
