import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { FilterComponent } from './filter.component';
import { DefaultFilterComponent } from "./default-filter.component";
import { CustomFilterComponent } from "./custom-filter.component";
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { CompleterFilterComponent } from './filter-types/completer-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';
var FILTER_COMPONENTS = [
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                Ng2CompleterModule,
            ],
            declarations: tslib_1.__spread(FILTER_COMPONENTS),
            exports: tslib_1.__spread(FILTER_COMPONENTS),
        })
    ], FilterModule);
    return FilterModule;
}());
export { FilterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUvRSxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN0QixDQUFDO0FBZ0JGO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBZHhCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixrQkFBa0I7YUFDbkI7WUFDRCxZQUFZLG1CQUNQLGlCQUFpQixDQUNyQjtZQUNELE9BQU8sbUJBQ0YsaUJBQWlCLENBQ3JCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZzJDb21wbGV0ZXJNb2R1bGUgfSBmcm9tICduZzItY29tcGxldGVyJztcclxuXHJcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRGaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kZWZhdWx0LWZpbHRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tRmlsdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLWZpbHRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9jaGVja2JveC1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2lucHV0LWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBGSUxURVJfQ09NUE9ORU5UUyA9IFtcclxuICBGaWx0ZXJDb21wb25lbnQsXHJcbiAgRGVmYXVsdEZpbHRlckNvbXBvbmVudCxcclxuICBDdXN0b21GaWx0ZXJDb21wb25lbnQsXHJcbiAgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXHJcbiAgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50LFxyXG4gIElucHV0RmlsdGVyQ29tcG9uZW50LFxyXG4gIFNlbGVjdEZpbHRlckNvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTmcyQ29tcGxldGVyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5GSUxURVJfQ09NUE9ORU5UUyxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC4uLkZJTFRFUl9DT01QT05FTlRTLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNb2R1bGUgeyB9XHJcbiJdfQ==