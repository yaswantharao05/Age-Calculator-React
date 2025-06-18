import './style.css';

function F1() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // getMonth() returns 0-indexed month
    const year = now.getFullYear();

    const today = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    const CalculateAge = () => {
        const dobInput = document.getElementById('dob').value;

        if (dobInput) {
            const dob = new Date(dobInput);
            const current = new Date();

            let years = current.getFullYear() - dob.getFullYear();
            let months = current.getMonth() - dob.getMonth();
            let days = current.getDate() - dob.getDate();

            if (days < 0) {
                // borrow days from previous month
                months--;
                const prevMonth = new Date(current.getFullYear(), current.getMonth(), 0);
                days += prevMonth.getDate();
            }

            if (months < 0) {
                months += 12;
                years--;
            }

            document.getElementById("age").innerText = 
                `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
        } else {
            alert("Please enter your Date of Birth!");
        }
    };

    return (
        <center>
            <div>
                <br />
                <h1>Age Calculator</h1>
                <br />
                <h5>Enter your date of birth</h5>
                <input max={today} id="dob" type="date" /><br />
                <br />
                <button onClick={CalculateAge} className="btn btn-primary">Calculate Age</button>
                <br /><br />
                <h3 id="age"></h3>
            </div>
        </center>
    );
}

export default F1;
