import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Utils } from './shared/utils/utils';
import { Service } from './service/service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockAppHeaderComponent,
        MockAppFooterComponent,
        MockGridViewComponent,
        MockListViewComponent
      ],
      imports: [
        HttpClientModule,
        MaterialModule
      ],
      providers: [
        Service,
        Utils
      ]
    }).compileComponents();

    AppComponent.prototype.ngOnInit = () => {};
  }));

  beforeEach(() => {
    AppComponent.constructor();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.user = 'admin';
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display user name "admin".', async(() => {
    expect(component.user).toBe('admin');
  }));

  it('should selectMode flag to be "false".', async(() => {
    component.switchView(true);

    expect(component.selectMode).toBe(false);
    expect(component.gridView).toBe(false);
    expect(component.listView).toBe(true);
  }));
});

@Component({
  selector: 'app-header',
  template: ''
})
class MockAppHeaderComponent {
  @Input () title: any;
  @Input () user: any;
}

@Component({
  selector: 'app-footer',
  template: ''
})
class MockAppFooterComponent {
}

@Component({
  selector: 'app-grid-view',
  template: ''
})
class MockGridViewComponent {
  @Input () data: any;
}

@Component({
  selector: 'app-list-view',
  template: ''
})
class MockListViewComponent {
  @Input () data: any;
}
