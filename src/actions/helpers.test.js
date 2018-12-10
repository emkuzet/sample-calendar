import {getRandomInt, daysInMonth, } from './helpers';

test('getRandomInt = number', () => {
    expect(getRandomInt(10)).toBeLessThanOrEqual(10);
});

test('check is december', () => {
    expect(daysInMonth('11','2018')).toBe(31)
})