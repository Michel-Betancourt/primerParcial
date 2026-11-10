import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { Vacante } from '../data/datos';

type Props = { vacante: Vacante; onPress: () => void };

const colorModalidad = {
  Remoto: colors.success,
  Presencial: colors.primary,
  Híbrido: colors.warning,
};

export default function VacanteCard({ vacante, onPress }: Props) {
  const color = colorModalidad[vacante.modalidad];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPresionada]}
    >
      <View style={styles.cabecera}>
        <View style={styles.titulos}>
          <Text style={styles.proyecto}>{vacante.proyecto}</Text>
          <Text style={styles.empresa}>🏢 {vacante.empresa}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: color }]}>
          <Text style={styles.badgeTexto}>{vacante.modalidad}</Text>
        </View>
      </View>

      <View style={styles.chips}>
        {vacante.tecnologias.map((tec) => (
          <View key={tec} style={styles.chip}>
            <Text style={styles.chipTexto}>{tec}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.ubicacion}>📍 {vacante.ubicacion}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardPresionada: { opacity: 0.7 },
  cabecera: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  titulos: { flex: 1, marginRight: 8 },
  proyecto: { fontSize: 16, fontWeight: '700', color: colors.text },
  empresa: { fontSize: 13, color: colors.muted, marginTop: 4 },
  badge: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '600' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 12 },
  chip: { backgroundColor: '#E8EEF9', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 },
  chipTexto: { fontSize: 12, color: colors.primaryDark },
  ubicacion: { fontSize: 12, color: colors.muted, marginTop: 12 },
});