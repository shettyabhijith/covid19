window.onload = ()=> {
    liveUpdate();
}

const liveUpdate = async() => {
   const data =  await (await fetch(`https://api.covid19api.com/summary`)).json();
   const global = data["Global"];
    const myHtml = `
   
        <div class="container">
            <div class="liveDateTime text-right">
                <p> Last Updated Date : ${global["Date"].slice(0, 10)}</p>
                <p> Last Updated Time : ${global["Date"].slice(11, 19)}</p>
                
            </div>
            <div class="row justify-content-center" >
                <div class="col-md-3">
                    <div class="cardLayout text-center mb-5">
                        <div class="cardHead">
                            <h5 class="card-title bg-dark text-white p-3 ">New Confirmed</h5>
                        </div>
                        <div class="cardBody">
                           <p> ${global["NewConfirmed"]}</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-3">
                    <div class="cardLayout text-center mb-5">
                        <div class="cardHead">
                            <h5 class="card-title bg-dark text-white p-3 ">New Deaths</h5>
                        </div>
                        <div class="cardBody">
                           <p> ${global["NewDeaths"]}</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-3">
                    <div class="cardLayout text-center mb-5">
                        <div class="cardHead">
                            <h5 class="card-title bg-dark text-white p-3 ">New Recovered</h5>
                        </div>
                        <div class="cardBody">
                           <p> ${global["NewRecovered"]}</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-3">
                    <div class="cardLayout text-center mb-5">
                        <div class="cardHead">
                            <h5 class="card-title bg-dark text-white p-3 ">Total Confirmed</h5>
                        </div>
                        <div class="cardBody">
                           <p> ${global["TotalConfirmed"]}</p>
                        </div>
                    </div> 
                </div>

                <div class="col-md-3">
                    <div class="cardLayout text-center mb-5">
                        <div class="cardHead">
                            <h5 class="card-title bg-dark text-white p-3 ">Total Deaths</h5>
                        </div>
                        <div class="cardBody">
                           <p> ${global["TotalDeaths"]}</p>
                        </div>
                    </div> 
                </div>

                <div class="col-md-3">
                    <div class="cardLayout text-center mb-5">
                        <div class="cardHead">
                            <h5 class="card-title bg-dark text-white p-3 ">Total Recovered</h5>
                        </div>
                        <div class="cardBody">
                           <p> ${global["TotalRecovered"]}</p>
                        </div>
                    </div> 
                </div>

            </div>
        </div>

    `;

    



  var  country =  data["Countries"];

console.log(data);

    var slNo = 1;
    var countryHtml = "";

    for(var i=0; i<country.length ; i++){
        const { Country, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered} = country[i];

        
        countryHtml += `
        <tr>
            <td><b>${slNo}</b></td>
            <td>${Country}</td>
            <td>${NewConfirmed}</td>
            <td>${NewDeaths}</td>
            <td>${NewRecovered}</td>
            <td>${TotalConfirmed}</td>
            <td>${TotalDeaths}</td>
            <td>${TotalRecovered}</td>
        </tr>
        `;

        slNo++;
    }



    var countryHeader = `<tr>
                            <th colspan="8" style="text-align:center; background-color:#5E1D55;color:white;"><h3>Overview</h3></th>
                        </tr>

                        <tr style="background-color:#32A9EE;color:white;">
                            <th>Sl. No.</th>
                            <th>Country</th>
                            <th>NewConfirmed</th>
                            <th>NewDeaths</th>
                            <th>NewRecovered</th>
                            <th>TotalConfirmed</th>
                            <th>TotalDeaths</th>
                            <th>TotalRecovered</th>
                        </tr>`;

    document.getElementById("statusLiveUpdate").innerHTML = myHtml;
    document.getElementById("countryOverviewDetails").innerHTML = countryHeader + countryHtml;
}

