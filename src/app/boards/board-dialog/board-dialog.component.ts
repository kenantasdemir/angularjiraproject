import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
  styleUrls: ['./board-dialog.component.css']
})
export class BoardDialogComponent implements OnInit {

  
  boardForm = new FormGroup({
    title:new FormControl("",[Validators.required])
  })


  constructor(private ref:MatDialogRef<BoardDialogComponent>,private boardService:BoardService){}

  ngOnInit(): void {
  }



  create(){
      this.boardService.createBoard(this.boardForm.get('title')?.value || "")
      this.ref.close()
  }

  close(){
      this.ref.close()
  }

}
