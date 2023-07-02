import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = (text) => {
    if (text === '=') {
      calculateResult();
    } 
    else if (text == 'AC'){
      handleClear();
    }
    else if (text == 'C'){
      handleDelete();
    }
    else {
      setResult(result + text);
    }
  };

  const calculateResult = () => {
    let finalResult = '';
    try {
      finalResult = eval(result);
    } 
    catch (error) {
      finalResult = 'Error';
    }
    setResult(finalResult.toString());
  };

  const handleClear = () => {
    setResult('');
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };


  const buttons = [
    ['AC', 'C', '%','/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Text style={styles.result}>{result}</Text>
        {buttons.map((row, index) => (

          <View key={index} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, button === '0' ? styles.specialButton : null,
                button === '=' || button === '+' || button === '-'  || button === '*'  || button === '/' ? styles.operators : null, 
                button === 'AC'  || button === 'C'  || button === '%' ? styles.firstRow : null, ]}
                onPress={() => handleButtonPress(button)}>
                   {button === 'C' ? (
                       <Icon name="chevron-left" size={30} color="white" style={styles.icon} />
                      ) : (
                <Text style={styles.buttonText}>
               
                {button}
                
                  </Text> 
)}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {

    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 5,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'grey',
  },

  result: {
    fontSize: 48,
    marginBottom: 24,
    color:'black',
  },
  buttonContainer: {
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    padding: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: 'grey',
    borderRadius: 15,
    padding: 18,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  specialButton: {
    width: '50%', 
    padding: 20,
  },
  operators:{
    backgroundColor:'orange',
  },
  firstRow:{
    backgroundColor:'darkgrey',
  },
  buttonText: {
    fontSize: 24,
    color:'white',
  },
  icon:{
    fontSize: 20,
    padding: 4.5,
  },
});

export default App;