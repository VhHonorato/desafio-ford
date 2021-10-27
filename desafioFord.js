let entrada = true;
let saida = true;

    const norte = {
        entrada: false,
        saida = true,
    }

    const sul = {
        entrada: true,
        saida: false
    }

    const nordeste = {
        entrada: true,
        saida: false
    }

    const centroOeste = {
        entrada: true,
        saida: false
    }

    const sudeste = {
        entrada: false,
        saida: true
    }

    const sul = {
        entrada: true,
        saida: false
    }

    const combinacaoUm = [];

    if(norte.entrada == false && sul.saida == false || sudeste.saida || centroOeste.saida == false || nordeste.saida == false || norte.saida == false){
        combinacaoUm.push(norte.entrada == true);
    }