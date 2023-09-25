import React, {useState}from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./resultImc/"

export default function Form() {

  const [height,setHeight] = useState(null)
  const [weight,setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura!")
  const [imc,setImc] = useState(null)
  const [textButton,setTextButton] = useState("Calcular")
  
  function imcCalculator(){
    return setImc((weight/(height*height)).toFixed())
  }

  function validationImc(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      return
    }
    else{
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura!")
    }
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 50.365"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <Button
        onPress={()=> validationImc()} 
        title={textButton}
        />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  )
}
