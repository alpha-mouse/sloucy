import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { color, radius, shadow, space, type } from '../theme';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// Pressable, не TouchableHighlight: дае ripple на Android і стан націску на iOS.
const Button = ({
  label,
  onPress,
  variant = 'primary',
  chevron = false,
  style,
}: {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  chevron?: boolean;
  style?: ViewStyle;
}) => {
  const scheme = schemes[variant];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      android_ripple={{ color: scheme.ripple }}
      style={({ pressed }) => [
        styles.button,
        scheme.container,
        pressed && scheme.pressed,
        style,
      ]}>
      <View style={styles.content}>
        <Text style={[type.label, styles.label, { color: scheme.label }]}>{label}</Text>
        {chevron ? <Text style={[styles.chevron, { color: scheme.chevron }]}>›</Text> : null}
      </View>
    </Pressable>
  );
};

export default Button;

const schemes: Record<ButtonVariant, {
  container: ViewStyle;
  pressed: ViewStyle;
  ripple: string;
  label: string;
  chevron: string;
}> = {
  primary: {
    container: { backgroundColor: color.brand, ...shadow },
    pressed: { backgroundColor: color.brandDeep },
    ripple: '#00000022',
    label: color.surface,
    chevron: '#FFFFFFAA',
  },
  secondary: {
    container: { backgroundColor: color.surface, borderWidth: 1, borderColor: color.lineStrong },
    pressed: { backgroundColor: color.brandSoft },
    ripple: color.brandSoft,
    label: color.ink,
    chevron: color.inkFaint,
  },
  ghost: {
    container: { backgroundColor: 'transparent' },
    pressed: { backgroundColor: color.line },
    ripple: color.line,
    label: color.inkMuted,
    chevron: color.inkFaint,
  },
};

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: space.xl,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
  chevron: {
    fontSize: 22,
    lineHeight: 24,
    marginLeft: space.sm,
  },
});
