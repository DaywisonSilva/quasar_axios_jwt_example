<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>

import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const {proxy} = getCurrentInstance()
    const $axios = proxy.$axios

    // No login, se o usuário passar as credenciais corretas a API vai retornar o token, que geralmente é armazenado no LocalStorage, recuperando o Token no boot do axios, é possível passar esse token em todas as requisições da API;
    // No header da requisição, em Authorization, tu consegues ver que o token foi passado
    $axios.get('/rotaqualquer')
  }
})
</script>
