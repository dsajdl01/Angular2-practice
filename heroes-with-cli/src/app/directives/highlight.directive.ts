/**
 * Created by david on 26/05/17.
 */
import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {

  constructor(@Inject(ElementRef) el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}