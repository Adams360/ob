

const data = fetch('./task-1.json')
    .then(response => response.json())
    .then(data => {
        const placeholder = document.querySelector('#placeholder'); 
        const pets = data.pets;

        const story = 
             `${data.name.first} ${data.name.last} 
             lives in ${data.address.city} City, 
             ${data.name.first} is ${data.status} to ${data.partner.name} and they both
             have ${data.kids.number} kids ${data.kids.boys.numbers} boys and a girl, 
             ${data.kids.number}, Will and Michelle.
             John is 8, Will is 4 and Michelle is 2 years old.
             Steve works at MTV as a marketing director, he has been working there for
             the past 6 years.
             The fishers have ${pets.length} pets: ${pets.join(', ')}.` 

        placeholder.innerHTML = story;
        
    }).catch((error) => {
        console.error('Error:', error);
    });

