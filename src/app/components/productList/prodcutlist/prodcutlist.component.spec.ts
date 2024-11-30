import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutlistComponent } from './prodcutlist.component';

describe('ProdcutlistComponent', () => {
  let component: ProdcutlistComponent;
  let fixture: ComponentFixture<ProdcutlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdcutlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
