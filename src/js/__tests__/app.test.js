import Character from '../app';

test('check name < 2', () => {
  expect(() => {
    new Character('a', 'Daemon');
  }).toThrow('min 2 simbol');
});

test('check name > 10', () => {
  expect(() => {
    new Character('abcdefghijk', 'Daemon');
  }).toThrow('max 10 simbol!');
});

test('check string', () => {
  expect(() => {
    new Character(123, 'Daemon');
  }).toThrow('Значение должно быть строкой');
});

test('check type error', () => {
  expect(() => {
    new Character('Alex', 'Daemo');
  }).toThrow('Выбранный тип не существует');
});

test('check name', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.name).toBe('Alex');
});

test('check type', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.type).toBe('Daemon');
});

test('check health', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.health).toBe(100);
});

test('check level', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.level).toBe(1);
});

test('check attack', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.attack).toBe(10);
});

test('check defence', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.defence).toBe(40);
});
