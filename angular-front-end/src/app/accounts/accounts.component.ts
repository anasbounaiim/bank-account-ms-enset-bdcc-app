import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:8888/ACCOUNT-SERVICE/accounts")
      .subscribe({
        next: data => {
          this.accounts = data;
        },
        error: err => {
          console.log("Error loading accounts:", err);
        }
      });
  }
}
