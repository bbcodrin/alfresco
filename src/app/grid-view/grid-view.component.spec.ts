import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GridViewComponent } from './grid-view.component';
import { MaterialModule } from '../material.module';
import { Component, Input } from '@angular/core';
import { Utils } from '../shared/utils/utils';

describe('GridViewComponent', () => {
  let component: GridViewComponent;
  let fixture: ComponentFixture<GridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridViewComponent,
        MockGridItemComponent
      ],
      imports: [
        MaterialModule
      ],
      providers: [
        Utils
      ]
    }).compileComponents();

    GridViewComponent.prototype.ngOnInit = () => {};
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewComponent);
    component = fixture.componentInstance;

    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });

  it('should create the grid-view app', async(() => {
    expect(component).toBeTruthy();
  }));
});

@Component({
  selector: 'app-grid-item',
  template: ''
})
class MockGridItemComponent {
  @Input () data: any;
  @Input () type: any;
}
