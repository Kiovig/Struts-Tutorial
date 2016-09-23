package com.evildice;

/**
 * Created by Vigi on 03/08/2016.
 */

import com.evildice.kiov.User;
import com.opensymphony.xwork2.ActionSupport;
import com.evildice.kiov.UserService;

import java.util.List;


public class AddArrayNrs extends ActionSupport {

    private String str;
    private Integer sum;
    private List<User> vser;
    private User user;
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;

    public String calcSum() {
        String[] intArray = str.split(",");
        sum = 0;
        for (String s: intArray) {
            sum += Integer.parseInt(s);
        }
        UserService ust = new UserService();
        vser = ust.getAllUsers();
        return SUCCESS;
    }

    public String addUser() {
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmailId(emailId);
        user.setPassword(password);
        UserService usvcs = new UserService();
        usvcs.insertUser(user);
        return SUCCESS;
    }

    public String getStr() {
        return str;
    }
    public void setStr(String Str) {
        this.str = Str;
    }

    public Integer getSum() { return sum; }
    public void setSum(Integer Sum) {
        this.sum = Sum;
    }

    public List<User> getvser() {
        return vser;
    }
    public void setvser(List<User> vser) {
        this.vser = vser;
    }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
