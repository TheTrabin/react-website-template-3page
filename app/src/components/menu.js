import React from 'react';

// MENU OF SERVICES
// Discovery Call (free)- 30 minute call to see if we’re right for each other.
// Cannabis Consultant ($200, 6 sessions)- Personalized cannabis care. Cannabis education and patient care advisor online.
// Infused Chef ($200, 6 sessions)- Making functional food taste good. Can be done with or without cannabis. Recipes personalized for dietary needs.
// Herbal Apothecary ($150, 4 sessions)- *Sage advice* Holistic wellness using herbs, aromatherapy, and medicinal teas.
// Natural Living Coaching ($300, 8 sessions)- Dynamic natural guidance to living your best life.





const Menu = () => {
let menu = {
discovery: { "name": "Discovery Call", "cost": "Free", "description": "30 minute call to see if we’re right for each other."},
consult: { "name": "Cannabis Consultant", "cost": "$200, 6 sessions", "description": "Personalized cannabis care. Cannabis education and patient care advisor online" },
chef: {"name": "Infused Chef", "cost": "$200, 6 sessions", "description": "Making functional food taste good. Can be done with or without cannabis. Recipes personalized for dietary needs." },
apothecary : {"name": "Herbal Apothecary", "cost": "$150, 4 sessions", "description": "*Sage advice* Holistic wellness using herbs, aromatherapy, and medicinal teas." },
coaching : {"name": "Natural Living Coaching", "cost": "$300, 8 sessions", "description": "Dynamic natural guidance to living your best life." }
}

    return(
<div>
    <p>Future Menu</p>
    <p>{menu.discovery.name} Cost: {menu.discovery.cost}<br></br>{menu.discovery.description}</p>
    <hr></hr>
    <p>{menu.consult.name} Cost: {menu.consult.cost} <br></br>{menu.consult.description}</p>
    <hr></hr>
    <p>{menu.chef.name} Cost: {menu.chef.cost} <br></br>{menu.chef.description}</p>
    <hr></hr>
    <p>{menu.apothecary.name} Cost: {menu.apothecary.cost} <br></br>{menu.apothecary.description}</p>
    <hr></hr>
    <p>{menu.coaching.name} Cost: {menu.coaching.cost} <br></br>{menu.coaching.description}</p>
</div>
    )
};

export default Menu;