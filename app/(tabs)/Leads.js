import { FlatList, Pressable, StyleSheet, Text, View ,Image } from "react-native";
import React, { useEffect, useState } from "react";
const Leads = () => {
    const [dataapi, setDatapi] = useState();
  const apidata ="https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  useEffect(() => {
    fetch(apidata)
      .then((data) => data.json())
      .then((respose) => {
        setDatapi(respose.data);
      })
      .catch((error) => console.log("some error create :", error));
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.leadsbar}>
        <Text style={styles.text}>Your Leads</Text>
        <Text style={styles.text}>FILTER</Text>
      </View>
      <FlatList
        data={dataapi}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardtext}>{item.Nation}</Text>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <View style={styles.buttoncard}>
                <Pressable style={styles.cardimage}>
                  <Text style={styles.textcaard}>3sigma</Text>
                </Pressable>
                <Pressable style={styles.cardimage}>
                  <Text style={styles.textcaard}>New Lead</Text>
                </Pressable>
                <Pressable style={styles.cardimage}>
                  <Text style={styles.textcaard}>Warm</Text>
                </Pressable>
                
              </View>
              <Image style={styles.logo} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRddwTi2U4CQR95W8w7CY8SRqOydMuAD7jwQ&s"}}/>
            </View>
            <Text style={styles.lasttext}>Population:{item.Population}</Text>
            <Text style={styles.lasttext}>{item.Year}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Leads;

const styles = StyleSheet.create({
  leadsbar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
  },
  container: {
    margin: 10,
  },
  card: {
    backgroundColor: "#e1e5e6",
    borderRadius: 10,
    gap: 8,
    padding: 16,
    marginTop: 20,
  },
  cardtext: {
    fontSize: 20,
  },
  buttoncard: {
    flexDirection: "row",
    gap: 10,
  },
  cardimage: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 4,
  },
  lasttext: {
    fontSize: 20,
  },
  textcaard: {
    color: "white",
    borderRadius: 50,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius:16,
    // backgroundColor:"black"
  },
});
