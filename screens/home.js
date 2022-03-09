



















































// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import Contacts from 'react-native-contacts';
// import {connect} from 'react-redux';

// import { useEffect } from 'react';
// import * as Types from '../store/types';

// const HomeScreen = props => {
//   const [contacts, setContactsList] = useState([]);
  
//   const fetchContactsAsync = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//         {
//           title: 'we required to read our phone contacts',
//           message:
//             'Hii these are contacts list.',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the contacts');

//           Contacts.getAll().then(contacts => {
//         // let newContactList = [];
//             contacts.forEach(contacts => {
//               const phoneNumbersAry = contacts.phoneNumbers;
//               const phoneObj = phoneNumbersAry[0];
//               const obj = {
//                 name: contacts.displayName,
//                 mobile: phoneObj.number,
//               };
//               // newContactList.push(obj);
//               setContactsList(obj);
//             });
//           // contacts returned
//           // console.log('contacts:' ,JSON.stringify(contacts));
//         });
     
//       } else {
//         console.log('cancelled');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   useEffect(() => {
//     fetchContactsAsync();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={{color: 'red', fontSize: 20}}>HII THIS IS HOME SCREEN</Text>
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate('Contacts')}
//         // onPress={() => console.log('contacts')}
//         style={styles.btn}>
//         <Text style={{color: '#fff'}}>Contacts List</Text>
//       </TouchableOpacity>
//       <Text>{contacts.length}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btn: {
//     marginVertical: 10,
//     backgroundColor: 'rgba(81,135,185,1)',
//     padding: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
// });

// const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => ({
//   updateContacts: contacts =>
//     dispatch({
//       type: Types.UPDATE_CONTACTS, payload: {
//         contacts,
//       },
//     }),
// });
// const connectComponent = connect(mapStateToProps, mapDispatchToProps);
// export default connectComponent(HomeScreen);


















 //   // check for contacts permission
  //   const {status} = await PermissionsAndroid.request(PermissionsAndroid.CONTACTS);
  //   let finalStatus = status;
  //   if (finalStatus !== 'granted') {
  //   }

  //   if (finalStatus !== 'granted') return;

  //   const {data} = await Contacts.getContactsAsync();

  //   setContacts(data);

  //   // Save Contacts To Redux
  //   props.updateContacts(data);
  // };