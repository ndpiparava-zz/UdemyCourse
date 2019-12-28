import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpEventType} from '@angular/common/http';
import {Post} from './post.model';
import { map , catchError, tap} from 'rxjs/operators';
import { Subject , throwError} from 'rxjs';


@Injectable({ providedIn: "root" })

export class PostService {

    error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };

    this.http
      .post<{ name: string }>(
        //https://ng-complete-guide-7b7e7.firebaseio.com/
        "https://ng-complete-guide-7b7e7.firebaseio.com/posts.json",
        postData,
        {
            observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {

    let  searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("custom", "key");


    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-complete-guide-7b7e7.firebaseio.com/posts.json",
        {
            headers: new HttpHeaders({
                'Custom-Header' : 'Hello'
            }), 
            params: searchParams,
            responseType: 'json' // this also default(json) type
        }
      )
      .pipe(
        map(responseData => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError(errorResponse => {
                //send to analytics server
                return throwError(errorResponse);
        })
      );
    }

    deletePosts() {
        return this.http
        .delete (
            "https://ng-complete-guide-7b7e7.firebaseio.com/posts.json",
            {
                observe: 'events',
                //responseType: 'text'
            })
            .pipe(
                tap( event => {
                    console.log(event);

                    if (event.type === HttpEventType.Sent) {
                      // ....

                    }
                    if(event.type === HttpEventType.Response) {
                        console.log(event.body);
                    }
                })
            );
    }
}