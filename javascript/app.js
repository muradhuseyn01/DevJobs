const containerTitle = document.querySelector('.container__title');
const containerSearchBorder = document.querySelector('.container__title-search');
const container = document.querySelector('.container');
const containerSearchLocation = document.querySelector('.location-input');
const containerSearchLocation2 = document.querySelector('.location-input-2');
const containerSearchFilter = document.querySelector('#search-input');
const containerSearchCheckbox = document.querySelector('#checkbox');
const containerSearchCheckbox2 = document.querySelector('.checkbox-2');
const filterResponsive = document.querySelector('.filter__responsive');
const searchBtn = document.querySelector('.searchInClick');
const jobHeaderCont = document.querySelector('.container__title-job-header');
const filterBtn = document.querySelector(".filterBtn");
const hideFilterBtn = document.querySelector('#hide-filter');
const workInfo = document.querySelector('.work__info');
const jobCards = document.querySelector('.job__cards');
const modeBtn = document.querySelector('.mode-button');
const body = document.querySelector('body');
const chech = document.querySelector('chech');
const root = document.querySelector(':root');
let result = [];

const editForm = document.querySelector('#edit-job-form');
const addForm = document.querySelector('#add-form');
const addFormBtn = document.querySelector('.form-footer-btn-add');
const idTitle = document.querySelector('#title-id');
const headTitle = document.querySelector('#title-head');
const companyTitle = document.querySelector('#title-company');
const imgTitle = document.querySelector('#title-img');
const workType = document.querySelector('#title-work');
const locationTitle = document.querySelector('#title-location');

const generateSite = document.querySelector('#generate-site');
const generateInfo = document.querySelector('#generate-info');
const requirementsInfo = document.querySelector('#requirements-info');
const requirementsListId = document.querySelector('#generate-site');
const requirementsListText = document.querySelector('#requirements-list-text');
const whatDoInfo = document.querySelector('#what-do-info');
const whatDoListId = document.querySelector('#what-do-list-id');
const whatDoListText = document.querySelector('#what-do-list-text');
let noresult = document.querySelector("#noresult-err");

let data = [ /*
    {
        id: '1',
        img: "./assets/images/Group 1.svg",
        time: "5h ago",
        workTime: "Full Time",
        title: "Senior Software Engineer",
        company: "Scoot",
        location: "United Kingdom",
        details:
        {

            site: 'scoot.com',
            infoDetail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna',
            requirements: {
                info: 'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.',
                list: [
                    {
                        id: '1',
                        listInfo: 'Morbi interdum mollis sapien. Sed',
                        link: '',
                    },
                    {
                        id: '2',
                        listInfo: 'Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus',
                        link: '',
                    },
                    {
                        id: '3',
                        listInfo: 'Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.',
                        link: '',
                    },
                    {
                        id: '4',
                        listInfo: 'Morbi interdum mollis sapien. Sed',
                        link: '',
                    }
                ]
            },
            whatWillYouDo: {
                info: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
                list: [
                    {
                        id: '1',
                        listInfo: 'Morbi interdum mollis sapien. Sed',
                        link: '',
                    },
                    {
                        id: '2',
                        listInfo: 'Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus',
                        link: '',
                    },
                    {
                        id: '3',
                        listInfo: 'Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.',
                        link: '',
                    },
                    {
                        id: '4',
                        listInfo: 'Morbi interdum mollis sapien. Sed',
                        link: '',
                    }
                ]
            }
        },
    }, 
    {
        id: '2',
        img: "./assets/images/Group 2.svg",
        time: "20h ago",
        workTime: "Part Time",
        title: "Haskell and PureScript Dev",
        company: "Blogr",
        location: "United States",
    },
    {
        id: '3',
        img: "./assets/images/Group 3.svg",
        time: "1d ago",
        workTime: "Part Time",
        title: "Midlevel Back End Engineer",
        company: "Vector",
        location: "Russia",
    },
    {
        id: '4',
        img: "./assets/images/Group 4.svg",
        time: "2d ago",
        workTime: "Full Time",
        title: "Senior Application Engineer",
        company: "Office Lite",
        location: "Japan",
    },
    {
        id: '5',
        img: "./assets/images/Group 5.svg",
        time: "2d ago",
        workTime: "Part Time",
        title: "Remote DevOps Engineer",
        company: "Pod",
        location: "Thailand",
    },
*/
];
console.log(data);
const jobsData = localStorage.getItem('jobsData');
let mainData = [];

if (jobsData) {
    try {
        mainData = JSON.parse(jobsData);
    }
    catch (err) {
        console.error(err)
    }
}
data = mainData;

