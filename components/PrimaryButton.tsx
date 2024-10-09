import { ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type PrimaryButtonProps = {
  children: ReactNode;
};
function PrimaryButton({ children }: PrimaryButtonProps) {
  const pressButtonHandler = () => {
    console.log('Pressed');
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressButtonHandler}
        android_ripple={{ color: '#333232' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#640233',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  // IOS onpress styling
  pressed: {
    opacity: 0.75,
  },
});
