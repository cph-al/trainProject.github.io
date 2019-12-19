class station {
    constructor() {
        this.station = []
        this.stations = document.querySelector("#stations")
        this.tInfo = document.querySelector("#sInfo")
        this.sWelcome = document.querySelector("#welcome")
        this.tInfoToilet = document.querySelector("#sToilet")
        this.tInfoTicket = document.querySelector("#sTicket")
        this.tInfoShop = document.querySelector("#sShop")
        this.sInfo = document.querySelector("#sInfo")
        this.trainInfo = document.querySelector("#TrainInfo")
        this.hourlyDepartures = document.querySelector("#hourlydepartures")
        this.hourlyDeparturesTwo = document.querySelector("#hourlydeparturesTwo")
        this.getStations();
    }

    getStations() {
        fetch("stations.json")
            .then((res) => res.json())
            .then((data) => {
                this.station = data
                for (let i = 0; i < this.station.length; i++) {
                    let StationDiv = document.createElement("div")
                    let StationName = document.createElement("div")
                    StationName.innerHTML = this.station[i].Shortened
                    StationDiv.addEventListener("mouseleave", () => {
                        this.trainInfo.classList.add("hide")
                    })
                    StationDiv.addEventListener("mouseenter", () => {
                        this.trainInfo.classList.remove("hide");
                        this.sWelcome.innerHTML = "Welcome to " + this.station[i].Name + "!"
                        this.tInfoToilet.innerHTML = this.station[i].Facilities.Toilet
                        if (this.station[i].Facilities.Toilet == "Yes") {
                            this.tInfoToilet.style.color = "Green"
                        } else {
                            this.tInfoToilet.style.color = "Red"
                        }
                        this.tInfoTicket.innerHTML = this.station[i].Facilities.Ticketmaster
                        if (this.station[i].Facilities.Ticketmaster == "Yes") {
                            this.tInfoTicket.style.color = "Green"
                        } else {
                            this.tInfoTicket.style.color = "Red"
                        }
                        this.tInfoShop.innerHTML = this.station[i].Facilities.Shop
                        if (this.station[i].Facilities.Shop == "Yes") {
                            this.tInfoShop.style.color = "Green"
                        } else {
                            this.tInfoShop.style.color = "Red"
                        }
                        this.hourlyDepartures.innerHTML = " "+this.station[i].HourlyDeparture[1]+" : "+this.station[i].HourlyDeparture["2"]+" : "+this.station[i].HourlyDeparture[3]+" : "+this.station[i].HourlyDeparture[4]+" : "+this.station[i].HourlyDeparture[5]+" : "+this.station[i].HourlyDeparture[6]
                        this.hourlyDeparturesTwo.innerHTML = " "+this.station[i].HourlyDeparture[6]+" : "+this.station[i].HourlyDeparture[1]+" : "+this.station[i].HourlyDeparture[2]+" : "+this.station[i].HourlyDeparture[3]+" : "+this.station[i].HourlyDeparture[4]+" : "+this.station[i].HourlyDeparture[5]
                    })
                    let x = this.station[i].Location.x
                    let y = this.station[i].Location.y
                    StationDiv.setAttribute("id", i + 1 + this.station[i].Name)
                    StationName.setAttribute("id", "stationText")
                    StationDiv.style.top = y + "px"
                    StationDiv.style.left = x + "px"
                    StationDiv.classList.add('station')
                    StationDiv.appendChild(StationName)
                    this.stations.appendChild(StationDiv)


                }
            })
    }
}
export default station