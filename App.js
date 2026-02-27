import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {setContador(contador + 1);
  };

  const decrementar = () => {setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{contador}</Text>
        <View style={styles.linhaDeBotoes}>
          <TouchableOpacity style={styles.botaoMais} onPress={incrementar}> + </TouchableOpacity>
          <TouchableOpacity style={styles.botaoMenos} onPress={decrementar}> - </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#000000',
  },
  linhaDeBotoes: {
    flexDirection: 'row',
    marginTop: 20,
  },
  botaoMais: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  botaoMenos: {
    padding: 20,
    backgroundColor: '#F44336',
  },

});