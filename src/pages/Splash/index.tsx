import React, { useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';

import { Container, Title, Teste, SubTitle } from './styles';
import { useAuth } from '../../hooks/auth';

export function Splash(): JSX.Element {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();
  const { user } = useAuth();

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 100], [0, 1]),
      transform: [
        {
          translateY: interpolate(
            splashAnimation.value,
            [0, 50],
            [100, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const subTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50, 100], [0, 0, 1]),
      transform: [
        {
          translateY: interpolate(
            splashAnimation.value,
            [0, 50, 100],
            [150, 150, 50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const startApp = useCallback(() => {
    if (user.id) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('SignIn');
    }
  }, [navigation, user]);

  useEffect(() => {
    splashAnimation.value = withTiming(100, { duration: 2000 }, () => {
      'worklet';

      runOnJS(startApp)();
    });
  }, [splashAnimation, startApp]);

  return (
    <Container>
      <Logo width={`${RFValue(170)}px`} height={`${RFValue(170)}px`} />

      <Teste>
        <Animated.View style={[titleStyle, { position: 'absolute' }]}>
          <Title>fisioPront</Title>
        </Animated.View>

        <Animated.View style={[subTitleStyle, { position: 'absolute' }]}>
          <SubTitle>Seu prontuário de bolso!</SubTitle>
        </Animated.View>
      </Teste>
    </Container>
  );
}
