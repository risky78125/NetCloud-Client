import { DevextremeWidgetModule } from './devextreme-widget.module';

describe('DevextremeWidgetModule', () => {
  let devextremeWidgetModule: DevextremeWidgetModule;

  beforeEach(() => {
    devextremeWidgetModule = new DevextremeWidgetModule();
  });

  it('should create an instance', () => {
    expect(devextremeWidgetModule).toBeTruthy();
  });
});
