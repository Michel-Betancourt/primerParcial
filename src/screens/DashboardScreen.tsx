import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { estudiante, avisos } from '../data/datos';

type Props = { onVerVacantes: () => void };

export default function DashboardScreen({ onVerVacantes }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.saludo}>¡Hola, {estudiante.nombre}! 👋</Text>
        <Text style={styles.subtitulo}>{estudiante.carrera}</Text>
      </View>

      <Text style={styles.seccion}>Tu estado actual</Text>
      <View style={styles.fila}>
        <View style={[styles.indicador, { borderTopColor: colors.warning }]}>
          <Text style={styles.indicadorValor}>🔎</Text>
          <Text style={styles.indicadorTexto}>{estudiante.estado}</Text>
        </View>
        <View style={[styles.indicador, { borderTopColor: colors.danger }]}>
          <Text style={styles.indicadorValor}>{estudiante.tramitesPendientes}</Text>
          <Text style={styles.indicadorTexto}>Trámites pendientes</Text>
        </View>
        <View style={[styles.indicador, { borderTopColor: colors.success }]}>
          <Text style={styles.indicadorValor}>{estudiante.postulaciones}</Text>
          <Text style={styles.indicadorTexto}>Postulaciones</Text>
        </View>
      </View>

      <Pressable style={styles.boton} onPress={onVerVacantes}>
        <Text style={styles.botonTexto}>Explorar vacantes</Text>
      </Pressable>

      <Text style={styles.seccion}>Notificaciones recientes</Text>
      {avisos.map((aviso) => (
        <View key={aviso.id} style={styles.aviso}>
          <View style={styles.avisoCabecera}>
            <Text style={styles.avisoTitulo}>{aviso.titulo}</Text>
            <Text style={styles.avisoFecha}>{aviso.fecha}</Text>
          </View>
          <Text style={styles.avisoDetalle}>{aviso.detalle}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16, paddingBottom: 32 },
  header: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  saludo: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitulo: { fontSize: 14, color: '#DCE6F5', marginTop: 4 },
  seccion: { fontSize: 18, fontWeight: '600', color: colors.text, marginBottom: 12 },
  fila: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  indicador: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    borderTopWidth: 4,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  indicadorValor: { fontSize: 26, fontWeight: 'bold', color: colors.text },
  indicadorTexto: { fontSize: 12, color: colors.muted, textAlign: 'center', marginTop: 4 },
  boton: {
    backgroundColor: colors.primaryDark,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  botonTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
  aviso: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  avisoCabecera: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  avisoTitulo: { flex: 1, fontSize: 15, fontWeight: '600', color: colors.text, marginRight: 8 },
  avisoFecha: { fontSize: 12, color: colors.muted },
  avisoDetalle: { fontSize: 13, color: colors.muted, marginTop: 4 },
});