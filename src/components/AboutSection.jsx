import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { personal } from '../data/portfolio';
import { colors } from '../theme/colors';

const INFO_ITEMS = [
  { icon: 'school-outline',    label: personal.university },
  { icon: 'location-outline',  label: personal.location },
  { icon: 'code-slash-outline', label: 'Laravel · React · React Native' },
];

export default function AboutSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Sobre mí</Text>

      <Text style={styles.bio}>{personal.bio}</Text>

      <View style={styles.infoList}>
        {INFO_ITEMS.map((item, i) => (
          <View key={i} style={styles.infoItem}>
            <View style={styles.infoIconWrap}>
              <Ionicons name={item.icon} size={15} color={colors.primary} />
            </View>
            <Text style={styles.infoText}>{item.label}</Text>
          </View>
        ))}
      </View>
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
    marginBottom: 14,
  },
  bio: {
    fontSize: 14,
    color: colors.textSub,
    lineHeight: 22,
    marginBottom: 18,
  },
  infoList: {
    gap: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: colors.primaryMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
});
