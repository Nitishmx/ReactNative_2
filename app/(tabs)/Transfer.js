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
  const [account,setAccount]=useState("")
  const [ifsc,setIfsc]=useState("")
  const [amount,setAmount]=useState("")
  function ModalHandler() {
    setData(true);
  }
  return (
    <View>
      <Modal transparent={true} visible={data} animationType="fade">
        <View style={styles.modalstyle}>
       <View style={{gap:10,marginTop:20}}>
       <TextInput placeholder="Account Number" style={styles.inputfield} value={account} />
        <TextInput placeholder="IFSC" style={styles.inputfield} value={ifsc} />
        <TextInput placeholder="Amount" style={styles.inputfield} value={amount} />
        <Button title="Close" onPress={()=>setData(false)}/>

       </View>
        </View>
      </Modal>
      <View style={styles.main}>
        <StatusBar backgroundColor="red" />
        <View style={styles.container}>
          <TextInput placeholder="Account Number" style={styles.inputfield} value={account} onChangeText={(item)=>setAccount(item)}/>
          <TextInput placeholder="Bank Name" style={styles.inputfield} />
          <TextInput placeholder="IFSC" style={styles.inputfield} value={ifsc} onChangeText={(item)=>setIfsc(item)}/>
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
          <TextInput placeholder="Amount" style={styles.inputfield} value={amount} onChangeText={(item)=>setAmount(item)}/>
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
    backgroundColor:"white",
    width:"100%",
    borderRadius:10,
    gap:20,
    flex:1,
    // marginTop:20,
    padding:10
  
  
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
