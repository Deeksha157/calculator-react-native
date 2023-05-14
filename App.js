import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions  } from 'react-native';


const App = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = (text) => {
    if (text === '=') {
      calculateResult();
    } 
    else if (text == 'CLEAR'){
      handleClear();
    }
    else if (text == 'DEL'){
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
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+'],
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
                style={[styles.button, button === 'CLEAR' || button === 'DEL' ? styles.specialButton : null, ]}
                onPress={() => handleButtonPress(button)}>
                  
                <Text style={styles.buttonText}>
                {button}
                  </Text> 
              </TouchableOpacity>
            )
            )
            }
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  result: {
    fontSize: 48,
    marginBottom: 24,
  },
  buttonContainer: {
   
    borderRadius: 5,
    borderColor: 'black',
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
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 20,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialButton: {
    width: '40%', 
    padding: 20,
  },
  
  buttonText: {
    fontSize: 24,
    color:'white',
  },
});

export default App;