import { Component, OnInit } from '@angular/core';
import { MaidsService } from '../maids.service';
import { maid } from '../maid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-maid',
  templateUrl: './detailed-maid.component.html',
  styleUrls: ['./detailed-maid.component.css']
})
export class DetailedMaidComponent implements OnInit{
  isLoading:boolean=true;
  detailedMaid:maid={
    "id": 1,
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  };
  maidId:any;
  constructor(private _MaidsService:MaidsService, private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.maidId=params.get('id');
    })
    this._MaidsService.getDetailedMaids(this.maidId).subscribe({
      next:(res)=>{
        this.detailedMaid=res.data;
        this.isLoading=false;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  goBack(){
    window.history.back()
  }
}
