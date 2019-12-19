class train {
    constructor() {
        this.tOneRoute = []
        this.tTwoRoute = []
        this.startBtn = document.querySelector("#startTrain");
        this.stopBtn = document.querySelector("#stopTrain");
        this.trainOne = document.querySelector("#TrainOne");
        this.trainTwo = document.querySelector("#TrainTwo");
        this.fetchLongArray();
        this.fetchArray();
        this.startTrains();
        this.stopTrains();
        this.tOne;
        this.tTwo;
        this.trainOneMove(this.tOne);
        this.trainTwoMove(this.tTwo);
        this.i = 0;
        this.a = 0;
    }
    fetchLongArray() {
        fetch("stations.json")
            .then((res) => res.json())
            .then((data) => {
                this.tOneRoute = data
                console.log(this.tOneRoute)
            })
    }
    fetchArray() {
        fetch("shortRoute.json")
            .then((res) => res.json())
            .then((data) => {
                this.tTwoRoute = data
            })
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    startTrains() {
        this.startBtn.addEventListener("click", () => {
            //this.trainOneMove(true);
            //this.trainTwoMove(true);
        })
    }
    stopTrains() {
        this.stopBtn.addEventListener("click", () => {
            //this.trainOneMove(false);
            //this.trainTwoMove(false);
        })
    }
    async trainOneMove(tOne) {
        if (tOne) {
            this.myOneSession = setInterval(() => {
                this.tOne()
            }, 10);
        } else {
            clearInterval(this.myOneSession)
        }
    }
    async trainTwoMove(tTwo) {
        if (tTwo) {
            this.myTwoSession = setInterval(() => {
                this.tTwo()
            }, 10);
        } else {
            clearInterval(this.myTwoSession)
        }
    }
    async OneAtStation() {
        this.trainOneMove(false)
        await this.sleep(2000)
        this.trainOneMove(true)
    }
    async TwoAtStation() {
        this.trainTwoMove(false)
        await this.sleep(2000)
        this.trainTwoMove(true)
    }
    async tOne() {
        let distance = 1;
        let tX = this.trainOne.offsetLeft;
        let tY = this.trainOne.offsetTop;
        let sX = parseInt(this.tOneRoute[this.a].Location.x);
        let sY = parseInt(this.tOneRoute[this.a].Location.y);
        if (tX == sX && tY == sY) {
            console.log(tX + sX)
            console.log(tY + sY)
            this.OneAtStation();
            console.log(this.a)
            if (this.a == 7) {
                this.a = 0
            }
            else {
                this.a = this.a + 1;

            }
        }
        if (tX < sX) {
            tX = tX + distance
            this.trainOne.style.left = tX + "px";
        } if (tX > sX) {
            tX = tX - distance
            this.trainOne.style.left = tX + "px";
        } if (tY < sY) {
            tY = tY + distance
            this.trainOne.style.top = tY + "px";
        } if (tY > sY) {
            tY = tY - distance
            this.trainOne.style.top = tY + "px";
        }
    }
    async tTwo() {
        let distance = 1;
        let tX = this.trainTwo.offsetLeft;
        let tY = this.trainTwo.offsetTop;
        let sX = parseInt(this.tTwoRoute[this.i].Location.x);
        let sY = parseInt(this.tTwoRoute[this.i].Location.y);
        if (tX == sX && tY == sY) {
            this.TwoAtStation();
            console.log(tX + sX)
            console.log(tY + sY)
            console.log(this.i)
            if (this.i == 7) {
                this.i = 0
            }
            else {
                this.i = this.i + 1;
            }
        }
        if (tX < sX) {
            tX = tX + distance
            this.trainTwo.style.left = tX + "px";
        } if (tX > sX) {
            tX = tX - distance
            this.trainTwo.style.left = tX + "px";
        } if (tY < sY) {
            tY = tY + distance
            this.trainTwo.style.top = tY + "px";
        } if (tY > sY) {
            tY = tY - distance
            this.trainTwo.style.top = tY + "px";
        }
    };
}
export default train