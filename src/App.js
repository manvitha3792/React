import { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import DisplayToDoList from './components/DisplayToDoList';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
       todoList : []
    }
  }

  addItemto_todoList = ({id,item}) =>{
    let newList = [...this.state.todoList, {id,item}]
    this.setState({
      todoList : newList
    })
    console.log("Inside App add item todo list")
    console.log("Todo List:", this.state.todoList)

  }

  onDeleteTask = (id) => {
    let oldList = this.state.todoList
    let newList = oldList.filter(task => task.id !== id)
    this.setState({
      todoList: newList
    })

  }
  
  render(){
    return (
      <div className="App">
        <AddItem addItemto_todoList ={this.addItemto_todoList}/>

        <DisplayToDoList todoList={this.state.todoList} onDeleteTask={this.onDeleteTask}/>

      </div>
    );
  }

 } 
export default App;
