let pessoas, lucro, lucrof = 0, ingf = 0
pessoas = parseInt(prompt("Quantas pessoas estão previstas de ir:"))
for (let ing = 150; ing > 0; ing -= 10) {
    lucro = (ing * pessoas) - 1000

    if(lucro > lucrof) {
        lucrof = lucro
        ingf = ing
    }

    pessoas = pessoas + 50
}
alert("O maior lucro possivel será de R$" + lucrof + " vendendo o ingresso a R$" + ingf)
