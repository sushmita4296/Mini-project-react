import React from "react";
class AddContact extends React.Component{
  render(){
    return(
      <div className="ui main">
        <h2>Form</h2>
        <form className="ui form">
          
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="email" />
          </div>
          <button className="ui button blue">Add info</button>
        </form>
      </div>
    )
  }
}
export default AddContact;