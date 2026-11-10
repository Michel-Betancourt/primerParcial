import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { Vacante } from '../data/datos';

type Props = { vacante: Vacante; onVolver: () => void };

export default function DetalleVacanteScreen({ vacante, onVolver }: Props) {
  const [postulado, setPostulado] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={onVolver} style={styles.volver}>
        <Text style={styles.volverTexto}>← Volver a vacantes</Text>
      </Pressable>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.proyecto}>{vacante.proyecto}</Text>
        <Text style={styles.empresa}>🏢 {vacante.empresa}</Text>

        <View style={styles.datos}>
          <View style={styles.dato}>
            <Text style={styles.datoEtiqueta}>Modalidad</Text>
            <Text style={styles.datoValor}>{vacante.modalidad}</Text>
          </View>
          <View style={styles.dato}>
            <Text style={styles.datoEtiqueta}>Ubicación</Text>
            <Text style={styles.datoValor}>📍 {vacante.ubicacion}</Text>
          </View>
        </View>

        <Text style={styles.seccion}>Descripción del proyecto</Text>
        <Text style={styles.parrafo}>{vacante.descripcion}</Text>

        <Text style={styles.seccion}>Tecnologías requeridas</Text>
        <View style={styles.chips}>
          {vacante.tecnologias.map((tec) => (
            <View key={tec} style={styles.chip}>
              <Text style={styles.chipTexto}>{tec}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.seccion}>Requisitos</Text>
        {vacante.requisitos.map((req) => (
          <View key={req} style={styles.requisito}>
            <Text style={styles.viñeta}>✓</Text>
            <Text style={styles.requisitoTexto}>{req}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pie}>
        <Pressable
          disabled={postulado}
          onPress={() => setPostulado(true)}
          style={({ pressed }) => [
            styles.cta,
            postulado && styles.ctaListo,
            pressed && styles.ctaPresionado,
          ]}
        >
          <Text style={styles.ctaTexto}>
            {postulado ? 'Postulación enviada ✓' : 'Postularse'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  volver: { paddingHorizontal: 16, paddingVertical: 12 },
  volverTexto: { fontSize: 15, color: colors.primary, fontWeight: '600' },
  content: { padding: 16, paddingTop: 4, paddingBottom: 24 },
  proyecto: { fontSize: 24, fontWeight: 'bold', color: colors.text },
  empresa: { fontSize: 15, color: colors.muted, marginTop: 6 },
  datos: { flexDirection: 'row', gap: 10, marginTop: 16 },
  dato: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  datoEtiqueta: { fontSize: 12, color: colors.muted },
  datoValor: { fontSize: 14, fontWeight: '600', color: colors.text, marginTop: 4 },
  seccion: { fontSize: 17, fontWeight: '700', color: colors.text, marginTop: 24, marginBottom: 8 },
  parrafo: { fontSize: 14, lineHeight: 21, color: colors.text },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: '#E8EEF9', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5 },
  chipTexto: { fontSize: 13, color: colors.primaryDark },
  requisito: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 },
  viñeta: { color: colors.success, fontWeight: 'bold', marginRight: 8 },
  requisitoTexto: { flex: 1, fontSize: 14, color: colors.text },
  pie: {
    padding: 16,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  cta: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaListo: { backgroundColor: colors.success },
  ctaPresionado: { opacity: 0.8 },
  ctaTexto: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
});