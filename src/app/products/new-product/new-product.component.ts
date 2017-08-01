import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NgForm } from '@angular/forms';
import { Product } from './../../shared/product.model';
import { ApiService } from './../../app.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 
  loading: Boolean = false;
  newProduct: Product;
  folder: string = 'img';

  constructor(
    public api: ApiService,
    public db: AngularFireDatabase, 
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;

    const formValues = Object.assign({}, form.value);
    let storageRef = firebase.storage().ref();
        let success = false;
        // This currently only grabs item 0, TODO refactor it to grab them all
        for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
            let folder = this.folder;
            let path = `/${this.folder}/${selectedFile.name}`;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then((snapshot) => {
                //console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                //console.log(snapshot.metadata);
                var url = snapshot.downloadURL;
                //console.log('Uploaded a blob or file! Now storing the reference at',`/${this.folder}/`);
                //db.list(`/${folder}/`).push({ path: path, filename: selectedFile.name })
                //console.log('File available at', url);
                  const product: Product = {
                    name: `${formValues.name}`,
                    description: `${formValues.description}`,
                    price: formValues.price,
                    stock: formValues.stock,
                    picture: url
                  };
                  this.api.post('products', product)
                    .subscribe(data => {
                      form.reset();
                      this.loading = false;
                      this.newProduct = data;
                    });

            });
            
        }
  }

}
