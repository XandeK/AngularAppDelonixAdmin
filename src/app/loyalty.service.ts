import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {

  constructor(private http: HttpClient) { }

  //create new product in collection: loyaltyproducts
  createProduct(productImage: string, productName: string, productCost: string, productDesc: string) {
    return this.http.post<any[]>('./api/createProduct/' + productImage + '/' + productName + '/' + productCost + '/' + productDesc, { 'productImage': productImage, 'productName': productName, 'productCost': productCost, 'productDesc': productDesc });
  }

  //retrieve all products
  getAllProducts() {
    return this.http.get<any[]>('/api/getAllProducts');
  }
  
  //Update product
  updateProduct(_id: string, productImage: string, productName: string, productCost: string, productDesc: string) {
    return this.http.put<any[]>('./api/updateProduct/' + _id + "/" + productImage + "/" + productName + "/" + productCost + "/" + productDesc, {"productImage": productImage, "productName": productName, "productCost": productCost, "productDesc": productDesc});
    }

  //search by name
  findByName(productName: string) {
    return this.http.get('./api/findByName/' + productName);
  }

  // Create new room rate for the pricing per night of the hotel rooms
  newRoomRate(roomName: string, roomType: string, roomRate: string) {
    return this.http.post<any[]>('./api/newRoomRate/' + roomName + '/' + roomType + '/' + roomRate, { 'roomName': roomName, 'roomType': roomType, 'roomRate': roomRate });
  }

  //retrieve all room rate
  getAllRoomRate() {
    return this.http.get<any[]>('/api/getAllRoomRate');
  }

  //delete room rate
  deleteRoom(roomName: string) {
    return this.http.delete<any[]>('/api/deleteRoom/' + roomName);
  }

  //authenticate admin
  authUser(email: string, mobilenumber: string) {
    return this.http.get('/api/authuser/' + email + "/" + mobilenumber);
  }


}
