import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ` <div class="dual-ring"></div> `,
  styles: [
    `
      .dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
      }
      .dual-ring:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 3px solid #000;
        border-color: #000 transparent #000 transparent;
        animation: dual-ring 1.2s linear infinite;
      }
      @keyframes dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
