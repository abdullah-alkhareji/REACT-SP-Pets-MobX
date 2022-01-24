import { makeAutoObservable } from "mobx";
import petsData from "./petsData";

class petStore {
	pets = petsData;
	query = "";
	type = "";

	constructor() {
		makeAutoObservable(this);
	}

	handleAdopt = petId => {
		this.pets = this.pets.filter(pet => pet.id !== petId);
	};

	setQuery = e => {
		this.query = e;
	};

	setType = e => {
		this.type = e;
	};
}

const store = new petStore();
export default store;
