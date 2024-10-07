import { ReactNode } from 'react';
import { View, Text } from 'react-native';

type PrimaryButtonProps = {
  children: ReactNode;
};
function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
