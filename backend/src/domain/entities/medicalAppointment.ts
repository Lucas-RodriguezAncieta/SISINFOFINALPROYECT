export interface MedicalAppointment {
  id: string
  hospital_id: string
  patient_id: string
  doctor_id: string
  diagnosis_id: string
  appointment_status_id: string
  appointment_date: Date
  appointment_time: string
  createdAt?: Date
  updatedAt?: Date
}
