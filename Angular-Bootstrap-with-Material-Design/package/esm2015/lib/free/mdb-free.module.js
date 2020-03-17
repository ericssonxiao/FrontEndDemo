import { __decorate } from "tslib";
// free
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardsModule } from './cards/cards.module';
import { ButtonsModule } from './buttons/buttons.module';
import { NavbarModule } from './navbars/navbar.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { CarouselModule } from './carousel/carousel.module';
import { ChartsModule } from './charts/chart.module';
import { CollapseModule } from './collapse/collapse.module';
import { ModalModule } from './modals/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';
import { InputsModule } from './inputs/inputs.module';
import { WavesModule } from './waves/waves.module';
import { IconsModule } from './icons/icon.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TableModule } from './tables/tables.module';
import { BadgeModule } from './badge/badge.module';
import { BreadcrumbModule } from './breadcrumbs/breadcrumb.module';
import { InputUtilitiesModule } from './input-utilities/input-utilities.module';
import { StickyHeaderModule } from './sticky-header/sticky-header.module';
export { StickyHeaderDirective, StickyHeaderModule } from './sticky-header/index';
export { MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputUtilitiesModule, } from './input-utilities/index';
export { MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule, } from './breadcrumbs/index';
export { MDBBadgeComponent, BadgeModule } from './badge/index';
export { MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TableModule, } from './tables/index';
export { CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule } from './checkbox/index';
export { ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, MdbBtnDirective, FixedButtonCaptionDirective, } from './buttons/index';
export { CardsModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent, } from './cards/index';
export { WavesModule, WavesDirective } from './waves/index';
export { InputsModule, MdbInputDirective, MdbInput } from './inputs/index';
export { NavbarModule } from './navbars/index';
export { BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective, } from './dropdown/index';
export { CarouselComponent, CarouselConfig, CarouselModule } from './carousel/index';
export { ChartsModule, BaseChartDirective } from './charts/index';
export { CollapseComponent, CollapseModule } from './collapse/index';
export { ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef, } from './modals/index';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, } from './tooltip/index';
export { PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective, } from './popover/index';
export { IconsModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective, FadDirective, } from './icons/index';
const MODULES = [
    ButtonsModule,
    CardsModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    BreadcrumbModule,
    InputUtilitiesModule,
    StickyHeaderModule,
];
let MDBRootModule = class MDBRootModule {
};
MDBRootModule = __decorate([
    NgModule({
        imports: [
            ButtonsModule,
            WavesModule.forRoot(),
            InputsModule.forRoot(),
            NavbarModule,
            DropdownModule.forRoot(),
            CarouselModule.forRoot(),
            ChartsModule,
            CollapseModule.forRoot(),
            ModalModule.forRoot(),
            TooltipModule.forRoot(),
            PopoverModule.forRoot(),
            IconsModule,
            CardsModule.forRoot(),
            CheckboxModule,
            TableModule,
            BadgeModule,
            BreadcrumbModule,
            InputUtilitiesModule,
            StickyHeaderModule,
        ],
        exports: MODULES,
        schemas: [NO_ERRORS_SCHEMA],
    })
], MDBRootModule);
export { MDBRootModule };
let MDBBootstrapModule = class MDBBootstrapModule {
    static forRoot() {
        return { ngModule: MDBRootModule };
    }
};
MDBBootstrapModule = __decorate([
    NgModule({ exports: MODULES })
], MDBBootstrapModule);
export { MDBBootstrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9tZGItZnJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU87QUFDUCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7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Q1gsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDbkIsQ0FBQztBQTJCRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBQUcsQ0FBQTtBQUFoQixhQUFhO0lBekJ6QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxhQUFhO1lBQ2IsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RCLFlBQVk7WUFDWixjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsWUFBWTtZQUNaLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsV0FBVztZQUNYLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsY0FBYztZQUNkLFdBQVc7WUFDWCxXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixrQkFBa0I7U0FDbkI7UUFDRCxPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csYUFBYSxDQUFHO1NBQWhCLGFBQWE7QUFHMUIsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDdEIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0YsQ0FBQTtBQUpZLGtCQUFrQjtJQUQ5QixRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7R0FDbEIsa0JBQWtCLENBSTlCO1NBSlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJlZVxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FyZHNNb2R1bGUgfSBmcm9tICcuL2NhcmRzL2NhcmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnLi9idXR0b25zL2J1dHRvbnMubW9kdWxlJztcbmltcG9ydCB7IE5hdmJhck1vZHVsZSB9IGZyb20gJy4vbmF2YmFycy9uYXZiYXIubW9kdWxlJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgfSBmcm9tICcuL2NoYXJ0cy9jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICcuL2NvbGxhcHNlL2NvbGxhcHNlLm1vZHVsZSc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJy4vbW9kYWxzL21vZGFsLm1vZHVsZSc7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICcuL3BvcG92ZXIvcG9wb3Zlci5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnLi9pbnB1dHMvaW5wdXRzLm1vZHVsZSc7XG5pbXBvcnQgeyBXYXZlc01vZHVsZSB9IGZyb20gJy4vd2F2ZXMvd2F2ZXMubW9kdWxlJztcbmltcG9ydCB7IEljb25zTW9kdWxlIH0gZnJvbSAnLi9pY29ucy9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAnLi90YWJsZXMvdGFibGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJy4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJNb2R1bGUgfSBmcm9tICcuL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIubW9kdWxlJztcbmltcG9ydCB7IElucHV0VXRpbGl0aWVzTW9kdWxlIH0gZnJvbSAnLi9pbnB1dC11dGlsaXRpZXMvaW5wdXQtdXRpbGl0aWVzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGlja3lIZWFkZXJNb2R1bGUgfSBmcm9tICcuL3N0aWNreS1oZWFkZXIvc3RpY2t5LWhlYWRlci5tb2R1bGUnO1xuXG5leHBvcnQgeyBTdGlja3lIZWFkZXJEaXJlY3RpdmUsIFN0aWNreUhlYWRlck1vZHVsZSB9IGZyb20gJy4vc3RpY2t5LWhlYWRlci9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE1kYkVycm9yRGlyZWN0aXZlLFxuICBNZGJTdWNjZXNzRGlyZWN0aXZlLFxuICBNZGJWYWxpZGF0ZURpcmVjdGl2ZSxcbiAgSW5wdXRVdGlsaXRpZXNNb2R1bGUsXG59IGZyb20gJy4vaW5wdXQtdXRpbGl0aWVzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgTWRiQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQsXG4gIEJyZWFkY3J1bWJNb2R1bGUsXG59IGZyb20gJy4vYnJlYWRjcnVtYnMvaW5kZXgnO1xuXG5leHBvcnQgeyBNREJCYWRnZUNvbXBvbmVudCwgQmFkZ2VNb2R1bGUgfSBmcm9tICcuL2JhZGdlL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LFxuICBNZGJUYWJsZVJvd0RpcmVjdGl2ZSxcbiAgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUsXG4gIE1kYlRhYmxlU29ydERpcmVjdGl2ZSxcbiAgTWRiVGFibGVEaXJlY3RpdmUsXG4gIE1kYlRhYmxlU2VydmljZSxcbiAgVGFibGVNb2R1bGUsXG59IGZyb20gJy4vdGFibGVzL2luZGV4JztcblxuZXhwb3J0IHsgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IsIENoZWNrYm94Q29tcG9uZW50LCBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib3gvaW5kZXgnO1xuXG5leHBvcnQge1xuICBCdXR0b25zTW9kdWxlLFxuICBCdXR0b25SYWRpb0RpcmVjdGl2ZSxcbiAgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsXG4gIE1kYkJ0bkRpcmVjdGl2ZSxcbiAgRml4ZWRCdXR0b25DYXB0aW9uRGlyZWN0aXZlLFxufSBmcm9tICcuL2J1dHRvbnMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBDYXJkc01vZHVsZSxcbiAgTWRiQ2FyZENvbXBvbmVudCxcbiAgTWRiQ2FyZEJvZHlDb21wb25lbnQsXG4gIE1kYkNhcmRJbWFnZUNvbXBvbmVudCxcbiAgTWRiQ2FyZFRleHRDb21wb25lbnQsXG4gIE1kYkNhcmRUaXRsZUNvbXBvbmVudCxcbiAgTWRiQ2FyZEZvb3RlckNvbXBvbmVudCxcbiAgTWRiQ2FyZEhlYWRlckNvbXBvbmVudCxcbn0gZnJvbSAnLi9jYXJkcy9pbmRleCc7XG5cbmV4cG9ydCB7IFdhdmVzTW9kdWxlLCBXYXZlc0RpcmVjdGl2ZSB9IGZyb20gJy4vd2F2ZXMvaW5kZXgnO1xuXG5leHBvcnQgeyBJbnB1dHNNb2R1bGUsIE1kYklucHV0RGlyZWN0aXZlLCBNZGJJbnB1dCB9IGZyb20gJy4vaW5wdXRzL2luZGV4JztcblxuZXhwb3J0IHsgTmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9uYXZiYXJzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQnNEcm9wZG93bkNvbmZpZyxcbiAgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEcm9wZG93bkRpcmVjdGl2ZSxcbiAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gIERyb3Bkb3duTW9kdWxlLFxuICBCc0Ryb3Bkb3duU3RhdGUsXG4gIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG59IGZyb20gJy4vZHJvcGRvd24vaW5kZXgnO1xuXG5leHBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCwgQ2Fyb3VzZWxDb25maWcsIENhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9jYXJvdXNlbC9pbmRleCc7XG5cbmV4cG9ydCB7IENoYXJ0c01vZHVsZSwgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGFydHMvaW5kZXgnO1xuXG5leHBvcnQgeyBDb2xsYXBzZUNvbXBvbmVudCwgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICcuL2NvbGxhcHNlL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcbiAgTW9kYWxCYWNrZHJvcE9wdGlvbnMsXG4gIE1vZGFsRGlyZWN0aXZlLFxuICBNb2RhbE1vZHVsZSxcbiAgTW9kYWxPcHRpb25zLFxuICBNREJNb2RhbFNlcnZpY2UsXG4gIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxuICBNREJNb2RhbFJlZixcbn0gZnJvbSAnLi9tb2RhbHMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBUb29sdGlwQ29uZmlnLFxuICBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50LFxuICBUb29sdGlwRGlyZWN0aXZlLFxuICBUb29sdGlwTW9kdWxlLFxufSBmcm9tICcuL3Rvb2x0aXAvaW5kZXgnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyQ29uZmlnLFxuICBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50LFxuICBQb3BvdmVyTW9kdWxlLFxuICBQb3BvdmVyRGlyZWN0aXZlLFxufSBmcm9tICcuL3BvcG92ZXIvaW5kZXgnO1xuXG5leHBvcnQge1xuICBJY29uc01vZHVsZSxcbiAgTWRiSWNvbkNvbXBvbmVudCxcbiAgRmFsRGlyZWN0aXZlLFxuICBGYXJEaXJlY3RpdmUsXG4gIEZhc0RpcmVjdGl2ZSxcbiAgRmFiRGlyZWN0aXZlLFxuICBGYWREaXJlY3RpdmUsXG59IGZyb20gJy4vaWNvbnMvaW5kZXgnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBCdXR0b25zTW9kdWxlLFxuICBDYXJkc01vZHVsZSxcbiAgV2F2ZXNNb2R1bGUsXG4gIElucHV0c01vZHVsZSxcbiAgTmF2YmFyTW9kdWxlLFxuICBEcm9wZG93bk1vZHVsZSxcbiAgQ2Fyb3VzZWxNb2R1bGUsXG4gIENoYXJ0c01vZHVsZSxcbiAgQ29sbGFwc2VNb2R1bGUsXG4gIE1vZGFsTW9kdWxlLFxuICBUb29sdGlwTW9kdWxlLFxuICBQb3BvdmVyTW9kdWxlLFxuICBJY29uc01vZHVsZSxcbiAgQ2hlY2tib3hNb2R1bGUsXG4gIFRhYmxlTW9kdWxlLFxuICBCYWRnZU1vZHVsZSxcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgSW5wdXRVdGlsaXRpZXNNb2R1bGUsXG4gIFN0aWNreUhlYWRlck1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCdXR0b25zTW9kdWxlLFxuICAgIFdhdmVzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJbnB1dHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5hdmJhck1vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ2Fyb3VzZWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEljb25zTW9kdWxlLFxuICAgIENhcmRzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja2JveE1vZHVsZSxcbiAgICBUYWJsZU1vZHVsZSxcbiAgICBCYWRnZU1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIElucHV0VXRpbGl0aWVzTW9kdWxlLFxuICAgIFN0aWNreUhlYWRlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBNREJSb290TW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBNREJCb290c3RyYXBNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNREJSb290TW9kdWxlPiB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE1EQlJvb3RNb2R1bGUgfTtcbiAgfVxufVxuIl19