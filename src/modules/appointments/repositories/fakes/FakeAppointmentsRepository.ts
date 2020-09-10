import { v4 as uuid } from 'uuid';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(
      appointment => appointment.date === date,
    );

    return Promise.resolve(findAppointment);
  }

  public create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appointments.push(appointment);

    return Promise.resolve(appointment);
  }

  public save(appointment: Appointment): Promise<Appointment> {
    this.appointments = this.appointments.map(item =>
      item.id === appointment.id ? appointment : item,
    );

    return Promise.resolve(appointment);
  }
}

export default AppointmentsRepository;
