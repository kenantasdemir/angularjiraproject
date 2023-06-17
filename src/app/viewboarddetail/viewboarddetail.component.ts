import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import {MatDialog} from "@angular/material/dialog"
import { ViewboarddialogComponent } from './viewboarddialog/viewboarddialog.component';

@Component({
  selector: 'app-viewboarddetail',
  templateUrl: './viewboarddetail.component.html',
  styleUrls: ['./viewboarddetail.component.css']
})
export class ViewboarddetailComponent implements OnInit{


  boardIndex:any = 0
  boardTitle:string = ""

  constructor(private route:ActivatedRoute,private matDialog:MatDialog,public boardService:BoardService){}


  ngOnInit(): void {
   this.boardIndex =  this.route.snapshot.paramMap.get("boardIndex")
   this.boardTitle = this.boardService.boards[this.boardIndex].title
  }


  openNewCardDialog(){
    const ref = this.matDialog.open(ViewboarddialogComponent,{
      width:"500px",
      data:{boardIndex:this.boardIndex,editMode:false}
    })

  }

  deleteCard(index:number){
      this.boardService.boards[this.boardIndex].cards.splice(index,1)
      this.boardService.updateDataToLocalStorage()
  }

  updateCard(index:number,card:any){
    const ref = this.matDialog.open(ViewboarddialogComponent,{
      width:"500px",
      data:{boardIndex:this.boardIndex,cardIndex:index,editMode:true}
    })

  }


}
