// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import Secon from "./Secon"
// import Exstylesfirst from "./style"
// const index = () => {
//   let first=1
//   let[data,setData]=useState(0)
//   let[value,setValue]=useState(false)
//   const  abc=()=>{
//     return console.log("first function create");

//   }
//   function handler(){
//     console.log("event run");
//     setData(data+10)
//     setValue(!value)

//   }
//   return (
//    <View>
//        <Text style={{color:"red"}}>index{first}</Text>
//        <Text>Value :{data}</Text>
//        <Text>{abc()}</Text>
//        <Secon somedata={"child component"}/>
//        <Secon/>
//        <Button title={value?"Press-Here":"False"} onPress={handler} color={"red"}></Button>

//    </View>

//   )
// }

// export default index

// const styles = StyleSheet.create({})

// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'

// const index = () => {
//   let[val,setVal]=useState()
//   var d
//   function inputHandler(a){
//     //  setVal(a)
//     d=a

//   }
//   function handler(){
//     console.log("hye");
//     setVal(d)

//   }
//   return (
//     <View>
//       <Text>Input field handle using usestate</Text>
//       <TextInput placeholder='Enter your Name' style={styles.inputstyle} onChangeText={(text)=>inputHandler(text)} value={val}/>
//       <Button title='Submit' onPress={handler}></Button>
//       <Text>{val}</Text>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({
//   inputstyle:{
//   fontSize:24,
//   color:"blue",
//   borderBlockColor:"red",
//   margin:14
//   }
// })

// form crete and input field handle
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'
// const index = () => {
//   let[name,setName]=useState()
//   let[last,setLast]=useState()
//   let[email,setEmail]=useState()
//   let[password,setPassword]=useState()
//   function formHandler(){
//     console.log(name);
//     setName("")
//     setLast("")
//     setEmail("")
//     setPassword("")

//   }
//   return (
//     <View>
//       <Text style={styles.heading}>User Data Collect Using Form</Text>
//       <TextInput placeholder='Enter your name' style={styles.input} value={name} onChangeText={(text)=>setName(text)}/>
//       <TextInput placeholder='Enter your LastName' style={styles.input} value={last} onChangeText={(text)=>setLast(last)}/>
//       <TextInput placeholder='Enter your Email' style={styles.input} value={email} onChangeText={(text)=>setEmail(email)}/>
//       <TextInput placeholder='Enter your Password' style={styles.input} value={password} onChangeText={(text)=>setPassword(password)}/>
//       <Button title='Submit'style={styles.buttonstyle} onPress={formHandler}/>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({
//   heading:{
//     fontSize:24,
//     textAlign:"center",
//     marginTop:10,
//     color:"green",

//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },

// })

// FlatList help list create .

// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   let userData=[{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },]
//   return (
//     <View>
//     <Text style={{fontSize:36}}>List create using Flatlist</Text>
//       <FlatList data={userData} renderItem={({item})=><Text>{item.fruid}</Text>}/>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({})

// map function use create list
// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   let userData=[{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },{
//     id:1,
//     fruid:"Mango"
//   },{
//     id:2,
//     fruid:"Banana"
//   },{
//     id:3,
//     fruid:"Orange"
//   },
//   {
//     id:4,
//     fruid:"Guava"
//   },]
//   return (
//     <View>
//       <Text>index</Text>
//       <ScrollView>
//       {userData.map((item)=>{
//         return(<Text>{item.fruid}</Text>)
//       })}
//       </ScrollView>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({})

// flex help responsive design create

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import FlexStart from "./FlexStart";

// const index = () => {
//   return <View style={{ flex: 1}}>
//      <View style={{flex:1,backgroundColor:"red",flexDirection:"row"}}>
//        <View style={{flex:1,backgroundColor:"white",margin:10}}></View>
//        <View style={{flex:1,backgroundColor:"white",margin:10}}></View>
//        <View style={{flex:1,backgroundColor:"white",margin:10}}></View>
//      </View>
//      <View style={{flex:1,backgroundColor:"green"}}></View>
//      <View style={{flex:1,backgroundColor:"yellow"}}></View>
//      {/* <View style={{flex:1,backgroundColor:"blue"}}></View> */}
//   </View>;
// };

// export default index;

// const styles = StyleSheet.create({});

// modal in react native(dialog box)

// import { Button, Modal, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";

// const index = () => {
//   const[showmodal,setShowmodal]=useState(false)
//   return (
//     <View style={styles.main}>
//       <Modal transparent={true} visible={showmodal} animationType="fade">
//          <View style={styles.centerView}>
//             <View style={styles.modalview}>
//                 <Text style={styles.textstyle}>Hello code step by step</Text>
//                 <Button title="Close" style={styles.buttonstyle} onPress={()=>setShowmodal(false)}/>
//             </View>
//          </View>
//       </Modal>
//       <View style={styles.buttonview}>
//         <Button title="Open Modal" onPress={()=>{setShowmodal(true)}}></Button>
//       </View>
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   buttonview: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   centerView:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"

//   },
//   modalview:{
//     backgroundColor:"skyblue",
//     padding:40,
//     borderRadius:20,
//     shadowColor:"black",
//     elevation:20
//   },
//   textstyle:{
//     fontSize:24,
//     marginBottom:20
//   },
//   buttonstyle:{

//   }
// });

// pressable in react-native

// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <View style={styles.main}>
//         <Pressable
//         onPress={()=>console.warn("normal event fire")}
//          onLongPress={()=>console.warn("long press")}
//          onPressOut={()=>console.warn("press out")}
//          onPressIn={()=>console.warn("press-in event run")}>
//            <Text style={styles.pressableBtn}>Pressable</Text>
//         </Pressable>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//     justifyContent:"center"

//   },
//  pressableBtn:{
//   backgroundColor:"blue",
//   color:"#fff",-
//   padding:10,
//   margin:10,
//   borderRadius:10,
//   fontSize:20,
//   textAlign:"center",
//   shadowColor:"#000",
//   elevation:100

//   }
// })

// status-bar

// import { StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <View>
//        <StatusBar backgroundColor={"red"} barStyle={"dark-content"} hidden={false}/>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({
//   statusbar:{
//     backgroundColor:"red"
//   }
// })

// platform cheacking example (android,ios,window)

// import { Platform, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <View>
//       <Text style={{fontSize:40}}>Platform cheacking :{Platform.OS}</Text>
//       <Text>{JSON.stringify(Platform)}</Text>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({})

// other website or apllication show own phone

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { WebView } from "react-native-webview";

// const index = () => {
//   return (
    
//       <WebView
//         source={{uri:"https://reactnative.dev/docs/environment-setup" }}
//         style={{ flex: 1 }}
//       />
 
//   );
// };

// export default index;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Leads from './Leads'
import MoneyTransfer from './MoneyTransfer'
import Transfer from './Transfer'

const index = () => {
  return (
    <View>
        {/* <Leads/> */}
        {/* <MoneyTransfer/> */}
        <Transfer/>
    </View>
  )
}

export default index

