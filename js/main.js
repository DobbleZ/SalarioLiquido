function Calculate() {

    // VARS INPUTS
    var salary = document.getElementById('inpSalarioBruto').value;
    var kids = document.getElementById('inpKids').value;
    var food = document.getElementById('inpFood').value;
    var workDays = document.getElementById('inpWorkDays').value;

    // VARS SELECTS
    var pay = document.getElementById('inpPagamento').value;
    var social = document.getElementById('inpEnquadramento').value;
    var duos = document.getElementById('inpDuodecimos').value;


    // CHECK IF ALL ARE FILLED
    if (salary == '' || kids == '' || food == '' || workDays == '' || pay == 'Selecione a opção' || social == 'Selecione a opção' || duos == 'Selecione a opção') {
        alert('Insira todos os dados.');
    } else {

        if (workDays > 31) {
            alert("Número de dias de trabalho incorretamente designados.")
        } else {

            if (social == "Solteiro") {
                // Tabela 1

                // Verificação da posição na "base de dados"
                for (i = 0; i < Tabela1.length; i++) {
                    if (Tabela1[i].nome > salary) {
                        tableValue = Tabela1[i].nome;
                        position = i;
                        break;
                    }
                }

                // Valor dependentes
                if (kids == 0) {
                    valDep = Tabela1[position].dep0;
                }
                if (kids == 1) {
                    valDep = Tabela1[position].dep1;
                }
                if (kids == 2) {
                    valDep = Tabela1[position].dep2;
                }
                if (kids == 3) {
                    valDep = Tabela1[position].dep3;
                }
                if (kids == 4) {
                    valDep = Tabela1[position].dep4;
                }
                if (kids >= 5) {
                    valDep = Tabela1[position].dep5;
                }

                

            } else if (social == "Solteiro-Deficiente") {
                // Tabela 4

                // Verificação da posição na "base de dados"
                for (i = 0; i < Tabela4.length; i++) {
                    if (Tabela4[i].nome > salary) {
                        tableValue = Tabela4[i].nome;
                        position = i;
                        break;
                    }
                }

                // Valor dependentes
                if (kids == 0) {
                    valDep = Tabela4[position].dep0;
                }
                if (kids == 1) {
                    valDep = Tabela4[position].dep1;
                }
                if (kids == 2) {
                    valDep = Tabela4[position].dep2;
                }
                if (kids == 3) {
                    valDep = Tabela4[position].dep3;
                }
                if (kids == 4) {
                    valDep = Tabela4[position].dep4;
                }
                if (kids >= 5) {
                    valDep = Tabela4[position].dep5;
                }

            } else if (social == "Casado 1 Titular") {
                // Tabela 2

                // Verificação da posição na "base de dados"
                for (i = 0; i < Tabela2.length; i++) {
                    if (Tabela2[i].nome > salary) {
                        tableValue = Tabela2[i].nome;
                        position = i;
                        break;
                    }
                }

                // Valor dependentes
                if (kids == 0) {
                    valDep = Tabela2[position].dep0;
                }
                if (kids == 1) {
                    valDep = Tabela2[position].dep1;
                }
                if (kids == 2) {
                    valDep = Tabela2[position].dep2;
                }
                if (kids == 3) {
                    valDep = Tabela2[position].dep3;
                }
                if (kids == 4) {
                    valDep = Tabela2[position].dep4;
                }
                if (kids >= 5) {
                    valDep = Tabela2[position].dep5;
                }

            } else if (social == "Casado 1 Titular-Deficiente") {
                // Tabela 5

                // Verificação da posição na "base de dados"
                for (i = 0; i < Tabela5.length; i++) {
                    if (Tabela5[i].nome > salary) {
                        tableValue = Tabela5[i].nome;
                        position = i;
                        break;
                    }
                }

                // Valor dependentes
                if (kids == 0) {
                    valDep = Tabela5[position].dep0;
                }
                if (kids == 1) {
                    valDep = Tabela5[position].dep1;
                }
                if (kids == 2) {
                    valDep = Tabela5[position].dep2;
                }
                if (kids == 3) {
                    valDep = Tabela5[position].dep3;
                }
                if (kids == 4) {
                    valDep = Tabela5[position].dep4;
                }
                if (kids >= 5) {
                    valDep = Tabela5[position].dep5;
                }

            } else if (social == "Casado 2 Titulares") {
                // Tabela 3

                // Verificação da posição na "base de dados"
                for (i = 0; i < Tabela3.length; i++) {
                    if (Tabela3[i].nome > salary) {
                        tableValue = Tabela3[i].nome;
                        position = i;
                        break;
                    }
                }

                // Valor dependentes
                if (kids == 0) {
                    valDep = Tabela3[position].dep0;
                }
                if (kids == 1) {
                    valDep = Tabela3[position].dep1;
                }
                if (kids == 2) {
                    valDep = Tabela3[position].dep2;
                }
                if (kids == 3) {
                    valDep = Tabela3[position].dep3;
                }
                if (kids == 4) {
                    valDep = Tabela3[position].dep4;
                }
                if (kids >= 5) {
                    valDep = Tabela3[position].dep5;
                }

            } else if (social == "Casado 2 Titulares-Deficiente") {
                // Tabela 6

                // Verificação da posição na "base de dados"
                for (i = 0; i < Tabela6.length; i++) {
                    if (Tabela6[i].nome > salary) {
                        tableValue = Tabela6[i].nome;
                        position = i;
                        break;
                    }
                }

                // Valor dependentes
                if (kids == 0) {
                    valDep = Tabela6[position].dep0;
                }
                if (kids == 1) {
                    valDep = Tabela6[position].dep1;
                }
                if (kids == 2) {
                    valDep = Tabela6[position].dep2;
                }
                if (kids == 3) {
                    valDep = Tabela6[position].dep3;
                }
                if (kids == 4) {
                    valDep = Tabela6[position].dep4;
                }
                if (kids >= 5) {
                    valDep = Tabela6[position].dep5;
                }
            }

            // Atribuição de valor de refeição de acordo com método de recebimento
            if (pay == "Sem Subsidio") {
                maxRef = 0;
            }else if (pay == "Dinheiro") {
                maxRef = 4.77;
            }else if (pay == "Vales Refeição") {
                maxRef = 7.63;
            }

            // Valor do dinheiro extra dado no subsidio de refeição
            refGasto = food * workDays;
            refDisp = maxRef * workDays;
            refDiv = 0;
            if (refGasto > refDisp) {
                refDiv = refGasto - refDisp;
            }

            valRef = refGasto - refDiv;
            

            // Atribuição do valor dos duodécimos e conta do salário líquido
            if (duos == "Sem duodécimos") {
                valDuos = 0;
                ss = (.11 * salary) + (.11 * valDuos);
                irs = (valDep * salary) + (valDep * valDuos);
                salarioLiquido = salary - ss - irs + valDuos;
            } else if (duos == "50% de um subsídio") {
                valDuos = (salary / 2) / 12;
                ss = (.11 * salary) + (.11 * valDuos);
                irs = (valDep * salary) + (valDep * valDuos);
                salarioLiquido = salary - ss - irs + valDuos;
            } else if (duos == "50% dos dois subsídios") {
                valDuos = salary / 12;
                ss = (.11 * salary) + (.11 * valDuos);
                irs = (valDep * salary) + (valDep * valDuos);
                salarioLiquido = salary - ss - irs + valDuos;
            } else if (duos == "100% dos dois subsídios") {
                valDuos = (salary * 2) / 12;
                ss = (.11 * salary) + (.11 * valDuos);
                irs = (valDep * salary) + ((valDep * valDuos));
                salarioLiquido = salary - ss - irs + valDuos;
            }
        }

        // MENSAGEM

        document.getElementById('table').style.display = "block";
        
        document.getElementById('sb').value = "Salario Bruto: " + parseFloat(salary).toFixed(2) + "€";
        document.getElementById('duos').value = "Valor Duodécimos: " + parseFloat(valDuos).toFixed(2) + "€";
        document.getElementById('irs').value = "Retenção IRS: " + parseFloat(irs).toFixed(2) + "€";
        document.getElementById('ss').value = "Contribuição Seg. Social: " + parseFloat((ss)).toFixed(2) + "€";
        document.getElementById('sr').value = "Subsídio de Refeição: " + parseFloat(refDisp).toFixed(2) + "€";
        document.getElementById('sr1').value = "Subsídio de Refeição Não Tributado: " + parseFloat(refGasto).toFixed(2) + "€";
        document.getElementById('srt').value = "Subsídio de Refeição Tributado: " + parseFloat(refDiv).toFixed(2) + "€";
        document.getElementById('sl').value = "Salário Líquido: " + parseFloat(salarioLiquido).toFixed(2) + "€";
        document.getElementById('sl1').value = "Salário Líquido + Subsídio Refeição: " + parseFloat(salarioLiquido + valRef).toFixed(2) + "€";

    }
}