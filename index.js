document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll('.seat');
    
    let selectedSeat = null;
    let seatText = document.getElementById("selectedSeat"); 
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            const dataAvailableValue = seat.getAttribute('data-available');
            if (dataAvailableValue === "true") {
                // Toggle the 'selected' class
                this.classList.toggle('selected');
    
                if (this.classList.contains('selected')) {
                    // If the seat is now selected, update the selectedSeat reference
                    if (selectedSeat !== null && selectedSeat !== this) {
                        // Remove 'selected' class from the previously selected seat
                        selectedSeat.classList.remove('selected');
                    }
                    selectedSeat = this;
                    seatText.textContent = this.textContent;
                } else {
                    // If the seat is now unselected
                    selectedSeat = null;
                    seatText.textContent = '0';
                }
            }              
        });
    });
});