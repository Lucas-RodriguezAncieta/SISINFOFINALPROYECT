import { PrismaClient } from '@prisma/client'

import { type MedicalAppointment } from '../../../domain/entities/medicalAppointment'
import { type MedicalAppointmentRepository } from '../../../domain/repositories/MedicalAppointmentRepository'

const prisma = new PrismaClient()

export class PostgresMedicalAppointmentRepository implements MedicalAppointmentRepository {
  async getAll (): Promise<MedicalAppointment[]> {
    return await prisma.medicalAppointment.findMany({
      include: {
        status: true,
        diagnosis: true,
        hospital: true,
        patient: true,
        doctor: true
      }
    })
  }

  async save (appointment: MedicalAppointment): Promise<MedicalAppointment> {
    const createdDiagnosis = await prisma.diagnosis.create({
      data: {
        id: appointment.diagnosis_id,
        diagnosis_description: ''
      }
    })

    const appoitment = await prisma.medicalAppointment.create({
      data: {
        id: appointment.id,
        hospital_id: appointment.hospital_id,
        patient_id: appointment.patient_id,
        doctor_id: appointment.doctor_id,
        diagnosis_id: createdDiagnosis.id,
        appointment_status_id: appointment.appointment_status_id,
        appointment_date: appointment.appointment_date,
        appointment_time: appointment.appointment_time
      }
    })

    return this.getById(appoitment.id) as Promise<MedicalAppointment>
  }

  async getById (id: string): Promise<MedicalAppointment | null> {
    return await prisma.medicalAppointment.findUnique({
      where: { id },
      include: {
        status: true,
        diagnosis: true,
        hospital: true,
        patient: true,
        doctor: true
      }
    })
  }

  async update (appointment: MedicalAppointment & { diagnosis_description?: string }): Promise<MedicalAppointment> {
    await prisma.medicalAppointment.update({
      where: { id: appointment.id },
      data: {
        hospital_id: appointment.hospital_id,
        patient_id: appointment.patient_id,
        doctor_id: appointment.doctor_id,
        diagnosis_id: appointment.diagnosis_id,
        appointment_status_id: appointment.appointment_status_id,
        appointment_date: appointment.appointment_date,
        appointment_time: appointment.appointment_time
      }
    })

    if (appointment.diagnosis_description !== undefined) {
      await prisma.diagnosis.update({
        where: { id: appointment.diagnosis_id },
        data: {
          diagnosis_description: appointment.diagnosis_description
        }
      })
    }

    return this.getById(appointment.id) as Promise<MedicalAppointment>
  }

  async delete (id: string): Promise<void> {
    prisma.medicalAppointment.delete({
      where: { id }
    })
  }
}
