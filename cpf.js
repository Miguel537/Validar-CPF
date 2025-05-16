function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.lenght !== 11 || /^(\d)\1+$/.test(cpf)){
        
    }
}