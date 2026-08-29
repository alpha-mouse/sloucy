import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { color, radius, shadow, space, type } from '../theme';
import ProgressBar from './ProgressBar';

const StatTile = ({
  value,
  label,
  progress,
  tint = color.brand,
  style,
}: {
  value: string;
  label: string;
  // When given (0..1), the tile grows a progress bar under the label.
  progress?: number;
  tint?: string;
  style?: StyleProp<ViewStyle>;
}) => (
  <View style={[styles.tile, style]}>
    <Text style={[type.number, styles.value, { color: tint }]}>{value}</Text>
    <Text style={[type.caption, styles.label]} numberOfLines={2}>{label}</Text>
    {progress === undefined ? null : (
      <ProgressBar value={progress} height={6} fill={tint} style={styles.bar} />
    )}
  </View>
);

export default StatTile;

const styles = StyleSheet.create({
  // Без flex: памер задае бацька (радок дае flex: 1, шырокія пліткі - не).
  tile: {
    padding: space.lg,
    borderRadius: radius.md,
    backgroundColor: color.surface,
    borderWidth: 1,
    borderColor: color.line,
    ...shadow,
  },
  value: {
    marginBottom: space.xs,
  },
  label: {
    color: color.inkMuted,
  },
  bar: {
    marginTop: space.md,
  },
});
