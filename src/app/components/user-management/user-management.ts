import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-management',
  imports: [ButtonModule, InputTextModule, TableModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss',
})
export class UserManagement {
  users = [
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Anita Sharma',
      email: 'anita.sharma@adani.com',
      department: 'Department 2',
      type: 'Admin',
    },
    {
      name: 'Ravi Patel',
      email: 'ravi.patel@adani.com',
      department: 'Department 3',
      type: 'Dept Head',
    },
    {
      name: 'Pooja Verma',
      email: 'pooja.verma@adani.com',
      department: 'Department 4',
      type: 'Dept Head',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
    {
      name: 'Sudhir Dash',
      email: 'sudhir.d@adani.com',
      department: 'Department 1',
      type: 'SPOC',
    },
  ];
}
