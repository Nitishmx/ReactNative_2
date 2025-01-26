import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Modal,
  Button
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const Transfer = () => {
  const [data, setData] = useState(false);
  function ModalHandler() {
    setData(true);
  }
  return (
    <View>
      <Modal transparent={true} visible={data} animationType="fade">
        <View style={styles.modalstyle}>
          <Text style={{fontSize:20,color:"white"}}>Sucessful transfer</Text>
          <Pressable onPress={()=>setData(false)}>
          <Text style={styles.modalButton}>Close</Text>

          </Pressable>
        </View>
      </Modal>
      <View style={styles.main}>
        <StatusBar backgroundColor="red" />
        <View style={styles.container}>
          <TextInput placeholder="Account Number" style={styles.inputfield} />
          <TextInput placeholder="Bank Name" style={styles.inputfield} />
          <TextInput placeholder="IFSC" style={styles.inputfield} />
          <View style={styles.inputVerify}>
            <TextInput
              placeholder="Beneficiary Name"
              style={{ fontSize: 20 }}
            />
            <Text
              style={{
                marginEnd: 4,
                fontSize: 18,
                color: "blue",
                fontWeight: 800,
              }}
            >
              Verify
            </Text>
          </View>
          <TextInput placeholder="Amount" style={styles.inputfield} />
          <View style={styles.NeftImps}>
            <Text style={styles.imps}>IMPS</Text>
            <Text style={styles.imps}>NEFT</Text>
            <Text style={styles.imps}>RTGS</Text>
          </View>
          <TextInput placeholder="Confirm Amount" style={styles.inputconfirm} />
        </View>
        <View>
          <Text style={styles.border}></Text>
          <Pressable style={styles.Pressable} onPress={ModalHandler}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              Transfer
            </Text>
          </Pressable>
          <View style={styles.boxcreate}>
            <Text style={{ textAlign: "center" }}>
              Last Successful remittance to beneficiary was made on
            </Text>
            <Text style={{ textAlign: "center" }}>
              09 Mar 2022 at 13:19:16 hours
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10,
  },
  inputfield: {
    padding: 14,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    fontSize: 20,
    opacity: 0.2,
  },
  inputVerify: {
    flexDirection: "row",
    padding: 4,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    opacity: 0.2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  NeftImps: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 6,
    // opacity:0.4,
    flexDirection: "row",
    gap: 10,
    width: 200,
    opacity: 0.2,
  },
  imps: {
    margin: 4,
    shadowColor: 'black',
  },
  inputconfirm: {
    padding: 14,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    fontSize: 20,
    opacity: 0.2,
    marginBottom: 100,
  },
  border: {
    borderColor: "black",
    opacity: 0.2,
    width: "100%",
    borderBottomWidth: 2,
  },
  main: {
    marginTop: 40,
    // display:(data?"none":"visible")
  },
  Pressable: {
    padding: 14,
    margin: "auto",
    borderColor: "#f0f0f0",
    backgroundColor: "blue",
    width: 340,
    borderRadius: 8,
    marginTop: 20,
  },
  boxcreate: {
    backgroundColor: "lightsteelblue",
    width: 378,
    margin: "auto",
    marginTop: 10,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 2,
  },
  modalstyle:{
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center",
    width:300,
    margin:"auto",
    borderRadius:10,
    height:400,
    gap:40
  },
  modalButton:{
    padding: 14,
    margin: "auto",
    borderColor: "#f0f0f0",
    backgroundColor: "blue",
    width: 240,
    borderRadius: 8,
    marginTop: 20,
    color:"white",
    textAlign:"center",
    fontSize:20
  }
});
