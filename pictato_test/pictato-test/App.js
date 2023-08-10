import React from 'react';
import { View, Text } from 'react-native';
import Main from './components/main';


const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{flex:1, backgroundColor: 'tomato'}}>당신의 시간을 기록해보세요</Text>
      <Main style={{flex: 2}}/> 
    </View>
  );
};

export default App;