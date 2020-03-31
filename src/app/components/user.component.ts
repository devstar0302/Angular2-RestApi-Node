import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[PostsService]
})
export class UserComponent {
  title: string;
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showhobbies: boolean;
  posts:Post[];

constructor(private postService: PostsService){
        this.title = 'app';
        this.name = 'Jone Doe';
        this.email = 'jone@gmail.com';
        this.address = {
            street:'12 Main st',
            city:'Boston',
            state:'MA'
        }
        this.hobbies=['Music','Movies','Sports'];
        this.showhobbies = false;

        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    toggleHobbies(){
        if(this.showhobbies){
        this.showhobbies = false;
        } else{
            this.showhobbies = true;
        }
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    deleteHobby(i){
        this.hobbies.splice(i, 1);
    }
}

interface address{

    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}