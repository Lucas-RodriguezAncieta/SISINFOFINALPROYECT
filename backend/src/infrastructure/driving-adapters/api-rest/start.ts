import { BackendApp } from './BackendApp'

try {
  new BackendApp().start()
} catch (error) {
  console.log(error)
}
