import React from 'react';

const Card = ( { website } ) => (
                     
        <div className="card">
        <article className={website.type}>
            <a href={website.link}><img src={website.img} alt={website.alt} /></a>
            <h1>{website.name}</h1>
            <p>{website.description}</p>
            <div className="btn">
            <a href={website.link}>Site</a>
            <a href={website.github}>Github</a>
            </div>
            
            </article>
        </div>
   
);

export default Card; 