import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // this.setState({
    //   [event.target.name]: event.target.value
    // })

    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]:value})
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            placeholder="First Name" 
            onChange={this.handleChange} 
        ></input>
        <br />
        <input 
            type="text" 
            value={this.state.lastName} 
            name="lastName" 
            placeholder="Last Name" 
            onChange={this.handleChange} 
        ></input>
        {
          /**
           * Other useful form elements:
           * 
           * <textarea /> element
           * <input type="checkbox" />
           * <input type="radio" />
           * <select> and <option> elements
           */
        }

        <textarea 
          value={"Some default value"}
          onChange={this.handleChange}
        />

        <br />

        <label>
          <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}>
          </input> Is friendly?
        </label>

        <label>
          <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}>
          </input> Male
        </label>

        <label>
          <input type="radio" name="gender" value="female"  checked={this.state.gender === "female"} onChange={this.handleChange}>
          </input> Female
        </label>
        {/* Formik */}

        <label>Favorite Color:</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name = "favColor" 
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favourite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    )
  }
  
}

export default App