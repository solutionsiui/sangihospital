import {
  Activity,
  Baby,
  Bone,
  Brain,
  Dumbbell,
  Droplets,
  Ear,
  FlaskConical,
  Microscope,
  Pill,
  Scan,
  Scissors,
  Siren,
  Smile,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

export const specialityIconMap: Record<string, LucideIcon> = {
  "general-medicine": Stethoscope,
  "general-surgery": Scissors,
  orthopaedics: Bone,
  "obstetrics-gynaecology": Baby,
  paediatrics: Baby,
  neurology: Brain,
  ent: Ear,
  dermatology: Stethoscope,
  gastroenterology: Pill,
  nephrology: Droplets,
  urology: Syringe,
  dentistry: Smile,
  diabetology: Droplets,
  physiotherapy: Dumbbell,
  radiology: Scan,
  pathology: Microscope,
  haematology: FlaskConical,
  "emergency-trauma-care": Siren,
};

export function getSpecialityIcon(id: string): LucideIcon {
  return specialityIconMap[id] ?? Activity;
}
