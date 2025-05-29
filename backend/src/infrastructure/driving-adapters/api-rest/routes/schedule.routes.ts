import { Router } from 'express'
import {
  createScheduleController,
  getAllSchedulesController
} from '../controllers'

const route = Router()

route.post('', createScheduleController)
route.get('', getAllSchedulesController)

export default route
