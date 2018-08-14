import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { FormsComponent } from './forms.component';

describe('Forms', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      FormsComponent
    ]
  }));

  it('should log ngOnInit', inject([FormsComponent], (forms: FormsComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    forms.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
