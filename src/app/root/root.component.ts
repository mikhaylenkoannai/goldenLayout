import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { ContentItem } from 'golden-layout';
import { GoldenLayoutComponent, IExtendedGoldenLayoutConfig } from 'ngx-golden-layout';

// import { LayoutStateService } from 'core/services/layout-state.service';
// import { isObjectEmpty } from 'utils/common';

// import { AuthService } from '../core';
import glContent from './content';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  
  private content = glContent;


  public layout: IExtendedGoldenLayoutConfig={
    content: this.content, settings: {
      hasHeaders: true,
      constrainDragToContainer: true,
      reorderEnabled: true,
      selectionEnabled: true,
      popoutWholeStack: false,
      blockedPopoutsThrowError: true,
      closePopoutsOnUnload: true,
      showPopoutIcon: true,
      showMaximiseIcon: true,
      showCloseIcon: true,
      maximiseAllItems: true,
    }
  };
  
  public layoutConfig$ = of(this.layout);

  constructor(
    // public layoutStateService: LayoutStateService
  ) { }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
  }

  
}
