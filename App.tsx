import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Task {
  name : string;
  state: 'todo' | 'doing' | 'completed';
}


const App = (props: Task) => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleTaskAdd(){
    props = {name : taskName, state: 'todo'};
    setTasks(prevState=>[...prevState, props]);
    setTaskName('');
  }

  function handleTaskRemove(taskName: string)
  {
    return Alert.alert("Remover", `Tem certeza que deseja remover a task? ${taskName}`,[{text: 'Sim', onPress:()=> setTasks(prevState => tasks.filter(tasks => tasks.name !== taskName))},{text: 'Não',
    style: 'cancel'}
  ])
  }

  return (
    <SafeAreaView>
      <Text>Todo List</Text>      
      <TextInput placeholder='Digite sua tarefa' onChangeText={setTaskName} value={taskName}></TextInput>
      <TouchableOpacity onPress={handleTaskAdd}><Text>+</Text></TouchableOpacity>
      <FlatList 
        data={tasks}
        keyExtractor={item=>item.name}
        renderItem={({item})=>(
        <View>
          <Text>{item.name} - {item.state}</Text>
          <TouchableOpacity onPress={()=>handleTaskRemove(item.name)}>
            <Text>-</Text>
          </TouchableOpacity>
          </View>)}
          ListEmptyComponent={()=>(
            <Text>Nenhuma tarefa adicionada.</Text>
          )}
        >
      </FlatList>
    </SafeAreaView>
  )};

export default App;
