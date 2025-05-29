-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firebase_uid" TEXT NOT NULL,
    "user_type_id" TEXT NOT NULL,
    "specialty_id" TEXT,
    "schedule_id" TEXT,
    "full_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSchedule" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "schedule_id" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserHospital" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "hospital_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserHospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserClinic" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "clinic_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserClinic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalAppointment" (
    "id" TEXT NOT NULL,
    "hospital_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "diagnosis_id" TEXT NOT NULL,
    "appointment_status_id" TEXT NOT NULL,
    "appointment_date" TIMESTAMP(3) NOT NULL,
    "appointment_time" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firebase_uid_key" ON "User"("firebase_uid");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_user_type_id_fkey" FOREIGN KEY ("user_type_id") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_specialty_id_fkey" FOREIGN KEY ("specialty_id") REFERENCES "Specialty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSchedule" ADD CONSTRAINT "UserSchedule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSchedule" ADD CONSTRAINT "UserSchedule_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHospital" ADD CONSTRAINT "UserHospital_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHospital" ADD CONSTRAINT "UserHospital_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserClinic" ADD CONSTRAINT "UserClinic_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserClinic" ADD CONSTRAINT "UserClinic_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalAppointment" ADD CONSTRAINT "MedicalAppointment_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalAppointment" ADD CONSTRAINT "MedicalAppointment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalAppointment" ADD CONSTRAINT "MedicalAppointment_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalAppointment" ADD CONSTRAINT "MedicalAppointment_diagnosis_id_fkey" FOREIGN KEY ("diagnosis_id") REFERENCES "Diagnosis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalAppointment" ADD CONSTRAINT "MedicalAppointment_appointment_status_id_fkey" FOREIGN KEY ("appointment_status_id") REFERENCES "MedicalAppointmentStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