function getData(x) {
    let dataHtml = '';

    x.map((item) => {
        dataHtml += `
        <div class="job__cards-card">
        <div class="job__cards-card-img">
            <img src="${item.img}" alt="photo-icon">
        </div>
        <div class="job__cards-card-info">
            <div class="job__cards-card-time">
                <p>${item.time}</p>
                <div class="card-time-span"></div>
                <p>${item.workTime}</p>
            </div>
            <div class="job__cards-card-details">
               <a href='./details-page.html?id=${item.id}'>
            <h3>${item.title}</h3></a>
                <p>${item.company}</p>
                <div class="job__cards-details-foot">
                <a href="#">${item.location}</a>
                <a href="./edit-job.html?id=${item.id}">Edit</a>
                <a href="#" onClick="deletejob(${item.id})">Delete</a>
                </div>
                
            </div>
        </div>
    </div>
        `
    })
    jobCards.innerHTML = dataHtml;
}


function getCurrentUrl() {
    let url = new URLSearchParams(window.location.search);
    let id = url.get("id");
    console.log(id);
    let pageName = window.location.pathname.split('/').pop();
    return {
        id: id,
        pageName: pageName,
    }
}
const page = getCurrentUrl();


function getById(id, data) {
    return data.find(item => {
        return item.id == id;
    })
}

window.onload = () => {
    if (page.pageName === 'index.html') {
        getData(data);
        searchInput();
        mode();
        filters();
        searchInputFilterResp()
    }
    else if (page.pageName === 'details-page.html') {
        generateData();
        mode();
    }
    else if ((page.pageName === 'add-job.html') || (page.pageName === 'edit-job.html')) {
        mode();
    }
}

let pageTheme = localStorage.getItem("theme");
if (pageTheme == "dark") {
    modeBtn.classList.toggle("active");
    localStorage.setItem('theme', 'dark');
    root.style.setProperty('--bg-white', '#121721');
    root.style.setProperty('--text-color-main', '#FFF');
    root.style.setProperty('--white-color', '#19202D');
}

function generateData() {

    let dataFind = data.find(item => {
        return item.id == page.id;
    });
    console.log(dataFind);
    workInfo.innerHTML += `
      <div class="work__info-up">
      <div class="work__info-up-details">
  
          <div class="work__info-up-time">
              <p>${dataFind.time}</p>
              <div class="info-time-span"></div>
              <p>${dataFind.workTime}</p>
          </div>
          <div class="work__info-up-title">
              <h3>${dataFind.title}</h3>
              <span>${dataFind.location}</span>
          </div>
  
      </div>
      <div class="work__info-up-btn">
          <button>Apply Now</button>
      </div>
  </div>
  <div class="work__info-down">
      <p>${dataFind.details.infoDetail}</p>
      <h3>Requirements</h3>
      <p>${dataFind.details.requirements.info}
      <ul>
          <li>${dataFind.details.requirements.list.map(item => {
        return item.listInfo.substring(0, 38);
    })}</li>
          <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
          <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
              pellentesque mauris ut lectus.</li>
          <li>Morbi interdum mollis sapien. Sed</li>
      </ul>
      </p>
      <h3>What You Will Do</h3>
      <p>${dataFind.details.whatWillYouDo?.info}</p>
      <ol>
          <li>${dataFind.details.whatWillYouDo?.list.map(item => {
        return item.listInfo.substring(0, 38);
    })}</li>
          <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
          <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
              pellentesque mauris ut lectus.</li>
          <li>Morbi interdum mollis sapien. Sed</li>
      </ol>
  </div>
      `
    jobHeaderCont.innerHTML += `
    <div class="container__title-job-display">
            <div class="container__title-job-header-img">
                <img src="${dataFind.img}" alt="photo">
            </div>
            <div class="container__title-job-header-name">
                <h3>${dataFind.company}</h3>
                <a href="#">${dataFind.details.site}</a>
            </div>
        </div>

        <div class="container__title-job-header-btn">
            <button>Company Site</button>
        </div>
      `
}

function searchData(searchItem, key, data) {
    searchItem = searchItem.toLowerCase();

    const filterData = data.filter((item) => {
        const currentValue = item[key].toLowerCase();
        return currentValue.includes(searchItem);
    })
    return filterData;
}

function searchInput() {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let resultFilter = searchData(containerSearchFilter.value, 'title', data)

        let resultLocation = searchData(containerSearchLocation.value, 'location', resultFilter);

        if (containerSearchCheckbox.checked) {
            resultCheck = searchData('Full-time', 'workTime', resultLocation)
            getData(resultCheck);
        }
        else {
            getData(resultLocation);
        }

        if (containerSearchFilter.value == '' && containerSearchLocation.value == '') {
            noresult.innerHTML = "No Result...";
            containerSearchBorder.classList.add("error-red");
        } else {
            noresult.innerHTML = "";
            containerSearchBorder.classList.remove("error-red");
        }
    });

}

function searchInputFilterResp() {
    filterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let resultLocationResp = searchData(containerSearchLocation2.value, 'location', data);

        if (containerSearchCheckbox2.checked) {
            resultCheckResp = searchData('Full-time', 'workTime', resultLocationResp)
            getData(resultCheckResp);
        }
        else {
            getData(resultLocationResp);
        }
    });
}

