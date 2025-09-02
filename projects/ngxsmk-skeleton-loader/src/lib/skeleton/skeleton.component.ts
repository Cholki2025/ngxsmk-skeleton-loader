import {CommonModule} from '@angular/common';
import {Component, HostBinding, Input} from '@angular/core';


/**
 * ngxsmk-skeleton — Standalone skeleton component.
 * Usage:
 * <ngxsmk-skeleton type="text" width="80%"></ngxsmk-skeleton>
 * <ngxsmk-skeleton type="circle" size="48"></ngxsmk-skeleton>
 */
@Component({
  selector: 'ngxsmk-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./skeleton.component.scss']
})
export class NgxSmkSkeletonComponent {
  /** visual preset */
  @Input() type: 'text' | 'rect' | 'circle' | 'avatar' | 'button' | 'image' = 'text';
  /** width: accepts px/%, number treated as px */
  @Input() width?: string | number;
  /** height: accepts px/%, number treated as px */
  @Input() height?: string | number;
  /** size shortcut (applies to width & height if provided) */
  @Input() size?: string | number;
  /** border radius (e.g. 8, '8px', '9999px') */
  @Input() radius?: string | number;
  /** animation style */
  @Input() animate: 'shimmer' | 'pulse' | 'wave' | 'none' = 'shimmer';
  /** base color & highlight overrides via CSS vars, but a fallback tint can be set */
  @Input() tint?: string; // e.g. #e5e7eb


  @HostBinding('class.ngxsmk-skeleton') baseClass = true;


  @HostBinding('class.is-rect') get isRect() {
    return this.type === 'rect' || this.type === 'image' || this.type === 'button';
  }

  @HostBinding('class.is-text') get isText() {
    return this.type === 'text';
  }

  @HostBinding('class.is-circle') get isCircle() {
    return this.type === 'circle' || this.type === 'avatar';
  }


  @HostBinding('class.anim-shimmer') get cShimmer() {
    return this.animate === 'shimmer';
  }

  @HostBinding('class.anim-pulse') get cPulse() {
    return this.animate === 'pulse';
  }

  @HostBinding('class.anim-wave') get cWave() {
    return this.animate === 'wave';
  }


  @HostBinding('attr.role') role = 'presentation';
  @HostBinding('attr.aria-hidden') aria = 'true';


  @HostBinding('style') get styleMap() {
    const w = this.size ?? this.width;
    const h = this.size ?? this.height;
    const r = this.radius ?? (this.isCircle ? '9999px' : undefined);


    const style: Record<string, string> = {};
    if (w != null) style['--w'] = this.unit(w);
    if (h != null) style['--h'] = this.unit(h);
    if (r != null) style['--r'] = this.unit(r);
    if (this.tint) style['--ngx-skel-base'] = this.tint;


    return Object.entries(style).map(([k, v]) => `${k}:${v}`).join(';');
  }


  private unit(v: string | number): string {
    if (typeof v === 'number') return `${v}px`;
    // if it's a numeric string, add px
    return /^\d+(\.\d+)?$/.test(v) ? `${v}px` : v;
  }

}
