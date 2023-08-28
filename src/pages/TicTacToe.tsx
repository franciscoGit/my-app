import React, { Component } from "react";
import TicTacToePanel from "./components/TicTacToe-panel";

import "./TicTacToe.scss";

export class TicTacToe extends Component {
  state = {
    panels: Array(9).fill(""),
    playerInTurn: "cross",
    winner: "",
  };

  setTurn = (panel: number) => {
    if (this.state.winner === "") {
      let temp: Array<string> = this.state.panels;

      if (temp[panel] === "") {
        temp[panel] = this.state.playerInTurn;

        this.getWinner(temp);

        this.setState({
          panels: temp,
          playerInTurn:
            this.state.playerInTurn === "cross" ? "circle" : "cross",
        });
      }
    }
  };

  restartGame = () => {
    this.setState({
      panels: Array(9).fill(""),
      playerInTurn: "cross",
      winner: "",
    });
  };

  getWinner = (panels: Array<string>) => {
    let winner: string = "";

    const CONDITION_1 =
      panels[0] === panels[1] && panels[0] === panels[2] && panels[0] !== "";

    const CONDITION_2 =
      panels[3] === panels[4] && panels[3] === panels[5] && panels[3] !== "";

    const CONDITION_3 =
      panels[6] === panels[7] && panels[6] === panels[8] && panels[6] !== "";

    const CONDITION_4 =
      panels[0] === panels[3] && panels[0] === panels[6] && panels[0] !== "";

    const CONDITION_5 =
      panels[1] === panels[4] && panels[1] === panels[7] && panels[1] !== "";

    const CONDITION_6 =
      panels[2] === panels[5] && panels[2] === panels[8] && panels[2] !== "";

    const CONDITION_7 =
      panels[0] === panels[4] && panels[0] === panels[8] && panels[0] !== "";

    const CONDITION_8 =
      panels[2] === panels[4] && panels[2] === panels[6] && panels[2] !== "";

    if (
      CONDITION_1 ||
      CONDITION_2 ||
      CONDITION_3 ||
      CONDITION_4 ||
      CONDITION_5 ||
      CONDITION_6 ||
      CONDITION_7 ||
      CONDITION_8
    ) {
      winner = this.state.playerInTurn;
    }
    this.setState({
      winner: winner !== "" ? winner.toUpperCase() : "",
    });
  };

  tplRow = (numberPanels: number, startPanel: number = 0): React.ReactNode => {
    const rows = [];

    for (let i = 0; i < numberPanels; i++) {
      rows.push(
        <TicTacToePanel
          player={this.state.panels[i + startPanel]}
          index={i + startPanel}
          setTurn={this.setTurn}
        />
      );
    }

    return <div className='tic-tac-toe__board__row'>{rows}</div>;
  };

  render(): React.ReactNode {
    console.log(this.state.panels);
    console.log(
      typeof this.state.panels.find(
        (element) => element === "cross" || element === "circle"
      )
    );
    return (
      <div className='tic-tac-toe'>
        <div className='tic-tac-toe__board'>
          {this.tplRow(3)}
          {this.tplRow(3, 3)}
          {this.tplRow(3, 6)}
        </div>

        <div className='tic-tac-toe__restart'>
          <button
            onClick={this.restartGame}
            disabled={
              typeof this.state.panels.find(
                (element) => element === "cross" || element === "circle"
              ) === "undefined"
            }
          >
            Restart
          </button>
        </div>

        {this.state.winner !== "" ? (
          <div className='tic-tac-toe__label'>
            Winner: <span>{this.state.winner}</span>
          </div>
        ) : null}
      </div>
    );
  }
}
