

import { useState } from 'react';
import {FaUser} from 'react-icons/fa';
export default function Queueform({ onAdd }) {
 const [customerName, setCustomerName] = useState('');
 const [serviceType, setServiceType] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(customerName.trim() && serviceType.trim()){
            onAdd({ customerName, serviceType });
            setCustomerName('');
            setServiceType('');
        }
    }
 return (
   <div>
     <form onSubmit={handleSubmit} className='queue-form'>
        <h2>Add Customer to Queue</h2>
        <div className='form-group'>
       <input

         type="text"
         placeholder="Customer Name"
         value={customerName}
         onChange={(e) => setCustomerName(e.target.value)}
       /></div>
         <div className='form-group'>
            <select value={serviceType} onChange={(e)=>setServiceType(e.target.value)}>
                <option value="">Select Service Type</option>
                <option value="Banking">Banking</option>
                <option value="Insurance">Insurance</option>
                <option value="Customer Service">Customer Service</option>
            </select>
         </div>
       <button type="submit">Add to Queue <FaUser/></button>
     </form>
   </div>
 )
}