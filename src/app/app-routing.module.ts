import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/public/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'clients', loadChildren: './pages/private/clients/clients.module#ClientsPageModule', canActivate: [AuthGuard] },
  { path: 'providers', loadChildren: './pages/private/providers/providers.module#ProvidersPageModule', canActivate: [AuthGuard] },
  { path: 'orders', loadChildren: './pages/private/orders/orders.module#OrdersPageModule', canActivate: [AuthGuard] },
  { path: 'invoices', loadChildren: './pages/private/invoices/invoices.module#InvoicesPageModule', canActivate: [AuthGuard] },
  { path: 'dashboard', loadChildren: './pages/private/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
