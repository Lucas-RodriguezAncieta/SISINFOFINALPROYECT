import { type MedicalAppointment } from '../../domain/entities/medicalAppointment'

export interface MedicalAppointmentRepository {
  getAll: () => Promise<MedicalAppointment[]>
  save: (appointment: MedicalAppointment) => Promise<MedicalAppointment>
  getById: (id: string) => Promise<MedicalAppointment | null>
  update: (appointment: MedicalAppointment) => Promise<MedicalAppointment>
  delete: (id: string) => Promise<void>
}
