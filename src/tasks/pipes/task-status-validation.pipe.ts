import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = Object.values(TaskStatus);
  private isValideStatus(status: any) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -1;
  }
  transform(value: any) {
    console.log(value);
    value = value.toUpperCase();

    if (!this.isValideStatus(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    return value;
  }
}
