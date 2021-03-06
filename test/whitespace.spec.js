// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.whitespace', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(' \n\t ');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.whitespace());
  });
});
