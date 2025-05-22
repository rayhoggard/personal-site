import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepo: Repository<Patient>,
  ) {}

  createPatient(data: Partial<Patient>) {
    const newPatient = this.patientRepo.create(data);
    return this.patientRepo.save(newPatient);
  }

  findAll() {
    return this.patientRepo.find();
  }
}
