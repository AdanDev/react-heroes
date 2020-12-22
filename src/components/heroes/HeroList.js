import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    
    //const heroes = getHeroesByPublisher(publisher);
    //Se lanza useMemo unicamente si el publisher cambia
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); 

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map(hero => (
                   <HeroCard 
                       key={hero.id}
                       {...hero}
                    />
               ))
           } 
        </div>
    )
}
