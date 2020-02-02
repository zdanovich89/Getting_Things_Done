import React from "react";

export class Inbox extends React.Component {
  state = {
    tasks: [
        { title: "Kill Bill", isFocus: false },
        { title: "Kill all", isFocus: true },
        { title: "Kill all", isFocus: true },
        { title: "Kill all", isFocus: false },
        { title: "Kill all", isFocus: true },
        { title: "Kill all", isFocus: true }
    ]
  };

  render() {
    return (
        <div className="InboxWrapper">
            <h2 className="InboxHeader">Inbox</h2>
            <div className="NewTask">
                <button>Add new task</button>
            </div>
            {this.state.tasks.map((item, index) => (
                <label className="CheckBoxLabel" key={index}>
                    <p className="LabelItem">{item.title}</p>
                    <input type="checkbox" checked={item.isFocus} />
                    <span className="checkmark"></span>
                </label>        
            ))}
        </div>
    );
  }
}
