import React from 'react'
import "./dash.css"
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="" style={{with:"900px",border:"2px solid black",backgroundColor:"white"}}>
    <h1>Data Table</h1>
    <table>
      <thead>
        <tr>
          <th>Students</th>
          <th>Universities</th>
          <th>Organizations</th>
          <th>Programs</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>SUZA</td>
          <td>Computer science</td>
          <td>IT</td>
          <td><button className="btn-approve">Approve</button>
            <button className="btn-reject">Reject</button></td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>janesmith@example.com</td>
          <td>law</td>
          <td>math</td>
          <td><button className="btn-approve">Approve</button>
            <button className="btn-reject">Reject</button></td>
        </tr>
        <tr>
          <td>Mike Johnson</td>
          <td>mikejohnson@example.com</td>
          <td>28</td>
          <td>rrrr</td>
          <td><button className="btn-approve">Approve</button>
            <button className="btn-reject">Reject</button></td>
        </tr>
        
      </tbody>
    </table>
    
  </div>
  )
}
