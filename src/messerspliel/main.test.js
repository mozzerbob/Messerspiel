import { procOutcome, rollAction } from './main';
import { roll } from './dice';

test('want a good outcome', () => {
    expect(procOutcome(6)).toEqual('good');
});

test('want a mixed outcome', () => {
    expect(procOutcome(5)).toEqual('mixed');
});

test('want a bad outcome', () => {
    expect(procOutcome(3)).toEqual('bad');
});

test('resolve action selected', () => {
    expect(rollAction(a_selected) !== undefined)
});

test('resolve action un-selected', () => {
    expect(rollAction(a_unselected) === undefined)
});

const a_selected = [
    {
        "key": 0,
        "face": 1,
        "risk": true,
        "selected": true
    },
    {
        "key": 1,
        "face": 4,
        "risk": false,
        "selected": true
    },
    {
        "key": 2,
        "face": 5,
        "risk": false,
        "selected": true
    },
    {
        "key": 3,
        "face": 5,
        "risk": false,
        "selected": true
    },
    {
        "key": 4,
        "face": 1,
        "risk": false,
        "selected": true
    },
    {
        "key": 5,
        "face": 1,
        "risk": false,
        "selected": true
    }
];

const a_unselected = [
    {
        "key": 0,
        "face": 1,
        "risk": true,
        "selected": false
    },
    {
        "key": 1,
        "face": 4,
        "risk": false,
        "selected": false
    },
    {
        "key": 2,
        "face": 5,
        "risk": false,
        "selected": false
    },
    {
        "key": 3,
        "face": 5,
        "risk": false,
        "selected": false
    },
    {
        "key": 4,
        "face": 1,
        "risk": false,
        "selected": false
    },
    {
        "key": 5,
        "face": 1,
        "risk": false,
        "selected": false
    }
];