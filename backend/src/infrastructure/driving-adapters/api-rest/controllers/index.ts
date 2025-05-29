import { createSchedule } from './schedule/createSchedule.controller'
import { getAllSchedules } from './schedule/getAllSchedules.controller'
import { createSpecialty } from './specialty/createSpecialty.controller'
import { getAllSpecialties } from './specialty/getAllSpecialties.controller'
import { createUserType } from './userType/createUserType.controller'
import { getAllUserTypes } from './userType/getAllUserTypes.controller'
import { createHospital } from './hospital/createHospital.controller'
import { getAllHospitals } from './hospital/getAllHospitals.controller'
import { createClinic } from './clinic/createClinic.controller'
import { getAllClinics } from './clinic/getAllClinics.controller'
import { createUser } from './user/createUser.controller'
import { getAllUsers } from './user/getAllUsers.controller'
import { getUserById } from './user/getUserById.controller'
import { updateUser } from './user/updateUser.controller'
import { deleteUser } from './user/deleteUser.controller'
import { createMedicalAppointmentStatus } from './medicalAppointmentStatus/createMedicalAppointmentStatus.controller'
import { getAllMedicalAppointmentStatuses } from './medicalAppointmentStatus/getAllMedicalAppointmentStatuses.controller'

import { createMedicalAppointment } from './medicalAppointment/createMedicalAppointment.controller'
import { getAllMedicalAppointments } from './medicalAppointment/getAllMedicalAppointments.controller'
import { getMedicalAppointmentById } from './medicalAppointment/getMedicalAppointmentById.controller'
import { updateMedicalAppointment } from './medicalAppointment/updateMedicalAppointment.controller'
import { deleteMedicalAppointment } from './medicalAppointment/deleteMedicalAppointment.controller'

export {
  createSchedule as createScheduleController,
  getAllSchedules as getAllSchedulesController
}

export {
  createSpecialty as createSpecialtyController,
  getAllSpecialties as getAllSpecialtiesController
}

export {
  createUserType as createUserTypeController,
  getAllUserTypes as getAllUserTypesController
}

export {
  createHospital as createHospitalController,
  getAllHospitals as getAllHospitalsController
}

export {
  createClinic as createClinicController,
  getAllClinics as getAllClinicsController
}

export {
  createUser as createUserController,
  getAllUsers as getAllUsersController,
  getUserById as getUserByIdController,
  updateUser as updateUserController,
  deleteUser as deleteUserController
}

export {
  createMedicalAppointmentStatus as createMedicalAppointmentStatusController,
  getAllMedicalAppointmentStatuses as getAllMedicalAppointmentStatusesController
}

export {
  createMedicalAppointment as createMedicalAppointmentController,
  getAllMedicalAppointments as getAllMedicalAppointmentsController,
  getMedicalAppointmentById as getMedicalAppointmentByIdController,
  updateMedicalAppointment as updateMedicalAppointmentController,
  deleteMedicalAppointment as deleteMedicalAppointmentController
}
