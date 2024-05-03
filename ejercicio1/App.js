import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleSum = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult('Error: Division by zero');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        value={num1}
        onChangeText={text => setNum1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese otro número"
        value={num2}
        onChangeText={text => setNum2(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="+ " onPress={handleSum} />
        <Button title="-" onPress={handleSubtract} />
        <Button title="x" onPress={handleMultiply} />
        <Button title="/" onPress={handleDivide} />
      </View>
      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100
    
  },
  input: {
    width: 200,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10
  },
  buttonContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 100,
    color: '#CC00FF'
    
   
  },
  button: {
    backgroundColor: '#CC00FF',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
  result: {
    margin: 10,
    fontSize: 25
  },
});

export default Calculator;
