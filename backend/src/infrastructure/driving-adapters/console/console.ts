import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

const prisma = new PrismaClient()

async function main (): Promise<void> {
  const hospitalId = uuid()

  const clinicData = ['A1', 'B2', 'C3'].map(code => ({
    id: uuid(),
    clinic_code: code,
    hospital_id: hospitalId
  }))

  const specialtyData = ['Pediatrics', 'Cardiology', 'Dermatology'].map(name => ({
    id: uuid(),
    specialty_name: name
  }))

  const userTypeData = ['Admin', 'Patient', 'Doctor'].map(name => ({
    id: uuid(),
    type_name: name
  }))

  const scheduleData = [
    { id: uuid(), startTime: '08:00', endTime: '12:00' },
    { id: uuid(), startTime: '13:00', endTime: '17:00' },
    { id: uuid(), startTime: '17:00', endTime: '21:00' }
  ]

  const diagnosisData = ['General Checkup', 'Skin Allergy', 'Cardiac Evaluation'].map(name => ({
    id: uuid(),
    diagnosis_description: name
  }))

  const statusData = ['Pending', 'Confirmed', 'Cancelled'].map(name => ({
    id: uuid(),
    status_name: name
  }))

  const patientId = uuid()
  const doctorId = uuid()

  // 1. Hospital
  await prisma.hospital.create({
    data: {
      id: hospitalId,
      name: 'Santa Cruz Central Hospital'
    }
  })

  // 2. Clínicas
  for (const clinic of clinicData) {
    await prisma.clinic.create({ data: clinic })
  }

  // 3. Especialidades
  for (const specialty of specialtyData) {
    await prisma.specialty.create({ data: specialty })
  }

  // 4. Tipos de usuario
  for (const type of userTypeData) {
    await prisma.userType.create({ data: type })
  }

  // 5. Horarios
  for (const schedule of scheduleData) {
    await prisma.schedule.create({ data: schedule })
  }

  // 6. Diagnósticos
  for (const diag of diagnosisData) {
    await prisma.diagnosis.create({ data: diag })
  }

  // 7. Estados de cita médica
  for (const status of statusData) {
    await prisma.medicalAppointmentStatus.create({ data: status })
  }

  // 8. Usuario paciente
  await prisma.user.create({
    data: {
      id: patientId,
      firebase_uid: uuid(),
      user_type_id: userTypeData[1].id, // Patient
      full_name: 'Juan Pérez',
      phone: '70012345'
    }
  })

  // 9. Doctor
  await prisma.user.create({
    data: {
      id: doctorId,
      firebase_uid: uuid(),
      user_type_id: userTypeData[2].id, // Doctor
      specialty_id: specialtyData[0].id, // Pediatrics
      schedule_id: scheduleData[0].id,
      full_name: 'Dra. Laura Gómez',
      phone: '70154321'
    }
  })

  // 10. Relación Doctor - Clínicas
  await prisma.userClinic.createMany({
    data: [
      { id: uuid(), user_id: doctorId, clinic_id: clinicData[0].id },
      { id: uuid(), user_id: doctorId, clinic_id: clinicData[1].id }
    ]
  })

  // 11. Relación Doctor - Hospital
  await prisma.userHospital.create({
    data: {
      id: uuid(),
      user_id: doctorId,
      hospital_id: hospitalId
    }
  })

  // 12. Relación Doctor - Horarios personalizados (user_schedule)
  for (const sched of scheduleData) {
    await prisma.userSchedule.create({
      data: {
        id: uuid(),
        user_id: doctorId,
        schedule_id: sched.id,
        start_time: sched.startTime,
        end_time: sched.endTime
      }
    })
  }

  // 13. Citas médicas
  const now = new Date()
  const appointments = [
    {
      id: uuid(),
      hospital_id: hospitalId,
      patient_id: patientId,
      doctor_id: doctorId,
      diagnosis_id: diagnosisData[0].id,
      appointment_status_id: statusData[0].id, // Pending
      appointment_date: now,
      appointment_time: '09:00'
    },
    {
      id: uuid(),
      hospital_id: hospitalId,
      patient_id: patientId,
      doctor_id: doctorId,
      diagnosis_id: diagnosisData[1].id,
      appointment_status_id: statusData[1].id, // Confirmed
      appointment_date: now,
      appointment_time: '14:00'
    },
    {
      id: uuid(),
      hospital_id: hospitalId,
      patient_id: patientId,
      doctor_id: doctorId,
      diagnosis_id: diagnosisData[2].id,
      appointment_status_id: statusData[2].id, // Cancelled
      appointment_date: now,
      appointment_time: '19:00'
    }
  ]

  for (const appt of appointments) {
    await prisma.medicalAppointment.create({ data: appt })
  }

  console.log('✅ Se insertaron correctamente los datos de prueba.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })