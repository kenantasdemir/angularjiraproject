import { Component,OnInit,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog"
import { BoardService } from 'src/app/services/board.service';
import {MatSnackBar} from "@angular/material/snack-bar"


@Component({
  selector: 'app-viewboarddialog',
  templateUrl: './viewboarddialog.component.html',
  styleUrls: ['./viewboarddialog.component.css']
})
export class ViewboarddialogComponent implements OnInit {

  title:string = ""
  tasks:Array<string> = [""]
  tasksLoop:any = [false]

  constructor(private ref:MatDialogRef<ViewboarddialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private boardService:BoardService,
    private snackBar:MatSnackBar
    
    ){}

  ngOnInit(): void {
    if(this.data.editMode){
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title
      this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status
      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist
      
    
    }

    
  }

  deleteTask(i:number){
        this.tasks.splice(i,1)
        this.tasksLoop.splice(i,1)
  }


  addTask(){
    this.tasks.push("")
    this.tasksLoop.push(false)
  }

  close(){
    this.ref.close()
  }

  create(){

    if(this.tasks.some((element:string)=>element === "")){
          this.snackBar.open("Yeni taskı giriniz","OK")
    }else{

      if(!this.data.editMode){

        this.boardService.boards[this.data.boardIndex].cards.push({
          title:this.title,
          checklist:this.tasks,
          status:this.tasksLoop
        })
      }else{
         this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks
        
      }

      this.boardService.updateDataToLocalStorage()
      this.close()
    }


  }

}
