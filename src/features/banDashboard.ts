import BanItem from "../models/banItem";
import { waitForElm } from "./utils";

export default function main(){
    const userToken = localStorage.getItem('token');
    const hub = window.location.href.split('/')[5];


    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userToken}`);
    const myInit: RequestInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

    
    fetch(`https://api.faceit.com/hubs/v1/hub/${hub}/ban?offset=0&sort=desc&limit=100`, myInit)
        .then(response => response.json())
        .then(async raw => {
            const container = await waitForElm('.sc-jetCRR') as HTMLElement;
            await waitForElm('.ScrollSpy__Spy-sc-8oriu6-0');
            container.innerHTML = "";
            const data = raw.payload.items;
            const bannedUsers = data.map((banItem: any) => BanItem.fromJson(banItem));
            container.appendChild(searchBuilder());
            container.appendChild(tableBuilder(bannedUsers));
        })
        .catch(error => console.log(error));
}

function searchBuilder() {
    const search = document.createElement('div');
    search.setAttribute('class', 'search'); 
    search.innerHTML = `<input style="padding:8px 10px;" type="text" id="search" placeholder="Search For Player">`;
    search.appendChild(searchButton());
    return search;
}

function searchButton() {
    const button = document.createElement("button");
    button.style.backgroundColor = '#ff5500';
    button.style.border = 'none';
    button.style.color = 'white';
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#ff7700';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#ff7700';
    });
    button.onclick = () => {//TODO : AJAX call to search for player

    };

    return button;
}

function tableBuilder(bannedUsers: BanItem[]) {
    const table = document.createElement('table');
    table.setAttribute('id', 'banTable');
    table.setAttribute('class', 'table table-striped table-bordered');
    table.setAttribute('style', 'width:100%');
    table.innerHTML = `<thead>
        <tr>
            <th>Player</th>
            <th>Reason</th>
            <th>Expires</th>
            <th>Admin</th>
        </tr>
    </thead>`;
    table.innerHTML += bannedUsers.map(banItem => {
        return `<tr>
            <td>${banItem.user.nickname}</td>
            <td>${banItem.reason}</td>
            <td>${banItem.createdAt}</td>
            <td>${banItem.createdBy.nickname}</td>
        </tr>`;
    }).join('');
    return table;
}
