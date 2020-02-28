import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  describe('Snapshot', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent],
      }).compileComponents();
    }));

    test('check snapshot', () => {
      const sut = TestBed.createComponent(AppComponent);

      expect(sut).toMatchSnapshot();
    });
  });

  describe('Functionality', () => {
    test('constructor', () => {
      const sut = new AppComponent();
      expect(sut.title).toEqual('Ragnar');
    });
  });
});
