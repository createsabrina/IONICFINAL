import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarServicosPage } from './listar-servicos.page';

describe('ListarServicosPage', () => {
  let component: ListarServicosPage;
  let fixture: ComponentFixture<ListarServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
