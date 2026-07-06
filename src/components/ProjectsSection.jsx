import React from 'react';
import {
  View, Text, TouchableOpacity, Linking, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { projects } from '../data/portfolio';
import { colors } from '../theme/colors';

const STATUS_CONFIG = {
  production: { color: colors.success,  bg: colors.successMuted, label: '●' },
  deployed:   { color: colors.primary,  bg: colors.primaryMuted, label: '●' },
  personal:   { color: colors.warning,  bg: colors.warningMuted, label: '●' },
};

const TechChip = ({ label }) => (
  <View style={styles.techChip}>
    <Text style={styles.techChipText}>{label}</Text>
  </View>
);

const StatusBadge = ({ status, label }) => {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.deployed;
  return (
    <View style={[styles.badge, { backgroundColor: cfg.bg }]}>
      <Text style={[styles.badgeDot, { color: cfg.color }]}>●</Text>
      <Text style={[styles.badgeText, { color: cfg.color }]}>{label}</Text>
    </View>
  );
};

const ProjectCard = ({ project }) => {
  const openLink = () => {
    if (project.link) Linking.openURL(project.link).catch(() => {});
  };

  const cfg = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.deployed;

  return (
    <View style={[styles.card, { borderLeftColor: cfg.color }]}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardName} numberOfLines={1}>{project.name}</Text>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </View>

      {/* Description */}
      <Text style={styles.cardDesc}>{project.description}</Text>

      {/* Tech stack */}
      <View style={styles.techRow}>
        {project.tech.map((t) => <TechChip key={t} label={t} />)}
      </View>

      {/* Ver proyecto button */}
      {project.link && (
        <TouchableOpacity style={styles.linkBtn} onPress={openLink} activeOpacity={0.7}>
          <Text style={styles.linkBtnText}>Ver proyecto</Text>
          <Ionicons name="arrow-forward" size={13} color={colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default function ProjectsSection() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Proyectos</Text>
        <Text style={styles.count}>{projects.length}</Text>
      </View>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  count: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
    backgroundColor: colors.primaryMuted,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 8,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeDot: { fontSize: 8 },
  badgeText: { fontSize: 11, fontWeight: '700' },
  cardDesc: {
    fontSize: 13,
    color: colors.textSub,
    lineHeight: 20,
    marginBottom: 12,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 4,
  },
  techChip: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  techChipText: {
    fontSize: 11,
    color: colors.textSub,
    fontWeight: '500',
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  linkBtnText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
  },
});
