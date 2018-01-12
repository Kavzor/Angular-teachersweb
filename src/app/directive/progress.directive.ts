import { Directive, ElementRef, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Directive({
  selector: '[appPositiveProgress]'
})
export class ProgressDirective implements OnInit {

  @Input() width: string;

  constructor(private element: ElementRef) {}

   ngOnInit() {
    this.element.nativeElement.style.width = this.width;
   }
}
