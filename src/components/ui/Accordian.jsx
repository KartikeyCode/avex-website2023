import React from 'react'

const Accordian = ({heading, paragraph}) => {
    return (
        <div className="collapse text-base-100">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-2xl font-medium">{heading}</div>
            <div className="collapse-content"><p>{paragraph}</p></div>
        </div>
    )
}

export default Accordian