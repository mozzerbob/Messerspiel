import { roll } from './dice';

export function rollAction(a) {
  const result = {highest: {}, lowest: {}}
  if (a === undefined) return result;

  let pop = false
  a.forEach(d => {
    if ((d.selected)||(d?.dead === true)) {  
      d.face = roll(6);
      d.selected = false;

      if (result?.highest?.face === undefined) result.highest = {...d};
      else if (d.face > result?.highest?.face) result.highest = {...d};

      if (d?.dead === true) {
        if (result?.lowest?.face === undefined) result.lowest = {...d};
        else if (d.face < result?.lowest?.face) result.lowest = {...d};
      }

      if (d.risk === true) {
        if (d.face <= a.length) pop = true;
      };
    }
  });
  if (pop === true) a.pop();

  return result
}

export function procOutcome(outcome) {
    let result = '';
    
    if (outcome < 4) {
        result = 'bad';
    } else if (outcome < 6) {
        result = 'mixed';
    }
    else {
        result = 'good';
    };
    return result
};