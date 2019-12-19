class information {
    constructor() {
        this.startTrain = document.querySelector("#startTrain");
        this.trainInfo = document.querySelector("#TrainInfo");
        this.trainInfoBtn = document.querySelector("#tTrainInfo");
        this.map = document.querySelector("#container");
        //this.showMap();
        this.toggleTrainInfo();
    }
    showMap() {
        this.map.addEventListener("click", () => {
            this.trainInfo.classList.toggle("hide");
        })
    }
    toggleTrainInfo() {
        this.trainInfoBtn.addEventListener("click", () => {
            this.trainInfo.classList.toggle("hide");
        })
    }
}
export default information