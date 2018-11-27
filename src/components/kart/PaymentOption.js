import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const PaymentOption =  ({options, value, onChange, totalCost}) => {
    return(        
        <div classsName="container">
            <div className="well well-sm">
                <form>
                    <SelectInput name="paymentType" label="Payment Option" 
                        defaultOption="Payment Option" 
                        options={options} 
                        value={value} size="30" placeholder="Payment Option" onChange={onChange} />
                </form>
                <p className="text-primary text-left"><strong>Total Cost :</strong> {totalCost}</p>
            </div>
            <div classsName="row">                
                <div className="">
                    <div className="well well-sm">
                        
                    </div>                
                </div>
            </div>    
        </div>        
    );
}

PaymentOption.propTypes={
    totalCost: PropTypes.number.isRequired    
}

export default PaymentOption; 