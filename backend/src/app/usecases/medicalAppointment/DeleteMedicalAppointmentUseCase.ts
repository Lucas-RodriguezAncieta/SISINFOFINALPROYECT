import { type MedicalAppointmentRepository } from '../../../domain/repositories/MedicalAppointmentRepository'

export class DeleteMedicalAppointmentUseCase {
  constructor (private readonly repository: MedicalAppointmentRepository) {}

  async run (id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
