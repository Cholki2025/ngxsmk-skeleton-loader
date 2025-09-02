import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';


/**
 * *ngxsmkSkeleton — structural directive to toggle a skeleton placeholder
 *
 * Example:
 * <ng-container *ngxsmkSkeleton="loading; type: 'text'; width: '80%'"></ng-container>
 */
@Directive({
  selector: '[ngxsmkSkeleton]',
  standalone: true
})
export class NgxSmkSkeletonDirective {
  @Input('ngxsmkSkeleton') set loading(v: boolean) {
    this._loading = v;
    this.updateView();
  }


  @Input('ngxsmkSkeletonType') type: 'text' | 'rect' | 'circle' | 'avatar' | 'button' | 'image' = 'text';
  @Input('ngxsmkSkeletonWidth') width?: string | number;
  @Input('ngxsmkSkeletonHeight') height?: string | number;
  @Input('ngxsmkSkeletonSize') size?: string | number;
  @Input('ngxsmkSkeletonRadius') radius?: string | number;
  @Input('ngxsmkSkeletonAnimate') animate: 'shimmer' | 'pulse' | 'wave' | 'none' = 'shimmer';


  private _loading = false;
  private skeletonEl?: HTMLElement;


  constructor(private readonly tpl: TemplateRef<unknown>, private readonly vcr: ViewContainerRef) {
  }


  private updateView() {
    this.vcr.clear();
    if (this._loading) {
      const el = document.createElement('ngxsmk-skeleton');
      if (this.type) el.setAttribute('type', this.type);
      if (this.animate) el.setAttribute('animate', this.animate);
      if (this.size != null) el.setAttribute('size', String(this.size));
      if (this.width != null) el.setAttribute('width', String(this.width));
      if (this.height != null) el.setAttribute('height', String(this.height));
      if (this.radius != null) el.setAttribute('radius', String(this.radius));
      this.vcr.element.nativeElement.insertAdjacentElement('beforebegin', el);
      this.skeletonEl = el;
    } else {
      if (this.skeletonEl) {
        this.skeletonEl.remove();
        this.skeletonEl = undefined;
      }
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
