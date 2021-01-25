import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CloseIconComponent } from './close-icon/close-icon.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { AvatarPopupComponent } from './avatar-popup/avatar-popup.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChevronRightIconComponent } from './chevron-right-icon/chevron-right-icon.component';
import { ChevronLeftIconComponent } from './chevron-left-icon/chevron-left-icon.component';
import { HorizontalSliderComponent } from './horizontal-slider/horizontal-slider.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContinueSliderComponent } from './continue-slider/continue-slider.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BigSliderComponent } from './big-slider/big-slider.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { MatRippleModule } from '@angular/material/core';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { SeriesSliderComponent } from './series-slider/series-slider.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SerialMoviesComponent } from './serial-movies/serial-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavContainerComponent,
    HomeComponent,
    SidenavComponent,
    TopBarComponent,
    SignInDialogComponent,
    CloseIconComponent,
    SearchIconComponent,
    MenuIconComponent,
    AvatarPopupComponent,
    ChevronRightIconComponent,
    ChevronLeftIconComponent,
    HorizontalSliderComponent,
    ContinueSliderComponent,
    BigSliderComponent,
    BottomNavigationComponent,
    HomeIconComponent,
    AccountIconComponent,
    SeriesSliderComponent,
    SerialMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    OverlayModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatBottomSheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
