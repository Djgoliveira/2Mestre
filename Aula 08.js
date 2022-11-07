function podeSubir(alturaPessoa, acompanhada){
    if (acompanhada >=0 && alturaPessoa >1.40 && alturaPessoa <=2.00)    {
        console.log ('Acesso autorizado');
        return true
    }else if ( acompanhada >=1 && alturaPessoa >=1.20 && alturaPessoa  <= 1.40  )    {
        console.log ('Acesso Autorizado, somente com Acompanhante');
        return true
    }else if ( acompanhada < 1 || alturaPessoa <1.20 || alturaPessoa < 1.40){
        console.log('Acesso não Autorizado');
        return false
    }
}
podeSubir(2.00, 0);