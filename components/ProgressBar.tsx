import { StyleSheet, View, ViewStyle } from 'react-native';
import { color, radius } from '../theme';

const ProgressBar = ({
  value,
  height = 4,
  fill = color.brand,
  track = color.brandSoft,
  style,
}: {
  // 0..1; clamped, so callers need not guard against an empty vocabulary.
  value: number;
  height?: number;
  fill?: string;
  track?: string;
  style?: ViewStyle;
}) => {
  const clamped = Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));

  return (
    <View style={[styles.track, { height, backgroundColor: track, borderRadius: height / 2 }, style]}>
      <View
        style={{
          width: `${clamped * 100}%`,
          height: '100%',
          backgroundColor: fill,
          borderRadius: height / 2,
        }}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: radius.pill,
  },
});
