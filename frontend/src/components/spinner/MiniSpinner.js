import React from 'react'
import './MiniSpinner.css'

const Spinner = () => (
    <div style={{ display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
)
    
export default Spinner