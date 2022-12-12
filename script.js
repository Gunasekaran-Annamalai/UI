input = document.getElementById('myInput');
ul_main = document.querySelector('.filters');
chart = document.querySelector('#chart');

charts = [
    {
        title: 'Sample Analysis',
        link: '<iframe title="Sample Analysis" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=9232d87e-5cfb-4faa-9996-c7f5ce924396&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
    },
    {
        title: 'OverAll Usage',
        link: '<iframe title="Draup_Talent_OverAll Usage_08_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=69d81711-dabd-4be3-bf9c-9d9172591266&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
    },
    {
        title: 'Workforce Planning',
        link: '<iframe title="Draup_Talent_WorkforcePlanning_28_11_2022 (1)" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=880c1923-c540-4643-9837-1653927eb8f1&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
    },
    {
        title: 'Sample Analysis1',
        link: '<iframe title="Sample Analysis" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=9232d87e-5cfb-4faa-9996-c7f5ce924396&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
    },
    {
        title: 'OverAll Usage1',
        link: '<iframe title="Draup_Talent_OverAll Usage_08_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=69d81711-dabd-4be3-bf9c-9d9172591266&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
    },
    {
        title: 'Workforce Planning1',
        link: '<iframe title="Draup_Talent_WorkforcePlanning_28_11_2022 (1)" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=880c1923-c540-4643-9837-1653927eb8f1&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
    }
]

for(let i = 0; i < charts.length; i++) {
    let li_inner = document.createElement('li');
    li_inner.classList.add('filter');
    li_inner.innerText = charts[i].title;
    li_inner.dataset.index = i;
    ul_main.appendChild(li_inner);
    list = document.querySelectorAll('.filter');
}

input.addEventListener('keyup', ()=> {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
})

list.forEach(e => {
    e.addEventListener('click', ()=> {
        index = e.getAttribute('data-index');
        chart.innerHTML = charts[index].link;
    })
});