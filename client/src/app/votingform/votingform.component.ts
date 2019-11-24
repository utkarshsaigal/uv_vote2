import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-votingform',
  templateUrl: './votingform.component.html',
  styleUrls: ['./votingform.component.css']
})
export class VotingformComponent implements OnInit {
  VoterId ;
  Votersname;

  constructor(private us :UsersService) { }

  ngOnInit() {
  }
  addData(){

alert('successfully voted , happy voting !! ');
  }

}
