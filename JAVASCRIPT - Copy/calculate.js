function calculate(){
    var empname = document.getElementById("name");
    var salary= parseFloat(document.getElementById("salary").value);
    var workday = parseFloat(document.getElementById("workday").value);
    var workhour = parseFloat(document.getElementById("workhour").value);
    var abs = parseFloat(document.getElementById("absent").value);
    var ot = parseFloat(document.getElementById("ot").value);
    var bounus = parseFloat(document.getElementById("bonus").value);
    var othded = parseFloat(document.getElementById("othded").value);
    var Late = parseFloat(document.getElementById("late").value);

    //A 
    var TotalWorkday = workday-abs;// 26 - 0 = 26
    var BasicSalary = (salary / workday) * TotalWorkday;
    //B
    var OTAmount =  CalOTAmount(salary ,workday ,workhour,ot);
    //C 
    var LateAmount = CalLateAmount(salary ,workday ,workhour,Late);
    //D
    var GrosPay= (BasicSalary + OTAmount + bounus) - (othded + LateAmount);
    //E
    var TaxAmount = CalTaxUSD(GrosPay);
    //F
    var FinalSalary = GrosPay - TaxAmount;

    var rowobject = `
    <tr>
        <td>${empname.value}</td>
        <td>$${salary}</td>
        <td>${workday}</td>
        <td>${abs}</td>
        <td>${workhour}</td>
        <td>$${Math.round(OTAmount,2)}</td>
        <td>$${bounus}</td>
        <td>$${othded}</td>
        <td>${Math.round(LateAmount,2)}$</td>
        <td>${Math.round(TaxAmount,2)}$</td>
        <td>${Math.round(GrosPay,2)}$</td>
        <td>${Math.round(FinalSalary,2)}$</td>
    </tr>
    `;
    document.getElementById("result").innerHTML = rowobject;
}

//function CalOTAmount
function CalOTAmount(Salary ,Workday ,Workhour,OT){
    var RatePerHour = Salary/Workday/Workhour;
    var OTAmount = (RatePerHour * OT) * 2;
    return OTAmount;
}

function CalLateAmount(Salary ,Workday ,Workhour,Late){
    var RatePerHour = Salary/Workday/Workhour;
    var TotalLateHour= Late / 60 ; // 100 / 60 = 1.6666666666666667
    var LateAmount = (RatePerHour * TotalLateHour);
    return LateAmount;
}

//calculate Tax 
function CalTaxUSD(GrosPay){
    var GrosspayKH = GrosPay * 4000;
    var Tax = 0
    if(GrosspayKH < 1500000){
         Tax = 0;
    }else if(GrosspayKH >= 1500000 && GrosspayKH < 3000000){
         Tax = (GrosspayKH *5) / 100;
    }else if(GrosspayKH >= 3000000 && GrosspayKH < 5000000){
         Tax = (GrosspayKH * 10) / 100;
    }else if(GrosspayKH >= 5000000 && GrosspayKH < 7500000){
         Tax = (GrosspayKH * 15) / 100;
    }else if(GrosspayKH >= 7500000){
        Tax = (GrosspayKH * 20) / 100;
    }
    Tax = Tax / 4000;
    return Tax;
}
