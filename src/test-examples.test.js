class SalarySum {
  constructor(people) {
    if (!Array.isArray(people)) {
      throw new Error('Expect first arg will be array');
    }
    this.people = people;
  }

  calculate() {
    return this.people.reduce((acc, p) => acc + p.cost, 0);
  }
}

it('', () => {
  const people = [
    {
      cost: 10,
    },
    {
      cost: 20,
    },
    {
      cost: 30,
    },
    {
      cost: 50,
    },
  ];
  const salarySum = new SalarySum(people);
  expect(salarySum.calculate()).toBe(110);
});

it('', () => {
  const people = [
    {
      cost: 13,
    },
    {
      cost: 30,
    },
    {
      cost: 30,
    },
    {
      cost: 50,
    },
  ];
  const salarySum = new SalarySum(people);
  expect(salarySum.calculate()).toBe(123);
});

it('Class without arg throw error', () => {
  expect(() => {
    new SalarySum();
  }).toThrow();
});
