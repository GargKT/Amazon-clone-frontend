/*
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();



fetch('https://supersimplebackend.dev/greeting').then((response)=>{
    return response.text();
}).then((text) => {
    console.log(text);
})



async function getText(){
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const text = await response.text();
    console.log(text);
}
getText();



async function getName() {
    const response  = await fetch('https://supersimplebackend.dev/greeting' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:'Krati'
        })
    });
    const text = await response.text();
    console.log(text);
}
getName();



async function getText(){
    try{
        const response = await fetch('https://amazon.com');
        const text = await response.text();
        console.log(text);
    } catch{
        console.log('bad CRS request. CODE CANNOT BE SENT BY AMAZON DUE TO SECURITY REASONS');
    }
}
getText();



async function getText(){
    try{
        const response = await fetch('https://supersimplebackend.dev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status >= 400){
            throw response;
        }

        const text = await response.text();
        console.log(text);

    } catch(error){

        if(error.status === 400){
            const errorMessage = await error.json();
            console.log(errorMessage);
        }   
        else{
            console.log('Network Error');
        }    
    }
}
getText();
*/

