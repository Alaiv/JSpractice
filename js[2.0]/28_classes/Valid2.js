class Valid2 extends Valid {
    constructor(email, password, isValid, emailError, passwordError) {
        super(email, password, isValid);
        this.emailError = "";
        this.passwordError = "";
    }

    validate() {
        super.validate();
        if(this.email == "") {
            this.isValid = false;
            this.emailError = "Mail empty"
        }

        if (this.password == "") {
            this.passwordError = "Password length = 0"
        }
    }
}