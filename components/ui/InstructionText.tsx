import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

type InstructionTextProps = {
  children: React.ReactNode;
};

function InstructionText({ children }: InstructionTextProps) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
