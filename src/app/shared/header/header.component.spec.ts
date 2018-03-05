import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppHeaderComponent } from './header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockAppComponent,
        AppHeaderComponent
      ],
      imports: [
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display the header text "Favourite items".', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Favourite items');
  }));
});

@Component({
  selector: 'app-root',
  template: ''
})
class MockAppComponent {
}
