import { TestBed, async } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { ServicesModule } from '../../services/services.module';
import { ServerUpdatedCommand } from './commands/server-updated.command';
import { UpdatedCommand } from './commands/updated.command';
import { HomeStore } from './home.store';
import { HomePageComponent } from './home-page.component';
import { DataComponent } from './components/home-data.component/data.component';

describe('HomePageComponent', () => {
  describe('Snapshot', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ServicesModule, RepositoriesModule],
        providers: [HomeStore, UpdatedCommand, ServerUpdatedCommand],
        declarations: [HomePageComponent, DataComponent],
      }).compileComponents();
    }));

    test('check snapshot', () => {
      const fixture = TestBed.createComponent(HomePageComponent);

      expect(fixture).toMatchSnapshot();
    });
  });

  describe('Functionality', () => {
    let store = new HomeStore();
    let updCommand = {} as UpdatedCommand;
    let serverUpdCommand = {} as ServerUpdatedCommand;

    beforeEach(() => {
      store = new HomeStore();
      updCommand = {} as UpdatedCommand;
      serverUpdCommand = {} as ServerUpdatedCommand;
    });

    test('constructor', () => {
      const sut = new HomePageComponent(store, updCommand, serverUpdCommand);
      store.counter$.next(1);
      sut.data$.pipe(take(1)).subscribe(v => expect(v).toBe(1));

      store.serverCounter$.next(1);
      sut.serverData$.pipe(take(1)).subscribe(v => expect(v).toBe(1));

      store.counter$.next(9);
      sut.serverFilteredData$.pipe(take(1)).subscribe(v => expect(v).toBe(9));
    });

    test('update', () => {
      updCommand.execute = jest.fn();
      const sut = new HomePageComponent(store, updCommand, serverUpdCommand);
      sut.update();
      expect(updCommand.execute).toBeCalledTimes(1);
    });

    test('serverUpdate', () => {
      serverUpdCommand.execute = jest.fn();
      const sut = new HomePageComponent(store, updCommand, serverUpdCommand);
      sut.serverUpdate();
      expect(serverUpdCommand.execute).toBeCalledTimes(1);
    });
  });
});
