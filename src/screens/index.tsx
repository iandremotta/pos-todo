import React, {useState, useEffect, useCallback} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './components/task';
import {styles} from './styles';
import {debounce} from 'lodash'

interface Task {
  id: number; 
  name : string;
  state: 'todo' | 'doing' | 'completed';
}

const Home = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');



  function handleTaskAdd(){   
    if(taskName == ''){
        return;
    }
    const date = new Date();
    let props : Task = {
        id: date.getTime(), 
        name: taskName, 
        state: 'doing'
    };
    setTasks(prevState=>[...prevState, props])
    setTaskName('');
  }

  function handleTaskRemove(id: number)
    {
        return Alert.alert("Remover", `Tem certeza que deseja remover a task? ${taskName}`,[{text: 'Sim', onPress:()=> setTasks(prevState => tasks.filter(tasks => tasks.id !== id))},{text: 'Não',
        style: 'cancel'}
        ]);
    }

    const filteredData: Task[] = taskName
    ? tasks.filter(x =>
        x.name.toLowerCase().includes(taskName.toLowerCase())
      )
    : tasks;
    //    const handler = useCallback(debounce(filteredData, 1000), []);

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Digite sua tarefa'                     placeholderTextColor={'#6B6B6B'}
            onChangeText={name => setTaskName(name)}
            value={taskName}
            />
            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        <FlatList 
            data={filteredData}
            keyExtractor={item=>String(item.id)}
            renderItem={({item})=>(
            <Task   
                name={item.name} 
                state={item.state}
                onRemove={()=> handleTaskRemove(item.id)}                
            />
            )}
            ListEmptyComponent={()=>(
                <Text style={styles.listEmptyText}>Nenhuma tarefa adicionada.</Text>
            )}
            >
        </FlatList>
    </View>
    )};

export default Home;