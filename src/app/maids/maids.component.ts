import { Component, OnInit } from '@angular/core';
import { MaidsService } from '../maids.service';
import { maid } from '../maid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maids',
  templateUrl: './maids.component.html',
  styleUrls: ['./maids.component.css']
})
export class MaidsComponent implements OnInit {
  searchTerm:string='';
  isLoading:boolean=true;
  maidsId:any;
  maids:maid[]=[];
  constructor(private _MaidsService:MaidsService, private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._MaidsService.getMaids(1).subscribe({
      next:(res)=>{
        this.maids=res.data;
        this.isLoading=false;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  getMaids(id:number){
    this._MaidsService.getMaids(id).subscribe({
      next:(res)=>{
        this.maids=res.data;
      }
    })
  }
}
