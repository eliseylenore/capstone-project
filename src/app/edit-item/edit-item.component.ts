import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
  providers: [ ProductService, AuthenticationService ]
})
export class EditItemComponent implements OnInit {
  @Input() userId;
  public isLoggedIn: Boolean;
  private item: FirebaseObjectObservable<any>;
  private productId: String;
  public showAlert=false;
  public deleting=false;
  public doneDeleting=true;
  constructor(
    public authService: AuthenticationService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authService.user.subscribe(user => {
      if(user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userId = user.uid;
      }
    });
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
    var vm = this;
    this.item = this.productService.getCartItem(vm.productId, vm.userId);
  }

  beginEditingItem(localUpdatedItem) {
    var vm = this;
    this.productService.editItem(localUpdatedItem, vm.userId);
  }

  beginDeletingItem(itemToDelete){

    var vm = this;
   if(confirm("Are you sure you want to delete this item from the inventory?")){
     this.productService.deleteItem(itemToDelete, vm.userId);
     vm.showAlert=false;
     vm.deleting=false;
     vm.doneDeleting=true;
   }
   this.router.navigate(['stripe', this.userId]);
 }
}
