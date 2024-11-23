// Write a program that manages a database of tickets.
//  A ticket has a destination, a price, and a status. 
// Your program will receive two arguments - 
// the first is an array of strings for ticket descriptions and the second is a string, 
// representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets,
// sorted by either destination, price, or status, depending on the second parameter that your program received.
//  Always sort in ascending order (the default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. 
// See the examples for more information.
// Input
// Your program will receive two parameters - an array of strings and a single string.
// Output
// Return a sorted array of all the tickets that were registered.

class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = parseFloat(price);
      this.status = status;
    }
  }
  
  function manageTickets(ticketDescriptions, sortingCriterion) {
    // Parse the ticket descriptions into Ticket objects
    const tickets = ticketDescriptions.map((desc) => {
      const [destination, price, status] = desc.split('|');
      return new Ticket(destination, price, status);
    });
  
    // Sort tickets based on the provided criterion
    tickets.sort((a, b) => {
      if (sortingCriterion === 'price') {
        return a.price - b.price; // Numerical sorting
      } else {
        return a[sortingCriterion].localeCompare(b[sortingCriterion]); // Alphabetical sorting
      }
    });
  
    return tickets;
  }