const calculateTemp = () =>{

    const number = document.getElementById('number').value;
    // console.log(number);

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);

    const celToFeh = (number) =>{
        // °F = (°C × 9/5) + 32 
        return Math.round(number * 9/5 +32);
    }

    const fehToCel = (number) =>{
        // °C = (°F − 32) x 5/9 
        return Math.round((number-32) * 5/9);
    }

    let result;

    if(valueTemp=='cel'){
        result = celToFeh(number);
        document.getElementById('result').innerHTML=`= ${result} °Fahrenheit `
    }else{
        result= fehToCel(number);
        document.getElementById('result').innerHTML=`= ${result} °Celcius `
    }

}