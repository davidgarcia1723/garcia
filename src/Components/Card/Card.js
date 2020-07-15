import React from 'react';

const Card = ( { website } ) => (
                     
        <div className="card">
        <article className={website.type}>
            <img src={website.img} alt={website.alt} />
            <h1>{website.name}</h1>
            <p>{website.description}</p>
            <br />
            <a className="btn" href={website.link}>Site</a>
            <a className="btn" href={website.github}>Github</a>
            </article>
        </div>
   
);

export default Card; 