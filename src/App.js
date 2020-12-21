import React, { Component }  from 'react';
import ListItems from './ListItems';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text:'',
        key: ''
      },
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  
  
  


  deleteItem(key) {
    const filteredItem = this.state.items.filter(item => item.key !== key);
    this.setState({ items: filteredItem });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })

  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text) {
      const items = [...this.state.items, newItem];
      this.setState({ 
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
   } 
  }
  render(){
    return (
      <div className="app">
        <header>
          <h1>To Do List </h1>
          <form id="to-do-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter Your To Do"
              value={this.state.currentItem.text}
              onChange={this.handleInput}/>
            <button>Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
       
      </div>
    );
  }
   
}

export default App;