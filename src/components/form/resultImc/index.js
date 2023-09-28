import React from "react"
import { View, Text,TouchableOpacity,Share } from "react-native"
import styles from "./style"

export default function ResultImc(props) {

  const onShare= async () =>{
    const result= await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc + props.classificationImc, 
    })
    
  }

  return (
    <View style={styles.contextImc}>
      <View style={styles.boxSharebutton}>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.resultImc}>{props.resultImc}</Text>
        <Text style={styles.classification}>{props.classificationImc}</Text>

        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
