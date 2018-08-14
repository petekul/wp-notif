import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export type Record = {
    [key: string]: any
};

@Injectable()
export class RecordService {
    public _records: Record[];

    constructor (private http: Http){}

    public get() {
        return this._records;
    }

    public load(url: string): any {
        return this.http
          .get(url)
          .map((res: Response) => <Record[]>res.json())
          .catch(this.handleError)
          .toPromise().then(
            results => {
              this._records = results;
            }
          );
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}