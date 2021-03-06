import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// DIRECTIVES
import { InjectComponentDirective } from './directives/inject-component.directive';

export * from './directives/inject-component.directive';

// PIPES
import { ComplexPropertyPipe } from './pipes/complex-property.pipe';
import { ComponentInputsPipe } from './pipes/component-inputs.pipe';
import { FilterResponsivePipe } from './pipes/filter-responsive.pipe';

export * from './pipes/complex-property.pipe';
export * from './pipes/component-inputs.pipe';
export * from './pipes/filter-responsive.pipe';

// SERVICES
import { DynamicComponentsService } from './services/dynamic-components.service';
import { ResponsiveService } from './services/responsive.service';
import { UtilService } from './services/util.service';
import { HttpService } from './services/http.service';

export * from './services/dynamic-components.service';
export * from './services/responsive.service';
export * from './services/util.service';
export * from './services/http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    InjectComponentDirective,
    ComplexPropertyPipe,
    ComponentInputsPipe,
    FilterResponsivePipe
  ],
  exports: [
    InjectComponentDirective,
    ComplexPropertyPipe,
    ComponentInputsPipe,
    FilterResponsivePipe
  ]
})
export class Ng2SmartCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2SmartCommonModule,
      providers: [
        DynamicComponentsService,
        ResponsiveService,
        UtilService,
        HttpService
      ]
    };
  }
}
