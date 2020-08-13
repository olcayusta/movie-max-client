import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SidenavContainerComponent} from './sidenav-container/sidenav-container.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavContainerComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
      {path: 'series', loadChildren: () => import('./series/series.module').then(m => m.SeriesModule)},
      {path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
      {path: 'watch/:watchId', loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule)}
    ]
  },
  { path: 'list', loadChildren: () => import('./my-list/my-list.module').then(m => m.MyListModule) },
  { path: 'party', loadChildren: () => import('./party/party.module').then(m => m.PartyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
