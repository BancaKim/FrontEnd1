let sword = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "`", "~", ";", ":", "'", '"', ",", ".", "/", "?"];
let id;
let pwd;
let conPwd;
let myName;
let mailaddr;
let ssn;
let intro;

function checkedForm() {
    id = document.getElementById("id").value;
    pwd = document.getElementById("my_pwd").value;
    conPwd = document.getElementById("my_pwd_chk").value;
    myName = document.getElementById("my_name").value;
    mailaddr = document.getElementById("mailaddr").value;
    ssn = document.getElementById("ssn").value;
    intro = document.getElementById("intro").value;
    if (!checkedId()) { return; }
    if (!checkedPw()) { return; }
    if (!confirmPw()) { return; }
    if (!checkedEmail()) { return; }
    if (!isNameNull()) { return; }
    if (!checkedSSN()) { return; }
    inputYear();
    inputMonth();
    inputDay();
    if (!checkedHobby()) { return; }
    if (!checkedIntro()) { return; }
    regiform();
}

function checkedId() {
    if (id.length < 4 || 12 < id.length) {
        alert("ID 형식이 유효하지 않습니다.(길이제한)");
        return false;
    }
    for (let i = 0; i < sword.length; i++) {
        if (id.includes(sword[i])) {
            alert("ID 형식이 유효하지 않습니다.(특수문자 사용불가)");
            return false;
        }
    }
    return true;
}

function checkedPw() {
    if (pwd.length < 4 || 12 < id.length) {
        alert("비밀번호 형식이 유효하지 않습니다.(길이제한)");
        return false;
    }
    for (let i = 0; i < sword.length; i++) {
        if (pwd.includes(sword[i])) {
            alert("비밀번호 형식이 유효하지 않습니다.(특수문자 사용불가)");
            return false;
        }
    }
    if (id == pwd) {
        alert("ID와 비밀번호는 일치할 수 없습니다.");
        return false;
    }
    return true;
}

function confirmPw() {
    if (pwd != conPwd) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }
    return true;
}

function checkedEmail() {
    let email = "";
    if (mailaddr.indexOf("@") == 0 || mailaddr.indexOf("@") == mailaddr.length - 1 || mailaddr.indexOf(".") == 0 || mailaddr.indexOf(".") == 1 || mailaddr.indexOf("@") < mailaddr.indexOf(".") || mailaddr.indexOf(".") == mailaddr.length - 1) {
        alert("이메일의 형식이 올바르지 않습니다.")
        return false;
    }
    return true; 
}

function isNameNull() {
    if (myName == "" || myName == undefined) {
        alert("이름을 입력해주세요!");
        return false;
    }
    return true;
}

function checkedSSN() {
    result = 0;
    for (i = 0; i < ssn.length - 1; i++) {
        if (i <= 7) {
            result += parseInt(ssn[i]) * (2 + i);
        } else {
            result += parseInt(ssn[i]) * (i - 6);
        }
    }
    ans = (11 - (result % 11)) % 10;

    if (ans != ssn[12]) {
        alert("주민번호 오류입니다.");
        return false;
    }
    return true;
}

function inputYear() {
    let birthYear = "";
    let checkYear = ssn[6];
    if (checkYear == "1" || checkYear == "2") {
        birthYear = "19" + ssn[0] + ssn[1];
    } else if (checkYear == "3" || checkYear == "4") {
        birthYear = "20" + ssn[0] + ssn[1];
    };
    document.getElementById("year").value = birthYear;
}

function inputMonth() {
    let birthMonth = "";
    if (ssn[2] == 0) {
        birthMonth = ssn[3];
    } else {
        birthMonth = ssn[2] + ssn[3];
    }
    document.getElementById("month").value = birthMonth;
}

function inputDay() {
    let birthDay = "";
    if (ssn[4] == 0) {
        birthDay = ssn[5];
    } else {
        birthDay = ssn[4] + ssn[5];
    }
    document.getElementById("day").value = birthDay;
}

function checkedHobby() {
    let isChecked = false;
    let checkboxes = document.getElementsByName("fav_hob");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        alert("선택해주세요!");
        return false;
    }

    return true;
}

function checkedIntro() {
    if (intro.length < 10) {
        alert("10글자 이상 자기소개를 입력해주세요.");
        return false;
    }
    return true;
}

function regiform() {
    let regiform = document.getElementById("regiform");
    regiform.submit();
}