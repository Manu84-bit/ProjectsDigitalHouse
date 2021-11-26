package com.company;

public class PatientException extends Exception{

    public PatientException(){
        super();
    }

    public PatientException (String message){
        super(message);
    }

    public String toString(){
        return String.format("Se produjo la siguiente exepción: %s. Mensaje: %s",
                this.getClass().getName(), this.getMessage());
    }
}
