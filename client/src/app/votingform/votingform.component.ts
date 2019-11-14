import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-votingform',
  templateUrl: './votingform.component.html',
  styleUrls: ['./votingform.component.css']
})
export class VotingformComponent implements OnInit {
  
  constructor(private us :UsersService) { }

  ngOnInit() {
  }

}
