import { overtime } from "../model/overtime.model";

export class calculator {
  calculate(details: overtime) {
    if (0 > details.endTime || 24 < details.endTime) {
      return "end time value must be in range of 0 - 24";
    }
    if (0 > details.startTime || 24 < details.startTime) {
      return "start time value must be in range of 0 - 24";
    }
    if (details.endTime < details.startTime) {
      return "Invalid start and end time";
    }

    if (
      !details.endTime ||
      !details.hourlyRate ||
      !details.overTimeRate ||
      !details.startTime
    ) {
      return "Please provide proper values";
    }

    if (
      typeof details.endTime !== "number" ||
      typeof details.startTime !== "number" ||
      typeof details.hourlyRate !== "number" ||
      typeof details.overTimeRate !== "number"
    ) {
      return "Only number values allowed";
    }

    // Calculating total overtime rate

    const TotalWorkTime = details.endTime - details.startTime;
    const overtime = TotalWorkTime - 8;

    const RegularTotalRate = details.hourlyRate * 8;
    const OvertimeTotalRate =
      details.hourlyRate * details.overTimeRate * overtime;

    return RegularTotalRate + OvertimeTotalRate;
  }
}
