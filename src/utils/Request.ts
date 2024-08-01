export async function request (url:string) {
    const response = await fetch(url);

    if(!response.ok){
        alert(url);
        throw new Error(`Can't accept the url ${url}.`)
        
    }

    return response.json();
}