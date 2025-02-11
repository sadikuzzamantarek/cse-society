import * as Yup from "yup";
export const MentorSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required for storing purpose only"),
  phone: Yup.string().required(
    "Phone number is required for storing purpose only"
  ),
  presentPosition: Yup.string(),
  formerPosition: Yup.string(),
  batch: Yup.string().required("Batch Number of University is required"),
  // photo: Yup.string().required("Photo is required"),
});
export const AdvisorSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  designition: Yup.string().required(
    "Designation from the Department is required"
  ),
  position: Yup.string().required("Position in the CSE Society is required"),
  phone: Yup.string().required("Phone number is required. Start with +880"),
  department: Yup.string().required("Department is required"),
});
export const MemberSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  designition: Yup.string().required(
    "Designation from the Department is required"
  ),
  phone: Yup.string().required("Phone number is required. Start with +880"),
  department: Yup.string().required("Department is required"),
});
export const CommitteeSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  universityID: Yup.string().required(
    "ID Provided by the University is required"
  ),
  department: Yup.string().required("Department name is required"),
  batch: Yup.string().required("Batch Number from Univesity"),
  phone: Yup.string().required(
    "Phone number is required for storing purpose only. Start with +880"
  ),
  team: Yup.string().required("Team assigned for the member is required"),
  rank: Yup.string().required(
    "Rank is needed. Same rank cannot be assigned more than once within the same team."
  ),
  designition: Yup.string().required(
    "Designition from the CSE Society is needed."
  ),
  level: Yup.string().required("Current Level is required"),
  term: Yup.string().required("Current Term is required"),
});

export const committeeRegistrationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  universityID: Yup.string().required(
    "ID Provided by the University is required"
  ),
  department: Yup.string().required("Department name is required"),
  batch: Yup.string().required("Batch Number from Univesity"),
  phone: Yup.string().required(
    "Phone number is required for storing purpose only. Start with +880"
  ),
  fieldOfInterest: Yup.string().required("Field of Interest is required"),
  level: Yup.string().required("Current Level is required"),
  term: Yup.string().required("Current Term is required"),
});
