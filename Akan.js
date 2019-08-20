function submit() {
    let yearofbirth = document.getElementById("dob").value;
    let monthofbirth = Number(document.getElementById("month").value);
    let dateofbirth = Number(document.getElementById("year").value);
    let genders = document.getElementsByName('gender');
    function dayvalidator() {
        if (dayofbirth < 1 || dayofbirth > 31) {
            return false;
        } else {
            return true;
        }
    }

    function monthvalidator() {
        if (monthofbirth < 1 || monthofbirth > 12) {
            return false;
        } else {
            return true
        }

    }
    let mygendervalue = getgender();
    console.log(mygendervalue);


    let monthvalid = monthvalidator();
    let dayvalid = dayvalidator();

    let dayofweekNumber = Math.floor(((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2)-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7)

    // let dayofweekNumber = Math.floor((((Number(yearOfbirth.slice(0, 2))/4) - 2* Number(yearOfBirth.slice(0, 2))-1)+((*5Number(yearOfBirth.slice(2,4))/4))+((26*(Number(yearOfBirth.slice(0,2)-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*(


    let daysoftheweek = [
        "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "sarturday"
    ]
    let maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
    let femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "yaa", "Afua", "Ama"
    ];

    let index;

    if (dayofweekNumber == 0) {
        index = 6;
    } else {
        index = dayofweekNumber - 1;
    }

    if (mygendervalue == "male" && monthvalid && dayvalid) {
        alert("your Akan name is " + maleAkanNames[index]);
        return false;
    } else if (mygendervalue == "female" && monthvalid && dayvalid) {
        alert("your Akan name is " + femaleAkanNames[index]);
        return false;
    } else {
        alert("you entered an invalid day or month");
    }
}   





