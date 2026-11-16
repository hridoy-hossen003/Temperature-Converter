const convert = () =>{
    const inputValue = document.querySelector("#input-value").value
    const fromUnit = document.querySelector("#from_unit").value
    const toUnit = document.querySelector("#to_unit").value
    const resulltBox = document.querySelector("#result-box")
    const value  = Number(inputValue)
        let celcius  = 0
        let fromUnitText = ""
        let toUnitText = ""
       
        if(fromUnit === "C"){
celcius = value;
 fromUnit = "Celcius"
        }else if(fromUnit === "F"){
            celcius = (value - 32) * 5/9
              fromUnitText = "Fahrenheit"
        }else if(fromUnit === "K"){
            celcius = value - 273.15
              fromUnitText = "Kelvin"

        }   

        let result = 0
        if(toUnit === "C"){
            result = celcius
            toUnitText = "Celcius"
        }else if(toUnit === "F"){
            result = (celcius * 9/5) + 32
            toUnitText = "Fahrenheit"
        }else if(toUnit === "K"){
            result = celcius + 273.15
            toUnitText = "Kelvin"            
        }

      let isValidInput = " " || isNaN(value)

resulltBox.innerHTML =  isValidInput ? `
<p class="my-2 text-red-500">Please check your input</p>
` :  `
<p class="my-2 text-green-500">${value} ${fromUnitText} is ${result} ${toUnitText}</p>
` 

}