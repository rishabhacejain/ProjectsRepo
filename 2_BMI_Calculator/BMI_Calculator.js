const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    //assuming numbers are being enter its a simple project without check 
    const height = parseInt(document.querySelector("#height").value);                 
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    const overweight = document.querySelector("#overweight");
    const normal = document.querySelector("#normal");
    const underWeight = document.querySelector("#underWeight");

    if(isNaN(height) || height < 122){
        results.innerHTML = `<span style="color:red;">❌ Please enter a valid height (≥122 cm).</span>`;

    }
    else if(isNaN(weight) || weight < 24){
        results.innerHTML = `<span style="color:red;">❌ Please enter a valid weight (≥25 kg).</span>`;

    }else
    {

      const bmi = (weight/((height/100) ** 2)).toFixed(2);
        results.innerHTML = `<span style="font-weight:bold;">✅ Your BMI = ${bmi}</span>`


        if(bmi < 18.6){
            underWeight.style.color = "red"
            underWeight.innerHTML += `<br><span style="color:red;font-weight:bold;">🔴 You are underweight. Consider a balanced diet!</span>`;
        }
        else if(bmi >=18.6 && bmi<=24.9){
            normal.style.color = "green"
            normal.innerHTML += `<br><span style="color:green;font-weight:bold;">🟢 You have a normal BMI. Keep it up!</span>`;
        }
        else{
            overweight.style.color = "orange";
            overweight.innerHTML += `<br><span style="color:orange; font-weight:bold;">🟠 You are overweight. Consider regular exercise!</span>`

        }

    }
    

    

});