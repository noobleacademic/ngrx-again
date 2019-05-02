import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenData} from '../../modal/token.data';
import {AccessString} from '../../constants/acess-url';
import {UserData} from '../../modal/userdata';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
      constructor(private http: HttpClient) {
      }

      authenticateUser(userName, password): Observable<TokenData> {
            console.log(userName, password);
            /** Create the Http Parameters to be send with the request*/
            const getTokenParams: HttpParams = new HttpParams()
                  .append('grant_type', 'password')
                  .append('username', userName)
                  .append('password', password);
            /**Create the headers to be send with the request*/
            const getTokenHeaders: HttpHeaders = new HttpHeaders()
                  .append('Authorization', 'Basic ' + btoa('client:secret'));
            /** Call the Post method with the token Url and the created headers.
             * This will return the bearer token which can be used for further server access*/
            return this.http.post<TokenData>(AccessString.tokenUrl, {
                  withCredentials: true
            }, {
                  headers: getTokenHeaders,
                  params: getTokenParams
            });
      }

      getUser(): Observable<UserData> {
            const token = localStorage.getItem('token');
            const tokenJSON = JSON.parse(token);
            if (token != null || tokenJSON.expires_in < new Date().getTime()) {
                  const getTaskHeaders: HttpHeaders = new HttpHeaders()
                        .append('Authorization', 'Bearer' + tokenJSON.access_token);
                  return this.http.get<UserData>(`http://localhost:8765/oauth/api/getUserDetails`,
                        {
                              headers: getTaskHeaders
                        });
            }
      }
}
// getUser(): Observable<UserData> {
      //       const token = localStorage.getItem('token');
      //       const tokenJSON = JSON.parse(token);
      //       if (token != null || tokenJSON.expires_in < new Date().getTime()) {
      //             const getTaskHeaders: HttpHeaders = new HttpHeaders()
      //                   .append('Authorization', 'Bearer' + tokenJSON.access_token);
      //             return this.http.get<UserData>(`http://localhost:8765/oauth/api/getUserDetails`,
      //                   {
      //                         headers: getTaskHeaders
      //                   });
      //       }
      // }

