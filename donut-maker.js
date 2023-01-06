class DonutMaker{
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
    }
    
    donutCounter(){
    this.donutCount += Math.pow(1.2,this.donutMultiplierCount);
    }

    getDonutCount(){
        return Math.round(this.donutCount);
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }

    getAutoClickerCost(){
        return this.autoClickerCost;
    }

    getDonutMultiplierCount(){
        return this.donutMultiplierCount;
    }

    getDonutMultiplierCost(){
        return this.donutMultiplierCost;
    }

    buyAutoClicker(){
        if(this.donutCount >= this.autoClickerCost){
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCount ++ ;
            this.autoClickerCost = Math.round (this.autoClickerCost * 1.1);

        }
    }

        activateAutoClicker(){
            for( let i = 0; i < this.autoClickerCount; i++){
                this.donutCounter();
            } 
    }

        buyDonutMultiplier(){
            if(this.donutCount >= this.donutMultiplierCost){
                this.donutCount -= this.donutMultiplierCost;
                this.donutMultiplierCount ++;
                this.donutMultiplierCost = Math.round(this.donutMultiplierCost * 1.1 )

            }
        }

        donutMultiplierValue() {
            return Math.pow(1.2, this.donutMultiplierCount);
          }

        restartTheGame(){
            this.donutCount = 0;
            this.autoClickerCount = 0;
            this.autoClickerCost = 100;
            this.donutMultiplierCount = 0;
            this.donutMultiplierCost = 10;

        }


    }

export {DonutMaker};