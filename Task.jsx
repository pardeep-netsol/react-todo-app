import React from 'react';

var Task = React.createClass({
  getInitialState: function(){
    return{
      tasks: this.props.tasks
    }
  },
  removeTask: function(task, e){
    this.props.deleteTask(task)
  },

  render: function(){
    return(
      <ul id="sortable" className="list-unstyled">
        {
          this.props.tasks.map(function(task, $index){
            return  <li className="ui-state-default" key={$index}>
                      <div className="checkbox">
                        <label><input type="checkbox" checked={false} onChange={this.removeTask.bind(this, task)}/>{task}</label>
                      </div>
                    </li>
          }.bind(this))
        }
      </ul>
    );
  }
}) 
export default Task;
