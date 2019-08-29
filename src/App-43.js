import React, {Component} from "react"

/**
 * Challenge: wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: null,
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" 
    ? this.setState({
         [name]: checked
     })
    : this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <main>
        <form>
          <input 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.handleChange}
            placeholder="First Name" /><br />
          <input 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange}
            placeholder="Last Name" /><br />
          <input 
            name="age" 
            value={this.state.age} 
            onChange={this.handleChange}
            placeholder="Age" /><br />

          {/* Create radio buttons for gender here */}<br />
          <label>
            <input 
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange} />Male
          </label>
          <br />
          <label>
            <input 
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange} />Female
          </label>

          {/* Create select box for location here */}<br />

          <select value={this.state.destination}
            name="destination"
            onChange={this.handleChange}>
            <option value="">--Please Choose a destination --</option>
            <option value="germany">germany</option>
            <option value="norway">norway</option>
            <option value="north">north</option>
            <option value="south">south</option>
          </select>

          {/* Create check boxes for dietary restictions here */}

          <label>
            <input 
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            /> Vegan ?
          </label><br />

          <label>
            <input 
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            /> Lactose Free ?
          </label> <br />

          <label>
            <input 
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            /> Kosher ?
          </label><br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information : </h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}{ /* First and last name here */}</p>
        <p>Your age {this.state.age} {/* Age here */}</p>
        <p>Your gender {this.state.gender} {/* Gender here */}</p>
        <p>Your destination:  {this.state.destination}{/* Destination here */}</p>
        <p>
          Your dietary restictions:
          Vegan: {this.state.isVegan ? "Yes" : "No"}
          Kosher: {this.state.isKosher ? "Yes" : "No" }
          Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    )
  }
  
}

export default App