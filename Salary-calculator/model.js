const user = {
    basicSalary: 0,
    hra() {
        return this.basicSalary * 0.20
    },
    da() {
        return this.basicSalary * 0.10
    },
    ta() {
        return this.basicSalary * 0.10
    },
    ma() {
        return this.basicSalary * 0.30
    },
    pf() {
        return this.basicSalary * 0.50
    },
    tax() {
        if (user.basicSalary < 500000)
            return 0;
        else if (user.basicSalary > 500000 && user.basicSalary < 900000)
            return user.basicSalary * 0.05;
        else
            return user.basicSalary * 0.90;
    },
    gross() {
        return user.ma() + user.da() + user.ta() + user.hra() + user.basicSalary;
    },
    net() {
        return user.gross() - user.pf() - user.tax();
    },
}