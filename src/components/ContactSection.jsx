import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Linking, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { links, personal } from '../data/portfolio';
import { colors } from '../theme/colors';

const CONTACTS = [
  {
    key: 'github',
    label: 'GitHub',
    icon: 'logo-github',
    color: '#E2E8F0',
    bg: 'rgba(226,232,240,0.10)',
    getUrl: () => links.github,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: 'logo-linkedin',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.12)',
    getUrl: () => links.linkedin,
  },
  {
    key: 'email',
    label: 'Email',
    icon: 'mail-outline',
    color: colors.primary,
    bg: colors.primaryMuted,
    getUrl: () => `mailto:${links.email}`,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: 'logo-whatsapp',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.12)',
    getUrl: () => `https://wa.me/${links.whatsapp.replace(/\D/g, '')}`,
  },
];

const ContactCard = ({ item }) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    Linking.openURL(item.getUrl()).catch(() => {});
  };

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.bg }]}
      onPress={handlePress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      activeOpacity={0.8}
    >
      <View style={[styles.iconWrap, { borderColor: item.color + '30' }]}>
        <Ionicons name={item.icon} size={24} color={item.color} />
      </View>
      <Text style={[styles.cardLabel, { color: item.color }]}>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default function ContactSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Contacto</Text>

      <View style={styles.grid}>
        {CONTACTS.map((item) => (
          <ContactCard key={item.key} item={item} />
        ))}
      </View>

      <Text style={styles.emailHint}>{links.email}</Text>
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
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '47%',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  emailHint: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 16,
  },
});
