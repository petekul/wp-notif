import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styles: ['.pipe { padding: 2em; margin-bottom: 1em;} .wp-block.dark .pipe {background: #fff;} .wp-block.light .pipe {background: #eee;} .wp-block.light .pipe code {background: #fff;} .wp-block h2 {margin-bottom: 1em;} .wp-block.dark h2:first-child {margin-top: 0;} .pipe h3 i {font-size: 0.6em;} pre {margin:0;} code { background: #eee; padding: 0.3em 1em; display: inline-block;}']
})
export class PipesComponent implements OnInit {

  public ngOnInit() {
    console.log('`Pipes` component');
  }
}