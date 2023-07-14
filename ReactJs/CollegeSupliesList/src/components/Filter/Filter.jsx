import React from 'react'
import './Filter.css'

const Filter = ({ filter, setFilter,}) => {
  return (
    <div className="filter">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
      </select>
    </div>
  )
}

export default Filter