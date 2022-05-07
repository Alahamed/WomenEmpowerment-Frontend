import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from "../models/post";
@Injectable({
  providedIn: 'root'
})
export class postsService {

  constructor(private _http:HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this._http.get<Post[]>("http://localhost:8089/SpringMVC/Publication/retrieve-all-pubs");
  }
  createPost(post: Post) : Observable<Object>{
    return this._http.post("http://localhost:8089/SpringMVC/Publication/add-pub",post);
  }
  getPostById(idPublication:number) : Observable<Post> {
    return this._http.get<Post>("http://localhost:8089/SpringMVC/Publication/retrieve-pub/"+idPublication);
  }
  updatePost(post: Post)  : Observable<Object>{
    return this._http.put("http://localhost:8089/SpringMVC/Publication/modify-pub",post);
  }
  deletePost(idPublication) : Observable<Object> {
    return this._http.delete("http://localhost:8089/SpringMVC/Publication/remove-pub/" +idPublication);
  }

}
