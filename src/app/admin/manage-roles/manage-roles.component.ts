import { Component, OnInit } from '@angular/core';
import { PrivilegeService } from 'src/app/services/privilege.service';
import { error } from 'util';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {

  privilege: string = "";
  privileges: any[] = [];
  selectedPrivileges: any[] = [];

  role: any = {};
  roles: any[] = [];
  roleName: string = "";
  selectedRoles: any[] = [];

  selectedUser: any = {};
  users: any[] = [];

  constructor(private privilegeService: PrivilegeService, private roleService: RoleService, private userService: UserService) { }

  ngOnInit() {
    this.loadPrivilegesList();
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    })
    this.loadRoles()
  }

  addPrivilege(){
    if(this.privilege !== ""){
      this.privilegeService.addPrivilege(this.privilege).subscribe(
        data => {
          this.privilege = "";
          alert("Privilege "+data.name+" added successfully!");
          this.privileges.push(data);
        }, error => {alert("Something went wrong!!!")}
      );
    }
  }

  addRole(){
    let role: any = {
      name: this.roleName,
      privileges: this.selectedPrivileges
    }
    this.roleService.addRole(role).subscribe(data => {
      alert("Role: "+ data.name+ " added successfully!")
      this.roles.push(data);
    });
    this.roleName = "";
    this.selectedPrivileges = [];
  }

  loadPrivilegesList(){
    this.privilegeService.getAll().subscribe( data => {
      this.privileges = data;
    })
  }

  assignRolesToUser(){
    let data = {
      targetUser: this.selectedUser.id,
      roles: this.selectedRoles
    }
    this.userService.assignRolesToUser(data).subscribe(data => {
      alert("Roles assigned to "+ data.name+" successfully!")
    });
    this.selectedUser = {};
    this.selectedRoles = [];
  }

  loadRoles(){
    this.roleService.findAllRole().subscribe(data => {
      this.roles = data;
    })
  }
}
