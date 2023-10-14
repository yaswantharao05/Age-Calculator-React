import './style.css'

function F1(){
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    var today = `${year}`
    if(month<10){
        today = today + `-0${month}`;
    } else {
        today = today + `-${month}`;
    }
    if(day<10){
        today = today + `-0${day}`;
    } else {
        today = today + `-${day}`;
    }    
    

    // console.log(today);
    //month: 0-January, 1-February ..... 11-December

    const CalculateAge = () => {
        if(document.getElementById('dob').value != "")
        {
            var dob = new Date(document.getElementById('dob').value);

            console.log("dob: "+`${dob.getDate()}/${dob.getMonth()+1}/${dob.getFullYear()}`);
            var age = year - dob.getFullYear();

            if(dob.getMonth() > month){
                age = age - 1;
                console.log("month");
            } else if(dob.getMonth() == month && dob.getDate()>day){
                age = age - 1;
                console.log("day");
            }

            document.getElementById("age").innerText = `Your are ${age} years old`;
            return;   
        }
        else{
            alert("Please Enter you Date of Birth!");
        }
          
    }


    return(
        <center>
            <div>
                <br/>
                <h1>Age Calculator</h1>
                <br/>
                <h5>Enter your date of birth</h5>
                <input max={today} id="dob" type="date" /><br/>
                <br/>
                <button onClick={CalculateAge} class="btn btn-primary">Calculate Age</button>
                <br/><br/>
                <h3 id="age"></h3>
            </div>
        </center>
    )
}

export default F1;
