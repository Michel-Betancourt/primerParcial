import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme';

type Props = {
  activa: 'dashboard' | 'vacantes';
  onCambiar: (pantalla: 'dashboard' | 'vacantes') => void;
};

const opciones = [
  { clave: 'dashboard', icono: '🏠', etiqueta: 'Inicio' },
  { clave: 'vacantes', icono: '💼', etiqueta: 'Vacantes' },
] as const;

export default function TabBar({ activa, onCambiar }: Props) {
  return (
    <View style={styles.barra}>
      {opciones.map((op) => (
        <Pressable key={op.clave} style={styles.opcion} onPress={() => onCambiar(op.clave)}>
          <Text style={styles.icono}>{op.icono}</Text>
          <Text style={[styles.etiqueta, activa === op.clave && styles.etiquetaActiva]}>
            {op.etiqueta}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 8,
  },
  opcion: { flex: 1, alignItems: 'center' },
  icono: { fontSize: 20 },
  etiqueta: { fontSize: 12, color: colors.muted, marginTop: 2 },
  etiquetaActiva: { color: colors.primary, fontWeight: '700' },
});