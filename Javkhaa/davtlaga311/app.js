// console.log("loading")

var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("onload function is called")
        console.log(xhr.responseText)
        const data = JSON.parse(xhr.responseText);
        // console.log(data);

        const body = document.querySelector('body');
        const table = document.createElement('table');
        const tr_header = document.createElement('tr');
        const name_header = document.createElement('th');
        name_header.innerHTML = "Name";
        const age_header = document.createElement('th')
        age_header.innerHTML = "Age";
        const job_header = document.createElement('th')
        job_header.innerHTML = "Job";
        tr_header.appendChild(name_header)
        tr_header.appendChild(age_header)
        tr_header.appendChild(job_header)
        table.appendChild(tr_header)
        body.appendChild(table)


        data.map((element) => {
            // console.log(element.name);
            const tr = document.createElement('tr');
            const name = document.createElement('td');
            name.innerHTML = element.name;
            const age = document.createElement('td')
            age.innerHTML = element.age;
            const job = document.createElement('td')
            job.innerHTML = element.job;
            tr.appendChild(name)
            tr.appendChild(age)
            tr.appendChild(job)
            table.appendChild(tr)
        })
        body.appendChild(table);

    }
};
xhr.open('GET', 'test.json');

xhr.send();

fetch('test.json')
    .then((e) => e.text()
    ).then((e) => console.log(e))

