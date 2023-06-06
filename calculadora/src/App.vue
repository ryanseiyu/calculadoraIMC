<script setup>
import { reactive } from 'vue';

  const estado = reactive({
    numero1 : 0,
    numero2 : 0,
    operacao: 'soma'
  })

  const getOperacao = () => {
    const operacao = estado.operacao;

    switch (operacao) {
      case 'subtracao':
        return parseInt(estado.numero1) - parseInt(estado.numero2);
      case 'multiplicacao':
        return parseInt(estado.numero1) * parseInt(estado.numero2);
      case 'divisao':
        return parseInt(estado.numero1) / parseInt(estado.numero2);
      default:
        return parseInt(estado.numero1) + parseInt(estado.numero2);
    }
  }
</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3 text-center w-50 m-auto">
      <h1>Calculadora</h1>
    </header>

    <form>
      <div class="row">
        <div class="col-12 d-flex justify-content-center" style="margin-bottom: 16px;">
          <div class="col-md-2" style="margin-right: 16px; width: 156px">
            <input :value="estado.numero1" @change="evento => estado.numero1 = evento.target.value" required type="number" placeholder="Digite o número" class="form-control" />
          </div>
          <div class="col-md-2" style="width: 156px;">
            <input :value="estado.numero2" @change="evento => estado.numero2 = evento.target.value" required type="number" placeholder="Digite o número" class="form-control" />
          </div>
          <div class="col-md-2" style="margin-left: 16px; width: 156px;">
            <select @change="evento => estado.operacao = evento.target.value" class="form-control" style="background-color: #rgb(floralwhite); color: black;">
              <option value="soma" style="text-align: justify; position: relative ; left:50px;">Somar</option>
              <option value="subtracao">Subtrair</option>
              <option value="multiplicacao">Multiplicar</option>
              <option value="divisao">Dividir</option>
            </select>
          </div>
        </div>

        <div class="p-2 bg-success bg-opacity-25 rounded-3 text-center m-auto" style="width: 296px;">
          <div class="col-md-12">
            <output name="result" style="font-size: large; font-weight: 700;">{{ 'Resultado: ' + getOperacao() }}</output>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