function mode() {
    modeBtn.addEventListener('click', (e) => {
        modeBtn.classList.toggle('active');
        if (!modeBtn.classList.contains('active')) {
            localStorage.setItem('theme', 'light');
            root.style.setProperty('--bg-white', '#F4F6F8');
            root.style.setProperty('--bg-title', '#5964E0');
            root.style.setProperty('--white-color', '#FFF');
            root.style.setProperty('--bg-btn', '#5762e0');
            root.style.setProperty('--bg-btn-hover', '#939BF4');
            root.style.setProperty('--text-color-main', '#19202D');
            root.style.setProperty('--text-color-grey', '#6E8098');
            root.style.setProperty('--color-blue', '#5964E0');
            root.style.setProperty('--color', '#bbbee3');
            root.style.setProperty('--color-hvr', '#a9aee9');
            root.style.setProperty('--bg-toggle', '#F4F6F8');
        }
        else {
            localStorage.setItem('theme', 'dark');
            root.style.setProperty('--bg-white', '#121721');
            root.style.setProperty('--text-color-main', '#FFF');
            root.style.setProperty('--white-color', '#19202D');
        }
    });
}

function filters() {
    hideFilterBtn.addEventListener('click', (e) => {
        filterResponsive.classList.toggle('active');
        filterResponsive.classList.toggle('hide-aside');
        jobCards.classList.toggle("body-back");
        container.classList.toggle("body-back");
    })
}

if (page.pageName == 'add-job.html') {
    idTitle.addEventListener('change', (e) => {
        if (getById(e.target.value, data)) {
            addFormBtn.disabled = true;
            alert(" is available ID");
        } else {
            addFormBtn.disabled = false;
        }
    })

    addForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        let jobDataNew = {
            id: idTitle.value,
            img: imgTitle.value,
            workTime: new Date().toLocaleString("en-us", {
                dateStyle: "short",
            }),
            time: '5h ago',
            title: headTitle.value,
            company: companyTitle.value,
            location: locationTitle.value,
            details: {
                site: generateSite.value,
                infoDetail: generateInfo.value,
                requirements:
                {
                    info: requirementsInfo.value,
                    list: [
                        {
                            id: requirementsListId.value,
                            listInfo: requirementsListText.value,
                        },
                    ],
                },
                whatWillYouDo:
                {
                    info: whatDoInfo.value,
                    list: [
                        {
                            id: whatDoListId.value,
                            listInfo: whatDoListText.value,
                        },
                    ],
                },
            }
        }
        let empthyJobArray = [];
        let jobArray = Object.entries(jobDataNew);

        jobArray.find(item => {
            if (item[1] == "") {
                empthyJobArray.push(item[0]);
                alert(empthyJobArray + "  insert !");
            }
        });
        data.push(jobDataNew);
        localStorage.setItem('jobsData', JSON.stringify(data));
        window.location.href = "./index.html";
        alert('Added data')
    })
}


if (page.pageName === 'edit-job.html') {
    let editData = getById(page.id, data);

    idTitle.value = editData.id;
    headTitle.value = editData.title;
    companyTitle.value = editData.company;
    imgTitle.value = editData.img;
    workType.value = editData.workTime;
    locationTitle.value = editData.location;

    generateSite.value = editData.details.site;
    generateInfo.value = editData.details.infoDetail;
    requirementsInfo.value = editData.details.requirements.info;
    whatDoInfo.value = editData.details.whatWillYouDo.info;
    requirementsListId.value = editData.details.requirements.list[0].id;
    requirementsListText.value = editData.details.requirements.list[0].listInfo;
    whatDoListId.value = editData.details.whatWillYouDo.list[0].id;
    whatDoListText.value = editData.details.whatWillYouDo.list[0].listInfo;

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newData = {
            id: idTitle.value,
            title: headTitle.value,
            company: companyTitle.value,
            time: '5h ago',
            img: imgTitle.value,
            workTime: workType.value,
            location: locationTitle.value,
            details: {
                site: generateSite.value,
                infoDetail: generateInfo.value,
                requirements:
                {
                    info: requirementsInfo.value,
                    list: [
                        {
                            id: requirementsListId.value,
                            listInfo: requirementsListText.value,
                        },
                    ],
                },
                whatWillYouDo:
                {
                    info: whatDoInfo.value,
                    list: [
                        {
                            id: whatDoListId.value,
                            listInfo: whatDoListText.value,
                        },
                    ],
                },
            }
        }

        let updateData = data.map(item => {
            if (item.id == page.id) {
                return {
                    ...item,
                    ...newData
                }
            }
            else {
                return item
            }
        });
        localStorage.setItem('jobsData', JSON.stringify(updateData));
        alert("Edided");
        window.location.href = "./index.html";
    });
}

if (page.pageName === 'index.html') {
    function deletejob(id) {
        event.preventDefault();
        let newDelete = data.filter(item => item.id != id);

        getData(newDelete);
        localStorage.setItem('jobsData', JSON.stringify(newDelete));
    }
}