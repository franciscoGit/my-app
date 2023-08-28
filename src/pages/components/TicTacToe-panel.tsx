import React from "react";

import IMAGE_CROSS from "./../../assets/images/cross.png";
import IMAGE_CIRCLE from "./../../assets/images/circle.png";

type PropsPanel = {
  player: string;
  index: number;
  setTurn: Function;
};

export default function TicTacToePanel(props: PropsPanel) {
  let image = props.player === "cross" ? IMAGE_CROSS : IMAGE_CIRCLE;

  const eventClick = () => {
    props.setTurn(props.index);
  };

  return (
    <div className='tic-tac-toe__board__row__panel' onClick={eventClick}>
      {props.player !== "" ? <img src={image} alt='player' /> : null}
    </div>
  );
}
