import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GridItemComponent } from './grid-item.component';
import { MaterialModule } from '../../material.module';

describe('GridItemComponent', () => {
  let component: GridItemComponent;
  let fixture: ComponentFixture<GridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridItemComponent
      ],
      imports: [
        MaterialModule
      ]
    }).compileComponents();

    GridItemComponent.prototype.ngOnInit = () => {};
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItemComponent);
    component = fixture.componentInstance;

    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });

  it('should create the grid-item app', async(() => {
    expect(component).toBeTruthy();
  }));
});
