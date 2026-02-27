import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {setContador(contador + 1);
  };
  const reset = () => {setContador(0)}
  const decrementar = () => {setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{contador}</Text>
        <View style={styles.linhaDeBotoes}>
          <TouchableOpacity style={styles.botaoMais} onPress={incrementar}> + </TouchableOpacity>
          <TouchableOpacity style={styles.botaoReset} onPress={reset}> Resetar</TouchableOpacity>
          <TouchableOpacity style={styles.botaoMenos} onPress={decrementar}> - </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    color: '#fff',
  },
  numero: {
    fontSize: 80, 
    fontWeight: 'bold',
    color: '#ffffff',
  },

  linhaDeBotoes: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 10,
    margin: 10
  },
  botaoMais: {
    borderRadius: 20,
    margin: 10,
    padding: 25,
    backgroundColor: '#4CAF50',
  },
  botaoReset: {
    borderRadius: 20,
    margin: 10,
    padding: 25,
    backgroundColor: '#616161',
  },
  botaoMenos: {
    borderRadius: 20,
    margin: 10,
    padding: 25,
    backgroundColor: '#F44336',
  },

});