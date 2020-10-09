import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
   
  private blogsCollection: AngularFirestoreCollection<Blog>;
  private blogs: Observable<Blog[]>;

  constructor(private afs: AngularFirestore) {
    this.blogsCollection = afs.collection<Blog>('blogs');

    this.blogs = this.blogsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }; 
        });
      })
    );
        
   }
   
   // Returns observable arrays with blogs
   getBlogs() {
     return this.blogs;
   }

   getBlog(id) {
     return this.blogsCollection.doc<Blog>(id).valueChanges();
   } 

   updateBlog(blog: Blog) {
     return this.blogsCollection.doc(blog.id).update(blog);
   }

   createBlog(blog: Blog) {
     return this.blogsCollection.add(blog);
   }

   removeBlog(id) {
     return this.blogsCollection.doc(id).delete();
   }


  
}