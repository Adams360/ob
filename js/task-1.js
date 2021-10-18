

const data = fetch('./task-1.json')
    .then(response => response.json())
    .then(data => {
        const placeholder = document.querySelector('#placeholder');

        const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        function inWords(num) {
            if ((num = num.toString()).length > 9) return '???';
            n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (!n) return; var str = '';
            str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
            return str;
        }

        let boysNum = 0,
            girlsNum = 0;

        data.children.forEach(child => {
            if (child.gender === 'male') {
                boysNum += 1;
            }

            if (child.gender === 'female') {
                girlsNum += 1;
            }
        });


        const printNumber = (number) => number > 1 ? number : 'a'
        const printPlural = (word, number) => word + (number > 1 ? 's' : '')
        
        const sentence = `${printNumber(boysNum)} ${printPlural('boy', boysNum)} and ${printNumber(girlsNum)} ${printPlural('girl', girlsNum)}`

        const story =
            `<strong>${data.name.first} ${data.name.last}</strong>
             <hr>
             lives in <strong>${data.address.city}</strong> City, 
             <hr>
             <strong>${data.name.first}</strong> is <strong>${data.status}</strong>
             to <strong>${data.partner.name}</strong>
             <hr>
             and they both have <strong>${inWords(data.children.length)}</strong> kids
             <hr>
             <strong>${sentence}</strong>
             <hr>
             <strong>${data.children[0].name}, ${data.children[1].name}</strong> 
             and <strong>${data.children[2].name}</strong>.
             <hr>
             <strong>${data.children[0].name}</strong> is <strong>${data.children[0].age}</strong>, 
             ${data.children[1].name} is <strong>${data.children[1].age}</strong> 
             and <strong>${data.children[2].name}</strong> is 
             <strong>${data.children[2].age}</strong> years old.
             <hr>
             <strong>${data.name.first}</strong> works at <strong>${data.job.location.toUpperCase()}</strong> as a <strong>${data.job.position}</strong>,
             <hr>
             he has been working there for the past 
             <strong>${data.job.periodInMonths / 12}</strong> years.
             <hr>
             The fishers have <strong>${data.pets.length}</strong> 
             pets: <strong>${data.pets.join(', ')}</strong>.`

        placeholder.innerHTML = story;

    }).catch((error) => {
        console.error('Error:', error);
    });

