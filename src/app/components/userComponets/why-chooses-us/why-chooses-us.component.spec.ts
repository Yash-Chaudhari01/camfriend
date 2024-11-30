import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoosesUsComponent } from './why-chooses-us.component';

describe('WhyChoosesUsComponent', () => {
  let component: WhyChoosesUsComponent;
  let fixture: ComponentFixture<WhyChoosesUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyChoosesUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChoosesUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
