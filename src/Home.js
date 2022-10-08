import React, { Component } from "react"
import data from "./data"
import ReactHTMLTableToExcel from "react-html-table-to-excel"
export default class Home extends Component {
  render() {
    return (
      <section className="py-4 container">
        <div className="row justify-content-center">
          <table className="table table-striped" id="emp-table">
            <thead>
              <tr>
                <td>EmpId</td>
                <td>name</td>
                <td>age</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.empId}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <ReactHTMLTableToExcel className="btn btn-info" table="emp-table" filename="emp excel table" sheet="sheet" buttonText="export data to excel " />
        </div>
      </section>
    )
  }
}
