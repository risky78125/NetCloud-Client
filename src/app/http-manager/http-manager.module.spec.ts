import { HttpManagerModule } from './http-manager.module';

describe('HttpManagerModule', () => {
  let httpManagerModule: HttpManagerModule;

  beforeEach(() => {
    httpManagerModule = new HttpManagerModule();
  });

  it('should create an instance', () => {
    expect(httpManagerModule).toBeTruthy();
  });
});
