import roll from './dice'

// export default function risk(a) {
//     if (a[0] === undefined) return;

//     const result = roll(6);
//     a[0].face = result;
//     if (result <= a.length) a.pop();

//     return a
// }

export function rollAction(a) {
  let highest
  console.log('rollaction')
  console.log(a)
  if (a === undefined) return highest;
  let pop = false
  a.forEach(d => {
    if (d.selected) {  
      d.face = roll(6);
      d.selected = false;

      if (highest?.face === undefined) {
        highest = {...d};
      }
      else if (d.face > highest?.face) {
        highest = {...d};
      };

      if (d.risk === true) {
        if (d.face <= a.length) pop = true;
      };
    }
  });
  if (pop === true) a.pop();

  return highest
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