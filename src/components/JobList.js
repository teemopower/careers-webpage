import React from 'react';
import Job from './Job';
import engineerImage from '../images/engineering.png';
import marketingImage from '../images/marketing.png';
import customerImage from '../images/customer-success.png';

export default function JobList({jobs}) {
    let engineering = [];
    let customerSuccess = [];
    let marketing = [];

    jobs.map(x => {
        if(x.department.name === "Engineering"){
            engineering.push(x)
        }
        if(x.department.name === "Customer Success"){
            customerSuccess.push(x)
        }
        if(x.department.name === "Marketing"){
            marketing.push(x)
        }
        return null;
    })
    
    return (
        <div className="job-card">
            { engineering.length > 0 ? createHeading('Engineering') : null}
            {
                engineering.map((item, index) => {
                    return (
                        <Job key={index} job={item} /> 
                    );
                })
            }
            { customerSuccess.length > 0 ? createHeading('Customer')  : null}
            {
                customerSuccess.map((item, index) => {
                    return (
                        <Job key={index} job={item} />                         
                    );
                })
            }
            { marketing.length > 0 ? createHeading('Marketing')  : null}
            {
                marketing.map((item, index) => {
                    return (
                        <Job key={index} job={item} />                         
                    );
                })
            }
        </div>
    )
}

export function createHeading(title){
    let image;
    switch(title){
        case 'Engineering': 
            image = engineerImage
            break;
        case 'Customer':
            image = customerImage
            break;
        case 'Marketing':
            image = marketingImage
            break;
        default:
            break;
    }
    return (
        <div className="joblist-head">
            <div></div>
            <div className="joblist-group">
                <img src={image} alt="department logo" />
                <div className="joblist-heading">{title}</div>
            </div>
            <div></div>
        </div>
    );
}
