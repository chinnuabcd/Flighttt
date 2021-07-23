export class Flight {
    constructor(
    public flightId: number,
    public name: string,
    public from: string,
    public to: string,
    public date: Date,
    public fare: number
    ) { }
    }