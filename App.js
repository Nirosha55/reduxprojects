import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  const decrement = () => {
    // if (count > 0) {
    let newCount = count - 1;
    setCount(newCount);
    // }
  };

  return (
    <View style={styles.container}>
      <Button title={'Increment'} onPress={increment} />
      <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
        {'Count:' + count}{' '}
      </Text>
      <Button title={'Decrement'} onPress={decrement} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// import React from 'react';
// import AppStack from './navigations/appStack';
// import {Provider} from 'react-redux';
// import {store} from './store/store';

// const App = () => (
//   <Provider store={store}>
//       <AppStack />
//   </Provider>
// );

// export default App;
