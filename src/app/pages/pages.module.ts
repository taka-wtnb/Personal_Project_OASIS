import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { FormsModule as ngFormsModule } from '@angular/forms';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { OrderEntryStepOneComponent } from './orders/order-entry/order-entry-step-one/order-entry-step-one.component';
import { OrderEntryStepTwoComponent } from './orders/order-entry/order-entry-step-two/order-entry-step-two.component';
import { OpenOrderCompletionStepOneComponent } from './orders/open-order-completion/open-order-completion-step-one/open-order-completion-step-one.component';
import { OpenOrderCompletionStepTwoComponent } from './orders/open-order-completion/open-order-completion-step-two/open-order-completion-step-two.component';
import { FormsRoutingModule } from './forms/forms-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbDatepickerModule,
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbCardModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    PagesComponent,
    OrderEntryStepOneComponent,
    OrderEntryStepTwoComponent,
    OpenOrderCompletionStepOneComponent,
    OpenOrderCompletionStepTwoComponent,
  ],
})
export class PagesModule {
}
