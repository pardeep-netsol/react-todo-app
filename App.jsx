import React from 'react';
import Task from './Task.jsx';

var App = React.createClass({
  getInitialState: function(){
  	return{
  		task: '',
  		tasks: ['task1', 'task2'],
  		completed: ['task3']
  	}
  },

  setValue:function(e){
  	this.setState({task: e.target.value})
  },

  insertTask:function(e){	
  	e.preventDefault();
  	if(this.state.task.trim().length != 0){
  		this.state.tasks.push(this.state.task)
  		this.setState({tasks: this.state.tasks, task: ''})
  	}
  },

  removeTask: function(task){
  	var tasks = []
  	this.state.tasks.map(function(t){
  		if (t != task){
  			tasks.push(t);
  		}
  	}.bind(this))
  	this.state.completed.push(task)
  	this.setState({tasks: tasks, completed: this.state.completed})
  },

  moveInTodo: function(com, e){
  	this.state.completed.map(function(c){
  		if(c == com){
  			this.state.tasks.push(c)
  			this.state.completed.pop(c)
  		}
  	}.bind(this))
  	this.setState({tasks: this.state.tasks, completed: this.state.completed})
  },

  markAllDone: function(){
  	this.state.tasks.map(function(t){
  		this.state.completed.push(t)
  	}.bind(this))
		// this.state.tasks.splice(0,this.tasks)
  	this.setState({tasks: [], completed: this.state.completed})
  	// this.refs.list.emptyTask();
  },

  render: function() {
    return (
      <div className="container">
		    <div className="row">
	        <div className="col-md-6">
            <div className="todolist not-done">
            	<h1>Todos</h1>
            	<form onSubmit={this.insertTask}>
            		<input type="text" className="form-control add-todo" placeholder="Add todo" value={this.state.task} onChange={this.setValue}/>
            	</form>
            	<button id="checkAll" className="btn btn-success" onClick={this.markAllDone}>Mark all as done</button>
                    
              <hr/>
              <Task tasks={this.state.tasks} deleteTask={this.removeTask} ref='list'/>
              <div className="todo-footer">
                <strong><span className="count-todos"></span></strong>{this.state.tasks.length} Items Left
              </div>
            </div>
	        </div>
	        <div className="col-md-6">
            <div className="todolist">
  	          <h1>Already Done</h1>
              <ul id="done-items" className="list-unstyled">
              {
              	this.state.completed.map(function(com, $index){
              		return <li key={$index}>{com} <button className="remove-item btn btn-default btn-xs pull-right" onClick={this.moveInTodo.bind(this, com)}><span className="glyphicon glyphicon-remove"></span></button></li>
              	}.bind(this))
              }                
              </ul>
            </div>
	        </div>
		    </div>
			</div>
    );
 	}
})

export default App;