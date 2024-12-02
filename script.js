
async function getData() {
    const value = document.querySelector('input').value;
    const url  = `http://www.omdbapi.com/?t=${value}&apikey=e06c98c3`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // console.log(data.Response);
    if(data.Response != 'False'){
        document.querySelector('.hero-section').innerHTML = `
            <div style="background-color:aliceblue; height:auto; width:500px; padding:18px; border-radius:20px; display:flex; align-items:center; justify-content:space-evenly; flex-direction:column;">
                <img src=${data.Poster} style="height:180px; margin-bottom:7px">
                <h3 style="font-size:20px">${data.Title}</h3>
                <span style="width:100%; display:flex; align-items:center; justify-content:space-evenly; margin-top:7px"><p><strong>IMDb Rating : </strong>${data.imdbRating}</p> <p><strong>Year : </strong>${data.Year}</p></span>
                <p style="text-align:center; margin-top:7px"><strong>Runtime : </strong>${data.Runtime}</p> 
                <p style="text-align:center;margin-top:7px"><strong>Actors : </strong>${data.Actors}</p>
                <p style="text-align:center;margin-top:7px"><strong>Genre : </strong>${data.Genre}</p>
                <p style="text-align:center;margin-top:7px"><strong>Language : </strong>${data.Language}</p>
                <p style="text-align:center;margin-top:7px"><strong>Director : </strong>${data.Director}</p>
                <p style="text-align:center;margin-top:7px"><strong>Writer : </strong>${data.Writer}</p>
                <p style="text-align:center;margin-top:7px"><strong>BoxOffice : </strong>${data.BoxOffice}</p>
                <p style="text-align:center;margin-top:7px"><strong>Plot : </strong>${data.Plot}</p>
            </div>
        `
    }else{
        document.querySelector('.hero-section').innerHTML = `
            <div style="height:auto; width:500px; padding:18px; border-radius:20px; text-align:center;">
                <p style="color:white"><strong>No Matching Result....</strong></p>
            </div>
        `
    }
}