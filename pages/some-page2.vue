<script setup lang="ts">
definePageMeta({
  // define middleware as a function
  middleware: [
    function (to, from) {
      const auth = useState('auth')

      // if (!auth.value.authenticated) {
      //     return navigateTo('/login')
      // }

      if (to.path !== '/checkout') {
        return navigateTo('/checkout')
      }
    }
  ],

  // ... or a string
  // middleware: 'auth',

  // ... or multiple strings
  // middleware: ['auth', 'another-named-middleware']
})
</script>
