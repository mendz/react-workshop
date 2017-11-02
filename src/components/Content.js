import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Smurf from './Smurf';

const Content = ({ changingItem, activeItem, loading, chooseSmurf, onChangingItemTransitionEnd }) => {
  let Content;

  if (activeItem && !changingItem) {
    return (
      <CSSTransition timeout={500} classNames="fly-out" in={changingItem} onEntered={onChangingItemTransitionEnd}>
        <div className="w-50">{<Smurf {...activeItem} />}</div>
      </CSSTransition>
    );
  } else if (changingItem) {
    return <div className="text-center text-muted">{loading}</div>;
  } else {
    return <div className="text-center text-muted">{chooseSmurf}</div>;
  }

  // return  <Content />
  {
    /* <CSSTransition timeout={500} classNames="fly-left" in={changingItemTransition} onEntered={onChangingItemTransitionEnd}>
      <div className="w-50">{content}</div>
    </CSSTransition> */
  }

  /* const content =
      activeItem && !changingItem ? (
        <Smurf {...activeItem} />
      ) : (
        <div className="text-center text-muted">{changingItem ? 'Loading from the server... ⏲' : 'Choose a smurf on the right...'}</div>
      ); */
};

export default Content;

/* const Transition = ({ transitionType, content, changingItemTransition, onChangingItemTransitionEnd }) => (
  <CSSTransition timeout={500} classNames={transitionType} in={changingItemTransition} onEntered={onChangingItemTransitionEnd}>
    <div className="w-50">{content}</div>
  </CSSTransition>
);
 */