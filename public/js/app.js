import getSessions, {sessionTemplate} from "./sessionRepository.js"

function render() {
    let list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
}

let data = {
    listItems: []
}

getSessions()
    .then((sessions)=>{
        console.log('promises!')
        data.listItems = sessions;
        render();
    })
