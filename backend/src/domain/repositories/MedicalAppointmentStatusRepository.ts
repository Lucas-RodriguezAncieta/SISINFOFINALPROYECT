import { type MedicalAppointmentStatus } from '../../domain/entities/medicalAppointmentStatus'

export interface MedicalAppointmentStatusRepository {
  getAll: () => Promise<MedicalAppointmentStatus[]>
  save: (status: MedicalAppointmentStatus) => Promise<MedicalAppointmentStatus>
}
