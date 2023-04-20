import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoListaComponent } from './servico-lista.component';

describe('ServicoListaComponent', () => {
  let component: ServicoListaComponent;
  let fixture: ComponentFixture<ServicoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
