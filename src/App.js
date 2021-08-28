import logo from './assets/sword.svg';
import bad from './assets/bad.svg';
import mixed from './assets/mixed.svg';
import good from './assets/good.svg';
import './App.scss';
import React from 'react';
import { procOutcome, rollAction } from './messerspiel/main';
import { roll } from './messerspiel/dice';

const diceCnt = 6

class App extends React.Component {
  constructor(props) {
    super(props);
    const a = [];

    a.push({
      key: 0,
      face: roll(6),
      risk: true,
      selected: false
    });

    for(let i=1; i<diceCnt; i++) {
      a.push({
        key: i,
        face: roll(6),
        risk: false,
        selected: false
      });
    };

    this.state = {
      dice: a
    };
  };

  outcome = 'hello';

  doRoll = () => {
    let result = {};
    let a = this.state.dice.slice();
    if (a.length === 0) a = this.dead()
    result = rollAction(a)
    if (result.lowest != null) {
      this.outcome = procOutcome(result.lowest?.face)
    } else {
      this.outcome = procOutcome(result.highest?.face)
    }
    this.setState({ dice: a });
  };

  dead = () => {
    return [{
      key: 0,
      face: roll(6),
      risk: false,
      selected: false,
      dead: true
    }, {
      key: 1,
      face: roll(6),
      risk: false,
      selected: false,
      dead: true
    }]
  }

  getOutcome = () => {
    if (this.outcome === 'bad') {
      return <img src={bad} className="outcome-svg" alt="bad" />
    } else if (this.outcome === 'mixed') {
      return <img src={mixed} className="outcome-svg" alt="mixed" />
    } else {
      return <img src={good} className="outcome-svg" alt="good" />
    }
  };

  selectD = (id) => {
    const a = this.state.dice.slice();
    a[id].selected = !a[id].selected;
    this.setState({ dice: a });
  };

  incrementD = () => {
    let a = this.state.dice.slice();
    if (a.length === 0) {
      a.push({
        key: 0,
        face: roll(6),
        risk: true,
        selected: false
      });
    } else {
      a.push({
        key: a.length,
        face: roll(6),
        risk: false,
        selected: false
      });
    }
    
    this.setState({ dice: a });
  }

  decrementD = () => {
    let a = this.state.dice.slice();
    a.pop();
    this.setState({ dice: a });
  }

  displayDice = () => {
    const tray = []; 
    tray.push(<button className="crement" id="-" onClick={() => this.decrementD()}>-</button>);
    for (let d of this.state.dice) {
      if (!d.risk) {
        if (!d.selected) {
          if (!d.dead) tray.push(<button className="square" id={d.key} onClick={() => this.selectD(d.key)}>{d?.face}</button>);
          else tray.push(<button className="square-dead" id={d.key} onClick={() => this.selectD(d.key)}>{d?.face}</button>);
        }
        if (d.selected) {tray.push(<button className="square-selected" id={d.key} onClick={() => this.selectD(d.key)}>{d?.face}</button>);}
      } else if (d.risk) {
        if (!d.selected) {tray.push(<button className="square-risk" id={d.key} onClick={() => this.selectD(d.key)}>{d?.face}</button>);}
        if (d.selected) {tray.push(<button className="square-risk-selected" id={d.key} onClick={() => this.selectD(d.key)}>{d?.face}</button>);}
      }
    };
    tray.push(<button className="crement" id="+" onClick={() => this.incrementD()}>+</button>);
    return tray;
  };

  render() {
    return <div className="app">
            <a href="https://ozbrowning.itch.io/messerspiel" target="_blank" rel="noopener noreferrer" >
              <button class="mdc-icon-button material-icons info">info</button>
            </a>
            <header className="app__header">
              <h1 className="header">Messerspiel</h1>
              { this.getOutcome() }
              <img src={ logo } className="app__logo" alt="logo" />
              <div class="app__dicetray">
                { this.displayDice() }
              </div>
              <button className="button" type="button" name="doRoll" onClick={ this.doRoll }>Roll</button>
            </header>
          </div>;
  };
}

export default App;
