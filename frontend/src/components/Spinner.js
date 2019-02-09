import React from 'react'
import './Spinner.css'

const Spinner = () => (
<div style={{height:'593px', marginTop: '24px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <div className="lds-ripple"><div></div><div></div></div>
</div>)
    
export default Spinner