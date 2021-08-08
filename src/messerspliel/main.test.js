import { procOutcome } from './main';

test('want a good outcome', () => {
    expect(procOutcome(6)).toEqual('good');
});

test('want a mixed outcome', () => {
    expect(procOutcome(5)).toEqual('mixed');
});

test('want a bad outcome', () => {
    expect(procOutcome(3)).toEqual('bad');
});