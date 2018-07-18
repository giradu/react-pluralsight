import React from 'react';

const Card = (props) => {
  return (
    <div style={{margin: '2em'}}>
      <img style={{ verticalAlign: 'top', height: 75 }} src={props.avatar_url} alt="user-img"/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: '600'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}

const CardList = (props) =>  {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
}

export default CardList;
