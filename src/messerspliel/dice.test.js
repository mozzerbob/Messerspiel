import { roll } from './dice';

test('want some result', () => {
    const limit = 1;
    const dice = roll(limit);
    expect(dice).toBeGreaterThan(0);
    expect(dice).toBeLessThanOrEqual(limit);
});