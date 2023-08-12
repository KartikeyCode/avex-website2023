import React from 'react'

const Card = (props) => {

    const textColours = {
        green: "text-[#08d99d]",
        purple: "text-[#CB04DC]",
        pink: "text-[#FC0A7C]",
        yellow: "text-[D9D223]",
        blue: "text-[#0568FD]",
    }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body gap-4">
        <div className="badge badge-neutral text-xl py-4 px-16 self-center">{props.badge}</div>
        <h2 className={`card-title ${textColours[props.colour]}`}>{props.heading}</h2>
        <p>{props.details}</p>
        <div className="card-actions">
        <a href='/' className={`${textColours[props.colour]}`} >Learn more →</a>
        </div>
    </div>
    </div>
  )
}

export default Card