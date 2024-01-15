import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [input , setInput] = useState('')

  const btnPress = (value) =>{
    if(value === "C"){setInput('')}
    else if (value === '='){
      try{setInput(eval(input).toString())}
      catch(error){setInput("Error")}
    }else{setInput((preInput)=>preInput + value)}
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Calculator App</Text>
      <View style={styles.calculator}>
        <TextInput placeholder="Enter Number" style={styles.input} value={input}/>
        <View style={styles.row}>
        <Button text="1" onPress={()=>btnPress('1')}/>
        <Button text="2" onPress={()=>btnPress('2')}/>
        <Button text="3" onPress={()=>btnPress('3')}/>
        <Button text="4" onPress={()=>btnPress('4')}/>
        </View>
        <View style={styles.row}>
        <Button text="5" onPress={()=>btnPress('5')}/>
        <Button text="6" onPress={()=>btnPress('6')}/>
        <Button text="7" onPress={()=>btnPress('7')}/>
        <Button text="8" onPress={()=>btnPress('8')}/>
        </View>
        <View style={styles.row}>
        <Button text="9" onPress={()=>btnPress('9')}/>
        <Button text="0" onPress={()=>btnPress('0')}/>
        <Button text="-" onPress={()=>btnPress('-')}/>
        <Button text="+" onPress={()=>btnPress('+')}/>
        </View>
        <View style={styles.row}>
        <Button text="/" onPress={()=>btnPress('/')}/>
        <Button text="*" onPress={()=>btnPress('*')}/>
        <Button text="C" onPress={()=>btnPress('C')}/>
        <Button text="=" onPress={()=>btnPress('=')}/>
        </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Button = ({text , onPress})=>{
  return(
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
  )
}