import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { vacantes, Vacante } from '../data/datos';
import VacanteCard from '../components/VacanteCard';

type Props = { onSeleccionar: (vacante: Vacante) => void };

const filtros = ['Todas', 'Presencial', 'Remoto', 'Híbrido'];

export default function VacantesScreen({ onSeleccionar }: Props) {
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('Todas');

  const texto = busqueda.trim().toLowerCase();
  const resultados = vacantes.filter((v) => {
    const coincideModalidad = filtro === 'Todas' || v.modalidad === filtro;
    const coincideTexto =
      texto === '' ||
      v.proyecto.toLowerCase().includes(texto) ||
      v.empresa.toLowerCase().includes(texto) ||
      v.tecnologias.some((t) => t.toLowerCase().includes(texto));
    return coincideModalidad && coincideTexto;
  });

  return (
    <View style={styles.container}>
      <View style={styles.superior}>
        <Text style={styles.titulo}>Vacantes disponibles</Text>
        <TextInput
          style={styles.busqueda}
          placeholder="🔍  Buscar por proyecto, empresa o tecnología"
          placeholderTextColor={colors.muted}
          value={busqueda}
          onChangeText={setBusqueda}
        />
        <View style={styles.filtros}>
          {filtros.map((f) => (
            <Pressable
              key={f}
              onPress={() => setFiltro(f)}
              style={[styles.filtro, filtro === f && styles.filtroActivo]}
            >
              <Text style={[styles.filtroTexto, filtro === f && styles.filtroTextoActivo]}>{f}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <VacanteCard vacante={item} onPress={() => onSeleccionar(item)} />
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>No se encontraron vacantes con esos criterios.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  superior: { padding: 16, paddingBottom: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: colors.text, marginBottom: 12 },
  busqueda: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.text,
  },
  filtros: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  filtro: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  filtroActivo: { backgroundColor: colors.primary, borderColor: colors.primary },
  filtroTexto: { fontSize: 13, color: colors.text },
  filtroTextoActivo: { color: '#fff', fontWeight: '600' },
  lista: { padding: 16, paddingTop: 8 },
  vacio: { textAlign: 'center', color: colors.muted, marginTop: 40 },
});