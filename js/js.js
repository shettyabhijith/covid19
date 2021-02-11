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

    




console.log(global["Date"]);



    document.getElementById("statusLiveUpdate").innerHTML = myHtml;

}

