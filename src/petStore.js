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

	addPet = newPet => {
		newPet.id = this.pets[this.pets.length - 1].id + 1;
		this.pets = [...this.pets, newPet];
	};

	updatePet = petNewInfo => {
		this.pets = this.pets.map(pet =>
			pet.id === petNewInfo.id ? petNewInfo : pet
		);
	};
}

const store = new petStore();
export default store;
