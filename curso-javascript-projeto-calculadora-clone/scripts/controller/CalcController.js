class CalcController {

    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl =  document.querySelector("#display");
        this._dateEl  = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }

    initialize(){
        this.setDisplayTime();

        setInterval(() =>{
            this.setDisplayTime();
        }, 1000)
    }

    initButtonEvents(){
        let buttons = document.querySelectorAll("#button > g, #parts > g");

        buttons.forEach( btn => {
            btn.addEventListener('click', e =>{
                console.log(btn.className.baseVal.replace("btn-", ""))
            })
        })

        

    }

    setDisplayTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(time){
        return this._timeEl.innerHTML = time;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(date){
        return this._dateEl.innerHTML = date;
    }

    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalc.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(date){
        this._dataAtual = date;
    }
}