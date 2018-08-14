import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
  <div class="wp-block light">
    <h3><i class="fa fa-file-text-o"></i> Page not found</h3>
    <p>Something has gone wrong. We are investigating the cause and are working to fix it as soon as we can. </p>
    <p>Error code: 404</p>
  </div>
  `,
  styles: ['.wp-block {max-width: 540px; text-align: center; padding: 4em 2em; margin: 0 auto;} h3 {font-size: 3em; margin-bottom: .5em;} p {font-size: 1.2em;} i {margin-right: .2em;}']
})
export class NoContentComponent {

}
