import React, { useEffect, useState } from 'react'
import './Spinner.scss';

function Spinner({ loading }) {
  return (
    <div class={loading ? "loader" : 'fondu'}>
        <div class="circle1"></div>
    </div>
  )
}

export default Spinner
