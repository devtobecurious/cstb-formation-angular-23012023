import { isNgTemplate } from "@angular/compiler"
import { Result } from "../../../core/models"

export interface Selfie {
  titre: string,
  description: string,
  date: Date
}


export type SelfieResult = Result<Selfie>;
