import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { skills } from '../data/portfolio';
import { colors } from '../theme/colors';

const Chip = ({ label }) => (
  <View style={styles.chip}>
    <Text style={styles.chipText}>{label}</Text>
  </View>
);

export default function SkillsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Skills</Text>

      {skills.map((group) => (
        <View key={group.category} style={styles.group}>
          <Text style={styles.categoryLabel}>{group.category}</Text>
          <View style={styles.chips}>
            {group.items.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  group: {
    marginBottom: 18,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSub,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: colors.primaryMuted,
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.primary + '35',
  },
  chipText: {
    fontSize: 13,
    color: colors.primaryLight,
    fontWeight: '500',
  },
});
