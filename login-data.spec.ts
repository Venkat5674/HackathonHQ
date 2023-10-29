import { LoginData } from '../login/login-data';

describe('LoginData', () => {
  it('should create an instance', () => {
    expect(new LoginData("","")).toBeTruthy();
  });
});
