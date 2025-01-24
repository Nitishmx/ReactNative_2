import {Pressable,StyleSheet,Text,TextInput,View,Image,FlatList,} from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import { cardlist } from "./data";//json data import
const MoneyTransfer = () => {
  let [list, setList] = useState(cardlist);
  let [input, setInput] = useState("");

//   input field function implement
  function HandlerInput(item) {
    setInput(item.toLowerCase());
  }


//   short search-process
  useEffect(() => {
    let namedd = cardlist.filter((item) => {
      return item.name.toLowerCase().includes(input);
    });
    setList(namedd);
    // console.log(namedd,"asdfasf")
  }, [input]);


  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={styles.tabtext}>Remitter Detail</Text>
        <Text style={styles.tabtext2}>Transfer History</Text>
      </View>
      {/* card */}
      <View style={styles.cardBox}>
        <View style={styles.cardtitle}>
          <Text style={styles.ishani}>Ishani Deshpande</Text>
          <View style={styles.imageicon}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/764/764599.png",
              }}
              style={styles.imagestyles}
            />
            <Text style={styles.edit}>Edit</Text>
          </View>
        </View>
        <Text style={styles.number}>+918920986811</Text>
        {/* PROGRESS BAR */}
        <View>
          <View style={styles.progresstitle}>
            <Text style={styles.textopacity}>Remaining Limit</Text>
            <View style={styles.amount}>
              <Text style={styles.edit}>₹ 13,721</Text>
              <Image
                source={{
                  uri: "https://miro.medium.com/v2/resize:fit:512/1*a7MAtY2Qks-tkjpoeihTkA.png",
                }}
                style={styles.imagestyles}
              />
            </View>
          </View>
          <Progress.Bar
            progress={0.6}
            width={330}
            style={styles.progressline}
          />
        </View>

        {/* add beneficiary */}
      </View>
      <Pressable style={styles.beneficiarybor}>
        <Text style={styles.beneficiarytext}>Add Beneficiary +</Text>
      </Pressable>
      <Pressable style={styles.Pressablebtn}>
        <Image
          source={{
            uri: "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png",
          }}
          style={styles.imagestyles}
        />
        <TextInput
          placeholder="Search Beneficiary"
          style={styles.inputfield}
          onChangeText={(item) => HandlerInput(item)}
        />
      </Pressable>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.contactlist}>
            <View style={styles.cardstylefirst}>
              <Text>{item.name}</Text>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3405/3405244.png",
                }}
                style={styles.imagestyles}
              />
            </View>
            <View style={styles.cardbanklist}>
              <Text>Federal Bank</Text>
              <View style={styles.teleiconstyle}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/premium-vector/telegram-icon-illustration-telegram-app-logo-social-media-icon_561158-3638.jpg",
                  }}
                  style={styles.imagestyles}
                />
                <Text style={styles.texttelegram}>Transfer</Text>
              </View>
            </View>
            <Text>A/C:****5748</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MoneyTransfer;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tab: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
   
  },
  tabtext: {
    fontSize: 20,
    color:"#050dfa",
    borderBottomWidth:4,
    borderColor:"#050dfa"
  },
  tabtext2: {
    fontSize: 20,
    opacity:0.4


  },
  cardBox: {
    backgroundColor: "#d9d1d0",
    borderRadius: 8,
    padding: 10,
    marginVertical:10
  },
  cardtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagepencile: {
    width: 10,
    height: 10,
  },
  number: {
    fontSize: 22,
    marginVertical: 2,
    fontWeight:"800"
  },
  progresstitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  beneficiarybor: {
    padding: 16,
    borderRadius: 4,
    width: 350,
    margin: "auto",
    marginTop: 8,
    borderWidth: 0.4,
  },
  inputfield: {
    fontSize: 20,
    opacity:0.6
  },
  contactlist: {
    borderWidth: 0.2,
    marginVertical: 8,
    padding: 10,
    borderRadius: 4,
    boxShadow:"box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
  },
  Pressablebtn: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    borderWidth: 0.4,
    width: 350,
    margin: "auto",
    marginTop: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor:"F5F6FA"
  },
  imageicon: {
    gap: 10,
    flexDirection: "row",
  },
  imagestyles: {
    width: 20,
    height: 20,
   
  },
  edit:{
    fontWeight:800
  },
  textopacity: {
    opacity: 0.5,
    fontSize: 18,
  },
  amount: {
    flexDirection: "row",
    gap: 8,
  },
  beneficiarytext: {
    textAlign: "center",
    color: "blue",
    fontWeight: 800,
  },
  cardstylefirst: {
    flexDirection: "row",
    gap: 20,
  },
  cardbanklist: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teleiconstyle: {
    flexDirection: "row",
    gap: 10,
    borderWidth:1,
    padding:8,
    borderRadius:50
  },
  ishani:{
    fontWeight:"bold",
    fontSize:20
  },
  texttelegram:{
    fontWeight:800
  }
});
