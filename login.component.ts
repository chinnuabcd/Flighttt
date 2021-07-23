import { Component, OnInit } from '@angular/core';
import { Booking } from './booking';
import { Flight } from './flight';
import { allFlights } from './flights';

@Component({
selector: 'app-booking',
templateUrl:'./login.component.html',
styleUrls: ['./login.component.css']
})
export class BookingComponent implements OnInit {

 flights = allFlights
bookings: Booking[] = new Array()
referenceNumber: number = 1
message: string = ""

bookTab = false
availableFlightsTab = true
passengerTab = false
bookingConfirmTab = false
bookingSearchTab = false
checkInTab = false

 flight: Flight = new Flight(1, '', '', '', new Date(), 0)
booking: Booking = new Booking(0, 0, '', '')

 passengerFirstName: Object = ""
passengerLastName: Object = ""
bookingId: number = 0

 constructor() { }

 ngOnInit(): void {console.log(this.flights)
}

 book(flight: Flight) {
this.availableFlightsTab = false
this.bookTab = true
this.flight = flight
}

 submitFlight() {
this.bookTab = false
this.passengerTab = true
}

 submitPassenger() {
this.passengerTab = false
this.bookingConfirmTab = true
this.message = `Your Booking is confirmed. Reference Number is ${this.referenceNumber}`
console.log(this.passengerFirstName + "-" + this.passengerLastName)
let newBooking = new Booking(this.referenceNumber, this.flight.flightId, this.passengerFirstName.toString() , this.passengerLastName.toString())
this.bookings.push(newBooking)
++this.referenceNumber
}

 back() {
this.message = ""
this.bookingConfirmTab = false
this.bookingSearchTab = false
this.checkInTab = false
this.availableFlightsTab = true
}

 searchBooking() {
this.availableFlightsTab = false
this.bookingSearchTab = true
}

 searchForBooking(bookingId: number) {
console.log(this.bookings)
this.message = ""
this.bookings.forEach(booking => {
if(booking.bookingId === bookingId) {
console.log(booking)
this.message = this.flight.name + " " + this.flight.from + " " + this.flight.to + " " + this.flight.date.toDateString() + booking.passengerFirstName +" "+ booking.passengerLastName
}
});
if(this.message.length == 0) {
this.message = "Booking with given doesn't exist"
}
}

 checkIn() {
this.bookingSearchTab = false
this.checkInTab = true
this.message = "Checked In, Seat Number " + Math.floor(Math.random() * 5) + 1 + ", checkin Id is " +Math.floor(Math.random() * 3) + 1
}

}