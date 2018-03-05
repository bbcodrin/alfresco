import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppFooterComponent } from './footer.component';
import { MaterialModule } from '../../material.module';

describe('AppFooterComponent', () => {
  let component: AppFooterComponent;
  let fixture: ComponentFixture<AppFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppFooterComponent
      ],
      imports: [
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display the footer text "© 2018 Alfresco Software, Inc. All Rights Reserved.".', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('© 2018 Alfresco Software, Inc. All Rights Reserved.');
  }));
});
