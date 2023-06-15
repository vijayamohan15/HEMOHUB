import React, { Component } from "react";
import Axios from "axios";



export default class RequestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodGroup: [],
      req_blood: "A+ve",
      req_unit: 0,
      req_reason:"Accident",
      req_status:"Fit",
    };
    this.handleChange = this.handleChange.bind(this);
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    this.setState({
      bloodGroup: [
        { id: "A+ve", label: "A+ve" },
        { id: "A-ve", label: "A-ve" },
        { id: "B+ve", label: "B+ve" },
        { id: "B-ve", label: "B-ve" },
        { id: "AB+ve", label: "AB+ve" },
        { id: "AB-ve", label: "AB-ve" },
        { id: "O+ve", label: "O+ve" },
        { id: "O-ve", label: "O-ve" },
        { id: "PNull", label: "PNull" },
      ],
    });
  }

  //
  handleChange = (e) => {
    this.setState({ req_blood: e.target.value }, () => {
      console.log("blood_requested : " + this.state.req_blood);
    });
  };

  updateUnit = (e) => {
    this.setState(
      {
        req_unit: e.target.value,
      },
      () => {
        console.log(this.state.req_unit);
      }
    );
  };

  updateReason = (e) => {
    this.setState(
      {
        req_reason: e.target.value,
      },
      () => {
        console.log(this.state.req_reason);
      }
    );
  };

  updateStatus = (e) => {
    this.setState(
      {
        req_status: e.target.value,
      },
      () => {
        console.log(this.state.req_status);
      }
    );
  };

  request = () => {
    Axios.post("http://localhost:3001/request", {
      blood_group: this.state.req_blood,
      unit: this.state.req_unit,
      reason:this.state.req_reason,
      status:this.state.req_status,
    }).then((response)=>{
        if(response.data.message){
            alert(response.data.message);
        }
    });
  };

  render() {
    const { bloodGroup } = this.state;

    let bloodGroupList =
      bloodGroup.length > 0 &&
      bloodGroup.map((blood) => {
        return (
          <option key={blood.id} value={blood.id}>
            {blood.label}
          </option>
        );
      });

    return (
      <div className="request">
        <form>
          <select value={this.state.req_blood} onChange={this.handleChange}>
            {bloodGroupList}
          </select>
          <input type="number" placeholder="UNIT" onChange={this.updateUnit} />
          <input type="text" placeholder="REASON" onChange={this.updateReason}/>
          <input type="text" placeholder="STATUS" onChange={this.updateStatus}/>
          <button onClick={this.request} >REQUEST</button>
        </form>
      </div>
    );
  }
}
