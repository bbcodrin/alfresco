import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ListItemComponent } from './list-item.component';
import { MaterialModule } from '../../material.module';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListItemComponent
      ],
      imports: [
        MaterialModule
      ]
    }).compileComponents();

    ListItemComponent.prototype.ngOnInit = () => {};
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;

    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });

  it('should create the list-item app', async(() => {
    expect(component).toBeTruthy();
  }));
});
