import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { personal, links } from '../data/portfolio';
import { colors } from '../theme/colors';

const SOCIAL = [
  { key: 'github',   icon: 'logo-github',    url: links.github },
  { key: 'linkedin', icon: 'logo-linkedin',  url: links.linkedin },
  { key: 'email',    icon: 'mail-outline',   url: `mailto:${links.email}` },
  { key: 'whatsapp', icon: 'logo-whatsapp',  url: `https://wa.me/${links.whatsapp.replace(/\D/g,'')}` },
];

const Avatar = () => {
  if (personal.photo) {
    return (
      <Image
        source={{ uri: personal.photo }}
        style={styles.photo}
      />
    );
  }
  return (
    <View style={styles.photoPlaceholder}>
      <Text style={styles.initials}>{personal.initials}</Text>
    </View>
  );
};

export default function HeroSection() {
  const openLink = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={styles.container}>
      {/* Glow detrás del avatar */}
      <View style={styles.avatarGlow} />

      {/* Avatar */}
      <View style={styles.avatarWrap}>
        <Avatar />
      </View>

      {/* Nombre */}
      <Text style={styles.name}>{personal.name}</Text>

      {/* Título */}
      <Text style={styles.title}>{personal.title}</Text>
      <Text style={styles.subtitle}>{personal.subtitle}</Text>

      {/* Ubicación */}
      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={14} color={colors.textMuted} />
        <Text style={styles.location}>{personal.location}</Text>
        <Text style={styles.locationSep}>·</Text>
        <Text style={styles.location}>{personal.university}</Text>
      </View>

      {/* Badge disponible */}
      {personal.available && (
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>Disponible para trabajar</Text>
        </View>
      )}

      {/* Links rápidos */}
      <View style={styles.socialRow}>
        {SOCIAL.map(({ key, icon, url }) => (
          <TouchableOpacity
            key={key}
            style={styles.socialBtn}
            onPress={() => openLink(url)}
            activeOpacity={0.7}
          >
            <Ionicons name={icon} size={20} color={colors.text} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 36,
    paddingHorizontal: 24,
    position: 'relative',
  },
  avatarGlow: {
    position: 'absolute',
    top: 40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.primary,
    opacity: 0.08,
  },
  avatarWrap: {
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 62,
    padding: 3,
    marginBottom: 18,
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  photoPlaceholder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: colors.primaryMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: -1,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.textSub,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 14,
  },
  location: {
    fontSize: 13,
    color: colors.textMuted,
  },
  locationSep: {
    fontSize: 13,
    color: colors.textMuted,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: colors.successMuted,
    borderWidth: 1,
    borderColor: colors.success + '40',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 24,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.success,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
  },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.surfaceHigh,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
