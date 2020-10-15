const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList =  document.querySelector(.'news-list');

searchForm.addEventListener('submit',retrieve)

function retrieve(e){
    e.preventDefault()
    const apikey = '1da44f4332144d9fba954ca8035e20e0'
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
    
    fetch(url).then((Res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    }
    let topic = input.nodeValue;
    console.log(topic);
}