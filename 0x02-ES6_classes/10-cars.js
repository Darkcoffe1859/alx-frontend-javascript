export default class car {
	constructor(brand, motor, color) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}

	static get [Symbol.species]() {
		return this;
	}

	clonecar() {
		const ModelCar = this.constructor[Symbol.species];
		return new ModelCar();
	}
}
