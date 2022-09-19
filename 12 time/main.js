
const put = document.getElementById('put');


 setInterval(() => {
     
    
const str = new Date().toLocaleString('en-US', { timeZone: 'Asia/India' });
put.innerHTML = str;
}, 1000);

