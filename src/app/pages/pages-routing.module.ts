import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
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

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomepageComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'order-entry-step-one',
      component: OrderEntryStepOneComponent,
    },
    {
      path: 'order-entry-step-two',
      component: OrderEntryStepTwoComponent,
    },
    {
      path: 'order-entry-step-three',
      component: OrderEntryStepThreeComponent,
    },
    {
      path: 'order-entry-step-four',
      component: OrderEntryStepFourComponent,
    },
    {
      path: 'order-entry-step-five',
      component: OrderEntryStepFiveComponent,
    },
    {
      path: 'open-order-completion-step-one',
      component: OpenOrderCompletionStepOneComponent,
    },
    {
      path: 'open-order-completion-step-two',
      component: OpenOrderCompletionStepTwoComponent,
    },
    {
      path: 'open-order-completion-step-three',
      component: OpenOrderCompletionStepThreeComponent,
    },
    {
      path: 'quality-issue-entry-step-one',
      component: QualityIssueEntryStepOneComponent,
    },
    {
      path: 'quality-issue-entry-step-two',
      component: QualityIssueEntryStepTwoComponent,
    },
    {
      path: 'quality-issue-entry-step-three',
      component: QualityIssueEntryStepThreeComponent,
    },
    {
      path: 'quality-issue-closing-step-one',
      component: QualityIssueClosingStepOneComponent,
    },
    {
      path: 'quality-issue-closing-step-two',
      component: QualityIssueClosingStepTwoComponent,
    },
    {
      path: 'quality-issue-closing-step-three',
      component: QualityIssueClosingStepThreeComponent,
    },
    {
      path: 'recent-orders',
      component: RecentOrdersComponent,
    },
    {
      path: 'recent-price-increase',
      component: RecentPriceIncreaseComponent,
    },
    {
      path: 'recent-quality-issues',
      component: RecentQualityIssuesComponent,
    },
    {
      path: 'entry-helper',
      component: EntryHelperComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
