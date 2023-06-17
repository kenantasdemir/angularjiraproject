import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() {
    let str = localStorage.getItem("boards")
    if(str!=null){
      this.boards = JSON.parse(str)
    }
   }



  public boards:Array<any> = []


  createBoard(name:string) {
      let newBoard = {
        title:name,
        cards:[]
      }

      this.boards.push(newBoard)
      localStorage.setItem("boards",JSON.stringify(this.boards))
  }

  public updateDataToLocalStorage(){
    localStorage.setItem("boards",JSON.stringify(this.boards))
  }

  
  deleteBoard(index: number) {
    this.boards.splice(index,1)
    localStorage.setItem("boards",JSON.stringify(this.boards))
  }

  
}
