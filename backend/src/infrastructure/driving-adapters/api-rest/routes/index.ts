import { type Request, type Response, Router, type NextFunction } from 'express'
import scheduleRoutes from './schedule.routes'
import specialtyRoutes from './specialty.routes'
import userTypeRoutes from './userType.routes'
import hospitalRoutes from './hospital.routes'
import clinicRoutes from './clinic.routes'
import userRoutes from './user.routes'
import medicalAppointmentRoutes from './medicalAppointment.routes'
import medicalAppointmentStatusRoutes from './medicalAppointmentStatus.routes'

const route = Router()

route.use('/schedules', scheduleRoutes)
route.use('/specialties', specialtyRoutes)
route.use('/user-types', userTypeRoutes)
route.use('/hospitals', hospitalRoutes)
route.use('/clinics', clinicRoutes)
route.use('/medical-appointments', medicalAppointmentRoutes)
route.use('/appointment-statuses', medicalAppointmentStatusRoutes)
route.use('/users', userRoutes)

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  next(err)
})

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.status(500).json({ error: err })
})

export default route
