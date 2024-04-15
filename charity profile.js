<button id="volunteerNowBtn">Volunteer, Now</button>
const volunteerNowBtn= document.getElementById('volunteerNowBtn');


volunteerNowBtn.addEventListener('click', function() {
    alert('Thank you for volunteering!');
});


function handleVolunteerClick() {
    
    const newParagraph = document.createElement('p');

  
    newParagraph.textContent = 'Thank you for volunteering! We appreciate your support.';

    document.body.appendChild(newParagraph);
}


const volunteerBtn = document.getElementById('volunteerBtn');


volunteerBtn.addEventListener('click', handleVolunteerClick);
