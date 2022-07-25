import {styled} from '@mui/system';
import React from 'react';

export function DiceButton(props: {
  dice: any;
  select: any;
}) {
  const Root = styled('button')(({theme}) => ({
    background: 'unset',
    border: 'unset',
    float: 'left',
    fontFamily: props.dice.risk ? 'Dicier-Round-Dark' : 'Dicier-Round-Light',
    fontSize: '5vmin',
    height: '6vmin',
    margin: '1.5vmin',
    padding: '0',
    textAlign: 'center',
    width: '3.5vmin',
    color: props.dice.selected ? theme.palette.secondary.main :
      theme.palette.primary.main,
  }));

  // if (props.dice.dead) return '$secondry-color';

  return (
    <Root
      id={`dice-${props.dice.key}`}
      onClick={props.select}
    >
      {props.dice?.face}
    </Root>
  );
}

// onClick={() => this.selectD(props.dice.key)}
