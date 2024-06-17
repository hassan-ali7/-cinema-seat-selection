import { seatingData } from './seatingData.js';
console.log(seatingData);

document.addEventListener('DOMContentLoaded', function () {
   
    seatingData.sections.forEach(section => {

        const classSection = document.querySelector(`.section-${section.section}`);

        if (!classSection) {
            console.error(`Section container for ${section.section} not found.`);
            return;
        }
        // Iterate through seats array of current section
        section.seats.forEach(seat => {

            // Create a <div> element for the seat
            const div = createSeatElement(seat);

            // Append the <div> to the section container
            classSection.appendChild(div);
        });
    });

    // Function to create a <div> element for a seat
    function createSeatElement(seat) {
        const div = document.createElement("div");
        div.classList.add('seat');
        div.textContent = seat.seat;
        div.setAttribute('data-available', seat.available);
        // Check the value of seat.available and add class accordingly
        if (!seat.available) {
            div.classList.add('unavailble-seat');
        }
        return div;
    }
});