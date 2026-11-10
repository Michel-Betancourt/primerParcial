import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DashboardScreen from './src/screens/DashboardScreen';
import VacantesScreen from './src/screens/VacantesScreen';
import DetalleVacanteScreen from './src/screens/DetalleVacanteScreen';
import TabBar from './src/components/TabBar';
import { Vacante } from './src/data/datos';
import { colors } from './src/theme';

type Pantalla = 'dashboard' | 'vacantes' | 'detalle';

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('dashboard');
  const [seleccionada, setSeleccionada] = useState<Vacante | null>(null);

  const abrirDetalle = (vacante: Vacante) => {
    setSeleccionada(vacante);
    setPantalla('detalle');
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={{ flex: 1 }}>
          {pantalla === 'dashboard' && (
            <DashboardScreen onVerVacantes={() => setPantalla('vacantes')} />
          )}
          {pantalla === 'vacantes' && <VacantesScreen onSeleccionar={abrirDetalle} />}
          {pantalla === 'detalle' && seleccionada && (
            <DetalleVacanteScreen
              vacante={seleccionada}
              onVolver={() => setPantalla('vacantes')}
            />
          )}
        </View>

        {pantalla !== 'detalle' && <TabBar activa={pantalla} onCambiar={setPantalla} />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}