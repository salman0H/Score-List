let loopMove = true;
let validGrades = true;
let sumation = 0;
let bestAvg = 0;
let counter = 0;
let firstGrade = 0;
let secondGrade = 0;
let thirdGrade = 0;
let avgGrade = 0;
let totalAvg = [];
let inputInfo = document.getElementById("input--info");
let bestAvgShow = document.getElementById("best--avg");
let totalAvgShow = document.getElementById("total--avg");
let whoIsBest = document.getElementById("counter--avg");

while(loopMove){
    // get input
    validGrades = true;
    while(validGrades){
        firstGrade = Number(prompt("Enter First Grade: "));
        secondGrade = Number(prompt("Enter Second Grade: "));
        thirdGrade = Number(prompt("Enter Third Grade: "));
        if (firstGrade >= 19 && secondGrade >= 19 && thirdGrade >= 19 &&
            firstGrade <= 20 && secondGrade <= 20 && thirdGrade <= 20) {
            validGrades = false;
        }else{
            alert("your input should bigger than 19 and less than 20!");
        }   
    }
    avgGrade = Number(avgGradeNumber(firstGrade,secondGrade,thirdGrade));
    totalAvg.push(avgGrade);
    counter++;

    // find and display MAX
    if(avgGrade > bestAvg){
        bestAvg = avgGrade;
        whoIsBest.innerHTML = `${counter}`;
        bestAvgShow.innerHTML = `${avgGrade.toFixed(2)}`;
    }

    // show display
    inputInfo.innerHTML += `<div class="info--plate display${counter}"> 
                                <div class="main--row${counter} grade--center" style="    text-decoration: underline;">
                                    <p>
                                        ${counter}
                                    </p>
                                </div>
                                <div class="first--row${counter} grade--center">
                                    <p>
                                        ${firstGrade.toFixed(2)}
                                    </p>
                                </div>
                                <div class="second--row${counter} grade--center">
                                    <p>
                                        ${secondGrade.toFixed(2)}
                                    </p>
                                </div>
                                <div class="thord--row${counter} grade--center">
                                    <p>
                                        ${thirdGrade.toFixed(2)}
                                    </p>
                                </div>
                                <div class="avg--row${counter} grade--center">
                                    <p>
                                        ${avgGrade.toFixed(2)}
                                    </p>
                                </div>
                            </div>`;

    // exit
    let exit = prompt("If You want:<< Exit --> y | don't --> n>>");
    if(exit === "y"){
        loopMove = false;
    }
}

// total avarage display
for(let value of totalAvg){
    sumation += value;
}
totalAvgShow.innerHTML = `${(sumation/totalAvg.length).toFixed(2)}`;

function avgGradeNumber(num1,num2,num3){
    var sum = num1 + num2 + num3;
    return (sum/3);
}