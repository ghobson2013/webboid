require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import Quasar, * as All from 'quasar'
import router from './router'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import { AddressbarColor } from 'quasar'
import LoadScript from 'vue-plugin-load-script'
import api from './api.js'
import Vuelidate from 'vuelidate'
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

  async function init(){
    AddressbarColor.set('#089cfc')
  // import storePlugin from './storePlugin'

  Vue.config.productionTip = false
  Vue.use(Quasar, {
    components: All,
    directives: All
  })
  Vue.filter('removeDash', function (value) {
    if (!value) return ''
    return value.toString().replace(/-/g, ' ')
  })
  Vue.use(LoadScript);

  Vue.use(Vuelidate)


  Vue.prototype.$e = new Vue()
  Vue.prototype.$api = await api.init()

  if (__THEME === 'mat') {
    require('quasar-extras/roboto-font')
  }


  Quasar.start(() => {
    /* eslint-disable no-new */
    new Vue({
      el: '#q-app',
      router,
      render: h => h(require('./App').default)
    })
  })
}

init().catch(console.error)
