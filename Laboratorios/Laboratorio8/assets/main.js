var idCounter=0;
var rows=[];

var parseLateSwitch=value =>{
    if(value){
        return "Late";
    }
    return "On time";
};

function addStudent(carnet, schedule, late, tBody){
    let newRow=document.createElement("tr");
    let date=new Date();

    rows.push({
        id: idCounter,
        carnet: carnet,
        schedule: schedule,
        late: late,
    })

    newRow.innerHTML=`<td><b>${carnet}</b></td>
    <td>${schedule}</td>
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;

    let cellContainer=document.createElement("td");

    let newBtn=document.createElement("button")

    newBtn.classList.add("btn");
    newBtn.classList.add("btn-danger");
    newBtn.innerText="Drop";
    newBtn.value=idCounter;

    let cellConfirmar = document.createElement("td");
    let inputConfirmar = document.createElement("input");

    inputConfirmar.id=idCounter;
    inputConfirmar.setAttribute("type","text");
    inputConfirmar.setAttribute("maxlength","8");


    newBtn.addEventListener("click",function(event){
        var idElement = event.srcElement.value;
        var trToDelete = document.querySelector(`button[value= '${idElement}' ]`).parentElement.parentElement;
        var Confirm_carnet = document.querySelector(`input[id= '${idElement}' ]`);
        var carnetConfirm = Confirm_carnet.value;

        if(carnetConfirm === carnet){
            tBody.removeChild(trToDelete);
        }
        rows.forEach((item,index)=>{
            if(item.id == idElement){
               rows.splice(index,1);
            }
        })
    })


    cellContainer.appendChild(newBtn);
    newRow.appendChild(cellContainer);

    cellConfirmar.appendChild(inputConfirmar);
    newRow.appendChild(cellConfirmar);

    idCounter++;

    tBody.appendChild(newRow);
    
}

window.onload=()=>{
    let submit_btn=document.querySelector("#submit_btn");
    let carnet_field=document.querySelector("#carnet_field");
    let schudele_field=document.querySelector("#schedule_field");
    let late_switch=document.querySelector("#late_switch");
    let tBody=document.querySelector("#table_body");

    var carnetRegex=new RegExp("^[0-9]{8}$");

    submit_btn.addEventListener("click", function(){
        let carnet=carnet_field.value;
        let schedule=schudele_field.options[schudele_field.selectedIndex].text;
        let late=parseLateSwitch(late_switch.checked);
        if(carnetRegex.test(carnet)){
            addStudent(carnet, schedule, late, tBody);
        }
    });

    carnet_field.addEventListener("keyup", function(){
        let carnet=carnet_field.value;
        if(carnetRegex.test(carnet)){
            submit_btn.disabled=false;
        }
        else{
            submit_btn.disabled=true;
        }
    });
}