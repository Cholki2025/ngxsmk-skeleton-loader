import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {NgxSmkSkeletonComponent} from 'ngxsmk-skeleton-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, NgxSmkSkeletonComponent],
  template: `
    <main class="container">
      <h1>ngxsmk-skeleton-loader Demo</h1>

      <section class="controls">
        <button type="button" (click)="toggleLoading()">
          {{ loading ? 'Stop' : 'Start' }} Loading
        </button>
      </section>

      <section class="grid">
        <!-- Text Skeleton Example -->
        <div class="card">
          <h2>Text lines</h2>
          @if (loading) {
            <ngxsmk-skeleton type="text" width="60%" animate="wave"></ngxsmk-skeleton>
            <ngxsmk-skeleton type="text" width="80%"></ngxsmk-skeleton>
            <ngxsmk-skeleton type="text" width="40%"></ngxsmk-skeleton>
          } @else {
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Dolor sit amet consectetur.</p>
            <p>Etiam porta sem malesuada magna mollis euismod.</p>
          }
        </div>

        <!-- Avatar Skeleton Example -->
        <div class="card">
          <h2>Avatar + text</h2>
          <div class="row">
            @if (loading) {
              <ngxsmk-skeleton type="circle" size="56"></ngxsmk-skeleton>
              <div class="col">
                <ngxsmk-skeleton type="text" width="50%"></ngxsmk-skeleton>
                <ngxsmk-skeleton type="text" width="70%"></ngxsmk-skeleton>
              </div>
            } @else {
              <img
                class="avatar"
                ngSrc="https://avatars.githubusercontent.com/u/42318070?v=4"
                alt="avatar"
                width="56"
                height="56"
              />
              <div class="col">
                <h3>Jane Developer</h3>
                <p>Frontend Engineer</p>
              </div>
            }
          </div>
        </div>

        <!-- Rect Skeleton Example -->
        <div class="card">
          <h2>Rect / image placeholder</h2>
          @if (loading) {
            <ngxsmk-skeleton type="rect" width="100%" height="180px"></ngxsmk-skeleton>
          } @else {
            <img
              class="banner"
              src="https://picsum.photos/seed/banner/640/180"
              alt="banner"
              width="640"
              height="180"
            />
          }
        </div>
      </section>
    </main>
  `,
  styles: [`
    .container {
      padding: 2rem;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial;
    }

    h1 {
      margin-bottom: 1rem;
    }

    .controls {
      margin-bottom: 1rem;
    }

    button {
      padding: .5rem 1rem;
      border-radius: .5rem;
      border: 1px solid #cbd5e1;
      background: #0ea5e9;
      color: white;
      cursor: pointer;
    }

    .grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }

    .card {
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-radius: .75rem;
      background: #fff;
      display: grid;
      gap: .75rem;
    }

    .row {
      display: flex;
      gap: .75rem;
      align-items: center;
    }

    .col {
      display: grid;
      gap: .5rem;
    }

    .avatar {
      border-radius: 9999px;
    }

    .banner {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: .5rem;
    }

    ngxsmk-skeleton {
      --ngx-skel-base: #e5e7eb;
      --ngx-skel-highlight: #ffffffb3;
    }
  `]
})
export class App {
  loading: boolean = true;

  toggleLoading() {
    this.loading = !this.loading;
  }
}
