// import React, {useState} from 'react';
// import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
// import {Provider} from 'react-redux';
// import store from './src/store';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     let newCount = count + 1;
//     setCount(newCount);
//   };
//   const decrement = () => {
//     let newCount = count - 1;
//     setCount(newCount);
//   };

//   return (
//     <Provider store={store}>
//       <SafeAreaView style={styles.container}>
//         <View style={{flexDirection: 'row'}}>
//           <Text
//             style={{color: 'red', paddingRight: 5, fontSize: 16}}
//             onPress={decrement}>
//             {'-'}
//           </Text>
//           <Text style={{fontSize: 16, color: 'gray', fontWeight: 'bold'}}>
//             {count}{' '}
//           </Text>

//           <Text
//             style={{color: 'red', paddingLeft: 5, fontSize: 16}}
//             onPress={increment}>
//             {'+'}
//           </Text>
//         </View>
//       </SafeAreaView>
//     // </Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// import React, {useState} from 'react';
// import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
// import {Provider} from 'react-redux';
// import store from './src/store';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     let newCount = count + 1;
//     setCount(newCount);
//   };
//   const decrement = () => {
//     let newCount = count - 1;
//     setCount(newCount);
//   };

//   return (
//     <Provider store={store}>
//       <SafeAreaView style={styles.container}>
//         <Button title={'Increment'} onPress={increment} />
//         <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
//           {"+"}
//         </Text>
//         <Button title={'Decrement'} onPress={decrement} />
//       </SafeAreaView>
//     </Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// import React, {useState} from 'react';
// import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     if (count == 0) {
//       setCount = count + 1;
//     }
//     const decrement = () => {
//       if (count == 0) {
//         setCount = count - 1;
//       }
//     }
//   }
// }
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  const decrement = () => {
    let newCount = count - 1;
    setCount(newCount);
  };
    
  return (
    <SafeAreaView style={styles.container}>
      <Button title={'+'} onPress={increment} />
      <Text>{'' + count}</Text>
      <Button title={'-'} onPress={decrement} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
