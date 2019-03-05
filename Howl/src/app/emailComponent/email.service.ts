import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EmailService {
	constructor (
		private http: HttpClient
	) {}

	getUser(model) {
		return this.http.get(`http://localhost:8080/howl/becomeASponsor?model=${JSON.stringify(model)}`);
	}

}