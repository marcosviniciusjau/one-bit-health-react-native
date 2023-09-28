import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura!")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])
  const [color,setColor]= useState(null)
  const [classificationImc, setClassificationImc] = useState(null)
  function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2)
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
    setImc(totalImc)
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate()
      setErrorMessage("Campo obrigatório *")
    }
  }
  function classificationImcMessages() {
    if (imc < 18.5) {
      setClassificationImc("Abaixo do peso")
      setColor("red")
    }
    if ((imc > 18, 5 && imc < 24, 9)) {
      setClassificationImc("Saudável")
    }
    if ((imc > 25 && imc < 29, 9)) {
      setClassificationImc("Sobrepeso")
    }
    if ((imc > 30 && imc < 34, 9)) {
      setClassificationImc("Obesidade Classe 1")
    }
    if ((imc > 35 && imc < 39, 9)) {
      setClassificationImc("Obesidade Classe 2")
    }
    if (imc >= 40) {
      setClassificationImc("Obesidade Classe 3")
    }
  }

function validationImc() {
  console.log(imcList)
  if (weight != null && height != null) {
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu IMC é igual:")
    classificationImcMessages(setClassificationImc())
    setTextButton("Calcular Novamente")
    setErrorMessage(null)
  } else {
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura!")
  }
}

return (
  <View style={styles.formContext}>
    {imc === null ? (
      <Pressable onPress={Keyboard.dismiss} style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 50.365"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            validationImc()
          }}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </Pressable>
    ) : (
      <View style={styles.exhibitionResultImc}>
        <ResultImc messageResultImc={messageImc} resultImc={imc} classificationImc={classificationImc} color={setColor}/>
        
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            validationImc()
          }}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
    )}
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.listImcs}
      data={imcList.reverse()}
      renderItem={({ item }) => {
        return (
          <Text style={styles.resultImcItem}>
            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
            {item.imc}
          </Text>
        )
      }}
      keyExtractor={(item) => {
        item.id
      }}
    />
  </View>
)
}