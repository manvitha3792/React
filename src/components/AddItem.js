import React, { Component } from 'react'


export default class AddItem extends Component {
    constructor(props){
        super(props)
        this.state ={
            id: 1,
            item: ''
        }
    }
    handleInput= ( e) =>{
        e.preventDefault();
        
        this.setState({
            item: e.target.value
        })
        console.log("Handle Input", this.state.id, this.state.item)
    }
    addItem = () =>{
        // e.preventDefault();
        let oldId = this.state.id;
        oldId++;
        this.setState({
            ...this.state, 
            id: oldId
        })

        this.props.addItemto_todoList({...this.state})
    }

    componentDidMount(){
        console.log("Add Item in Add Item Component", this.state)

    }
    render() {
        return (
            <div>
                <h1>To do List</h1>
                <input type="text" value={this.state.item} onChange={this.handleInput}></input>
                <button type="Submit" onClick={this.addItem}>Add</button>
            </div>
        )
    }
}
