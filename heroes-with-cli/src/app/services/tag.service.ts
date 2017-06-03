/**
 * Created by david on 02/06/17.
 */
import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tag} from '../Tag';


@Injectable()
export class TagService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private tagsUrl = 'api/tags';  // URL to web api

  constructor(private http: Http) { }

  getAllTags(): Promise<Tag[]> {
    return this.http.get(this.tagsUrl)
      .toPromise()
      .then(response => response.json().data as Tag[])
      .catch(this.handleError);
  }

  addNewTag(name: string): Promise<Tag> {
    return this.http
      .post(this.tagsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Tag)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    //  console.error('handleError(), An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tagsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
