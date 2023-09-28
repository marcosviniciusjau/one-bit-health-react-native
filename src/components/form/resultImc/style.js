import { StyleSheet } from "react-native"
import setColor from "../index"
const styles = StyleSheet.create({
  contextImc: {
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    alignItems: "center",
    width: "100%",
  },

  resultImc: {
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },

  information: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },

  classification: {
    color: `${setColor}`,
    fontSize: 15,
  },
  boxSharebutton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shared: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "#ffff",
    flexWeight: "bold",
    paddingHorizontal: 30,
  },
})

export default styles
