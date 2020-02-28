import { TestBed, async } from '@angular/core/testing';
import { DataComponent } from './data.component';

describe('DataComponent', () => {
  describe('Snapshot', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [DataComponent],
      }).compileComponents();
    }));

    test('check snapshot', () => {
      const fixture = TestBed.createComponent(DataComponent);

      expect(fixture).toMatchSnapshot();
    });
  });

  describe('Functionality', () => {
    test('update', () => {
      const sut = new DataComponent();
      sut.onUpdated.emit = jest.fn();
      sut.click();
      expect(sut.onUpdated.emit).toBeCalledTimes(1);
    });
  });
});
