let alunos = {
  nome: "Nome Aluno",
  qtdefaltas: 3,
  notas: [7, 7, 7],
  calcularMedia: function() {
    let somaNotas = 0;
    let totalNotas = this.notas.length
    for (let n of this.notas) {
      somaNotas = somaNotas + n
    }
    return somaNotas / totalNotas
  },
  faltas: function() {
    this.qtdefaltas++
  }
}


function NovoAluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
}

const aluno1 = new NovoAluno("Julia", 0, [8, 6, 2])
const aluno2 = new NovoAluno("Adriana", 0, [2, 6, 4])
const aluno3 = new NovoAluno("Everton", 0, [10, 11, 3])


let curso = {
  nomeCurso: "curso",
  notaAprovacao: 6,
  faltasMaximas: 3,
  listaEstudantes: [],
  novoAluno: function(aluno) {
    this.listaEstudantes.push(aluno)
  },
  aprovacao: function(media, faltas) {

    if (this.faltasMaximas > faltas) {
      if (this.notaAprovacao <= media) {
        return true
      }
      else {
        return false
      }

    }
    else if (this.faltasMaximas == faltas) {
      if ((this.notaAprovacao + ((this.notaAprovacao / 100) * 10)) <= media) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  },
  listaAprovados: function() {
    let resultadoAlunos = []
    for (let aprovados of this.listaEstudantes) {
      resultadoAlunos.push(aprovacao(aprovados.calcularMedia(), aprovados.qtdeFaltas))
    }

    return resultadoAlunos


  }

}