import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';

type generateRandomBetweenT = {
  min: number;
  max: number;
  exclude: number;
};
type GameScreenProps = {
  userNumber: number;
};

function generateRandomBetween({ min, max, exclude }: generateRandomBetweenT) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween({ min, max, exclude });
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }: GameScreenProps) {
  const initialGuess = generateRandomBetween({
    min: 1,
    max: 100,
    exclude: userNumber,
  });
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
