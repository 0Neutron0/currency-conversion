export async function getData(url){
    const request = await fetch(url);
    const data = request.json();
    return data;
};
