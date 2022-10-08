import { useState } from "react"
import ReactHTMLTableToExcel from "react-html-table-to-excel"

import TableRows from "./TableRows"
function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([])

  const addTableRows = () => {
    const rowsInput = {
      fullName: "",
      emailAddress: "",
      salary: ""
    }
    setRowsData([...rowsData, rowsInput])
  }
  const deleteTableRows = index => {
    const rows = [...rowsData]
    rows.splice(index, 1)
    setRowsData(rows)
  }

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target
    const rowsInput = [...rowsData]
    rowsInput[index][name] = value
    setRowsData(rowsInput)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table" id="emp-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Salary</th>
                <span>
                  <button className="btn btn-outline-success" onClick={addTableRows}>
                    +
                  </button>
                </span>
              </tr>
            </thead>
            <tbody>
              <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
            </tbody>
          </table>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <ReactHTMLTableToExcel className="btn btn-info" table="emp-table" filename="emp excel table" sheet="sheet" buttonText="export data to excel " />
    </div>
  )
}
export default AddDeleteTableRows
