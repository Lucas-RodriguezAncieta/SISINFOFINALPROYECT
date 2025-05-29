import { type Hospital } from '../../../domain/entities/hospital'
import { type Clinic } from '../../../domain/entities/clinic'
import { type Specialty } from '../../../domain/entities/specialty'
import { type UserType } from '../../../domain/entities/userType'
import { type Schedule } from '../../../domain/entities/schedule'
import { type User } from '../../../domain/entities/user'
import { type UserClinic } from '../../../domain/entities/userClinic'
import { type Diagnosis } from '../../../domain/entities/diagnosis'
import { type MedicalAppointmentStatus } from '../../../domain/entities/medicalAppointmentStatus'
import { type MedicalAppointment } from '../../../domain/entities/medicalAppointment'

import { PostgresHospitalRepository } from '../../../infrastructure/implementations/postgres/PostgresHospitalRepository'
import { PostgresClinicRepository } from '../../../infrastructure/implementations/postgres/PostgresClinicRepository'
import { PostgresSpecialtyRepository } from '../../../infrastructure/implementations/postgres/PostgresSpecialtyRepository'
import { PostgresUserTypeRepository } from '../../../infrastructure/implementations/postgres/PostgresUserTypeRepository'
import { PostgresScheduleRepository } from '../../../infrastructure/implementations/postgres/PostgresScheduleRepository'
import { PostgresUserRepository } from '../../../infrastructure/implementations/postgres/PostgresUserRepository'
import { PostgresUserClinicRepository } from '../../../infrastructure/implementations/postgres/PostgresUserClinicRepository'
import { PostgresDiagnosisRepository } from '../../../infrastructure/implementations/postgres/PostgresDiagnosisRepository'
import { PostgresMedicalAppointmentStatusRepository } from '../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentStatusRepository'
import { PostgresMedicalAppointmentRepository } from '../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentRepository'

import { CreateHospitalUseCase } from '../../../app/usecases/hospital/CreateHospitalUseCase'
import { CreateClinicUseCase } from '../../../app/usecases/clinic/CreateClinicUseCase'
import { CreateSpecialtyUseCase } from '../../../app/usecases/speciality/CreateSpecialtyUseCase'
import { CreateUserTypeUseCase } from '../../../app/usecases/userType/CreateUserTypeUseCase'
import { CreateScheduleUseCase } from '../../../app/usecases/schedule/CreateScheduleUseCase'
import { CreateUserUseCase } from '../../../app/usecases/user/CreateUserUseCase'
import { CreateUserClinicUseCase } from '../../../app/usecases/userClinic/CreateUserClinicUseCase'
import { CreateDiagnosisUseCase } from '../../../app/usecases/diagnosis/CreateDiagnosisUseCase'
import { CreateMedicalAppointmentStatusUseCase } from '../../../app/usecases/medicalAppointmentStatus/CreateMedicalAppointmentStatusUseCase'
import { CreateMedicalAppointmentUseCase } from '../../../app/usecases/medicalAppointment/CreateMedicalAppointmentUseCase'

import { v4 as uuid } from 'uuid'
import { GetAllUsersUseCase } from '../../../app/usecases/user/GetAllUsersUseCase'

(async () => {
  const hospital: Hospital = { id: uuid(), name: 'Santa Cruz Central Hospital' }
  const specialty: Specialty = { id: uuid(), specialty_name: 'Pediatrics' }
  const userType: UserType = { id: uuid(), type_name: 'Doctor' }
  const schedule: Schedule = { id: uuid(), startTime: '08:00', endTime: '16:00' }

  const user: User = {
    id: uuid(),
    firebase_uid: 'firebase-uid-003',
    user_type_id: userType.id,
    specialty_id: specialty.id,
    schedule_id: schedule.id,
    full_name: 'Dr. John Smith',
    phone: '77712345'
  }

  const clinic: Clinic = {
    id: uuid(),
    clinic_code: 'B12',
    hospital_id: hospital.id
  }

  const userClinic: UserClinic = {
    id: uuid(),
    user_id: user.id,
    clinic_id: clinic.id
  }

  const diagnosis: Diagnosis = {
    id: uuid(),
    diagnosis_description: 'General checkup'
  }

  const status: MedicalAppointmentStatus = {
    id: uuid(),
    status_name: 'Pending'
  }

  const appointment: MedicalAppointment = {
    id: uuid(),
    hospital_id: hospital.id,
    patient_id: user.id,
    doctor_id: user.id,
    diagnosis_id: diagnosis.id,
    appointment_status_id: status.id,
    appointment_date: new Date(),
    appointment_time: '10:30'
  }

  await new CreateHospitalUseCase(new PostgresHospitalRepository()).run(hospital)
  await new CreateSpecialtyUseCase(new PostgresSpecialtyRepository()).run(specialty)
  await new CreateUserTypeUseCase(new PostgresUserTypeRepository()).run(userType)
  await new CreateScheduleUseCase(new PostgresScheduleRepository()).run(schedule)
  await new CreateUserUseCase(new PostgresUserRepository()).run(user)
  await new CreateClinicUseCase(new PostgresClinicRepository()).run(clinic)
  await new CreateUserClinicUseCase(new PostgresUserClinicRepository()).run(userClinic)
  await new CreateDiagnosisUseCase(new PostgresDiagnosisRepository()).run(diagnosis)
  await new CreateMedicalAppointmentStatusUseCase(new PostgresMedicalAppointmentStatusRepository()).run(status)
  await new CreateMedicalAppointmentUseCase(new PostgresMedicalAppointmentRepository()).run(appointment)

  console.log(await new GetAllUsersUseCase(new PostgresUserRepository()).run())
  console.log('✅ Seed completed successfully.')
})()
