package com.evildice;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * File AddNumbersAction.java
 * Adds two numbers
 * <p>
 * Created by Adrian Iasinschi (aiasinschi@gmail.com) on 04-Jun-16 9:56 AM.
 */
public class AddNumbersAction extends ActionSupport {
    private static final Log LOG = LogFactory.getLog(AddNumbersAction.class);

    private Double inputA;

    private Double inputB;

    private Double theSum;

    public String execute(){
        LOG.debug("Started addition");
        if (inputA == null){
            inputA = 0d;
        }
        if (inputB == null){
            inputB = 0d;
        }
        theSum = inputA + inputB;
        LOG.debug("Finished addition. Returning success.");
        return SUCCESS;
    }

    public Double getInputA() {
        return inputA;
    }

    public void setInputA(Double inputA) {
        this.inputA = inputA;
    }

    public Double getInputB() {
        return inputB;
    }

    public void setInputB(Double inputB) {
        this.inputB = inputB;
    }

    public Double getTheSum() {
        return theSum;
    }

    public void setTheSum(Double theSum) {
        this.theSum = theSum;
    }
}
