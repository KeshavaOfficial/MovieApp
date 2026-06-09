import { Component, signal } from '@angular/core';
import { Input, output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App2');
  login: any[] = [] ;
  products:any[] = [] ;
  Name! : string ;
  isVerified! : boolean ;
  Password! : any ;
  MovieName! : string
  MovieArray : any[] = [] ;
  searchCompleted! : boolean
  constructor(){
    fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => {
    this.login = data.users ; 
    console.log(data.users)
  });
  }

  show(){
    const user = this.login.find(
      item => item.lastName.toLowerCase().trim() === this.Name.toLowerCase().trim() && 
              item.password.toLowerCase().trim() === this.Password.toLowerCase().trim()
    );

    this.isVerified = !!user ;
  }


  search(){
    fetch(`https://www.omdbapi.com/?apikey=5d278d14&s=${this.MovieName}`)
    .then((res) => res.json()).then(data => {
      this.MovieArray = data.Search;
    console.log(this.MovieArray) ;

    if (data.Response === 'True') {
        this.searchCompleted = true;
      }
  })
  }
  






}