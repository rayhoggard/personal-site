import { Controller, Post, Body, Get } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() body: Partial<Patient>) {
    return this.patientService.createPatient(body);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }
}
