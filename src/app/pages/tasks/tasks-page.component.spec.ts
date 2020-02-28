import { TestBed, async } from '@angular/core/testing';

import { TasksPageComponent } from './tasks-page.component';

describe('TasksPageComponent', () => {
  describe('Snapshot', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TasksPageComponent],
      }).compileComponents();
    }));

    test('check snapshot', () => {
      const fixture = TestBed.createComponent(TasksPageComponent);

      expect(fixture).toMatchSnapshot();
    });
  });
});
