import { Component,OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import { BoardDialogComponent } from './board-dialog/board-dialog.component';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit{

  constructor(private matDialog:MatDialog,public boardsService:BoardService){}


  ngOnInit(): void {
  }


  openNewBoardDialog(){
    const ref = this.matDialog.open(BoardDialogComponent,{
      width:"500px"
    })
  }


  deleteBoard(index:number){
    this.boardsService.deleteBoard(index)
  }

}
