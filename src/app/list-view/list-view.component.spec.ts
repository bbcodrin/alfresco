import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ListViewComponent } from './list-view.component';
import { MaterialModule } from '../material.module';
import { Component, Input } from '@angular/core';
import { Utils } from '../shared/utils/utils';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListViewComponent,
        MockListItemComponent
      ],
      imports: [
        MaterialModule
      ],
      providers: [
        Utils
      ]
    }).compileComponents();

    ListViewComponent.prototype.ngOnInit = () => {};
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the list-view app', async(() => {
    expect(component).toBeTruthy();
  }));
});

@Component({
  selector: 'app-list-item',
  template: ''
})
class MockListItemComponent {
  @Input () data: any;
  @Input () type: any;
}
