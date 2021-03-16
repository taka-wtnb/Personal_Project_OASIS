import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { FormsModule as ngFormsModule } from '@angular/forms';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { FormsRoutingModule } from './forms/forms-routing.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { OrderEntryStepOneComponent } from './orders/order-entry/order-entry-step-one/order-entry-step-one.component';
import { OrderEntryStepTwoComponent } from './orders/order-entry/order-entry-step-two/order-entry-step-two.component';
import { OrderEntryStepThreeComponent } from './orders/order-entry/order-entry-step-three/order-entry-step-three.component';
import { OrderEntryStepFourComponent } from './orders/order-entry/order-entry-step-four/order-entry-step-four.component';
import { OrderEntryStepFiveComponent } from './orders/order-entry/order-entry-step-five/order-entry-step-five.component';
import { OpenOrderCompletionStepOneComponent } from './orders/open-order-completion/open-order-completion-step-one/open-order-completion-step-one.component';
import { OpenOrderCompletionStepTwoComponent } from './orders/open-order-completion/open-order-completion-step-two/open-order-completion-step-two.component';
import { OpenOrderCompletionStepThreeComponent } from './orders/open-order-completion/open-order-completion-step-three/open-order-completion-step-three.component';
import { QualityIssueEntryStepOneComponent } from './quality-issues/quality-issue-entry/quality-issue-entry-step-one/quality-issue-entry-step-one.component';
import { QualityIssueEntryStepTwoComponent } from './quality-issues/quality-issue-entry/quality-issue-entry-step-two/quality-issue-entry-step-two.component';
import { QualityIssueEntryStepThreeComponent } from './quality-issues/quality-issue-entry/quality-issue-entry-step-three/quality-issue-entry-step-three.component';
import { QualityIssueClosingStepOneComponent } from './quality-issues/quality-issue-closing/quality-issue-closing-step-one/quality-issue-closing-step-one.component';
import { QualityIssueClosingStepTwoComponent } from './quality-issues/quality-issue-closing/quality-issue-closing-step-two/quality-issue-closing-step-two.component';
import { QualityIssueClosingStepThreeComponent } from './quality-issues/quality-issue-closing/quality-issue-closing-step-three/quality-issue-closing-step-three.component';
import { RecentOrdersComponent } from './orders/recent-orders/recent-orders/recent-orders.component';
import { RecentPriceIncreaseComponent } from './price-increase/recent-price-increase/recent-price-increase.component';
import { RecentQualityIssuesComponent } from './quality-issues/recent-quality-issues/recent-quality-issues.component';
import { EntryHelperComponent } from './helpers/entry-helper/entry-helper.component';

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
    OrderEntryStepThreeComponent,
    OrderEntryStepFourComponent,
    OrderEntryStepFiveComponent,
    OpenOrderCompletionStepOneComponent,
    OpenOrderCompletionStepTwoComponent,
    OpenOrderCompletionStepThreeComponent,
    QualityIssueEntryStepOneComponent,
    QualityIssueEntryStepTwoComponent,
    HomepageComponent,
    QualityIssueClosingStepOneComponent,
    QualityIssueClosingStepTwoComponent,
    QualityIssueEntryStepThreeComponent,
    QualityIssueClosingStepThreeComponent,
    RecentOrdersComponent,
    RecentPriceIncreaseComponent,
    RecentQualityIssuesComponent,
    EntryHelperComponent,
  ],
})
export class PagesModule {
}
