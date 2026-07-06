import React from 'react';
import {
  View, Text, TouchableOpacity, Linking, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { personal } from '../data/portfolio';
import { colors } from '../theme/colors';

const SectionTitle = ({ children }) => (
  <Text style={sectionStyles.title}>{children}</Text>
);

const sectionStyles = StyleSheet.create({
  title: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
});

export { SectionTitle };
