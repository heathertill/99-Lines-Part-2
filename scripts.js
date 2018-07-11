document.addEventListener('DOMContentLoaded', function () {

    let btnSing = document.getElementById('btn');

    btnSing.addEventListener('click', function () {
        let body = document.body;
        let heather = document.createElement('div');
        heather.className = 'friend';
        let h3H = document.createElement('h3');
        let h3HText = document.createTextNode('Heather');
        h3H.appendChild(h3HText);
        heather.appendChild(h3H);
        body.appendChild(heather);

        let kenneth = document.createElement('div');
        kenneth.className = 'friend';
        let h3K = document.createElement('h3');
        let h3KText = document.createTextNode('Kenneth');
        h3K.appendChild(h3KText);
        kenneth.appendChild(h3K);
        body.appendChild(kenneth);


        let caroline = document.createElement('div');
        caroline.className = 'friend';
        let h3C = document.createElement('h3');
        let h3CText = document.createTextNode('Caroline');
        h3C.appendChild(h3CText);
        caroline.appendChild(h3C);
        body.appendChild(caroline);

        let reid = document.createElement('div');
        reid.className = 'friend';
        let h3R = document.createElement('h3');
        let h3RText = document.createTextNode('Reid');
        h3R.appendChild(h3RText);
        reid.appendChild(h3R);
        body.appendChild(reid);

        let davis = document.createElement('div');
        davis.className = 'friend';
        let h3D = document.createElement('h3');
        let h3DText = document.createTextNode('Davis');
        h3D.appendChild(h3DText);
        davis.appendChild(h3D);
        body.appendChild(davis);

        let friends = ['Heather', 'Kenneth', 'Caroline', 'Reid', 'Davis'];

        let refrain1 = ' lines of code in the file, ';
        let refrain2 = ' lines of code, ';
        let refrain3 = ' strikes one out, clears it all out, ';
        let refrain4 = ' lines of code in the file.';
        let refrain5 = ' line of code in the file, ';
        let refrain6 = ' line of code, ';
        let refrain7 = 'no more lines of code in the file.';

        let lyrics = [refrain1, refrain2, refrain3, refrain4, refrain5, refrain6, refrain7];
        let people = document.querySelectorAll('div.friend');

        function func2(friends, people) {
            for (let i = 99; i > 0; i--) {
                if (i > 2) {
                    let song = document.createElement('p');
                    let text = document.createTextNode(i + lyrics[0] + i + lyrics[1] + friends + lyrics[2] + (i - 1) + lyrics[3]);
                    people.appendChild(song);
                    song.appendChild(text);
                }
                else if (i > 1) {
                    let song = document.createElement('p');
                    let text = document.createTextNode(i + lyrics[0] + i + lyrics[1] + friends + lyrics[2] + (i - 1) + lyrics[5]);
                    people.appendChild(song);
                    song.appendChild(text);
                }
                else if (i > 0) {
                    let song = document.createElement('p');
                    let text = document.createTextNode(i + lyrics[4] + i + lyrics[5] + friends + lyrics[2] + lyrics[6]);
                    people.appendChild(song);
                    song.appendChild(text);
                }
            }
        }
        func2(friends[0], people[0]);
        func2(friends[1], people[1]);
        func2(friends[2], people[2]);
        func2(friends[3], people[3]);
        func2(friends[4], people[4]);
    })
})





