const owner = "JesuFrancesco";
const repo = "lissachatina-app-public-resources";

const api = `https://api.github.com/repos/${owner}/${repo}/contents/`;

async function loadFiles(path=""){

const url = api + path;
const res = await fetch(url);
const data = await res.json();

const list = document.getElementById("file-list");
list.innerHTML="";

document.getElementById("path").innerText = "/" + path;

if(path!=""){
const back = document.createElement("li");
back.innerHTML = `<a href="#" onclick="loadFiles('${path.split('/').slice(0,-1).join('/')}')">⬅ back</a>`;
list.appendChild(back);
}

data.forEach(file =>{

const li = document.createElement("li");

if(file.type==="dir"){
li.innerHTML = `<a class="folder" href="#" onclick="loadFiles('${file.path}')">📁 ${file.name}</a>`;
}

if(file.type==="file"){
li.innerHTML = `<a class="file" target="_blank" href="${file.download_url}">📄 ${file.name}</a>`;
}

list.appendChild(li);

});

}

loadFiles();

