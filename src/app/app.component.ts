import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { theMovieDbService } from 'src/app/services/theMovieDbService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  headerBlack: boolean = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;

    if (verticalOffset > 100) {
      this.headerBlack = true;
    } else {
      this.headerBlack = false;
    }
  }


}


