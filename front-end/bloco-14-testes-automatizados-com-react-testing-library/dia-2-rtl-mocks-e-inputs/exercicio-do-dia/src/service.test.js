const random = require('./service')

test("Números aleatórios", () => {
  const mockRandom = jest.spyOn(random, "randomNumber");

  expect(mockRandom).toHaveBeenCalled();
})