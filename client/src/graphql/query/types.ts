interface LocalizedName {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

interface NationalId {
  idNumber: string;
  expiryDate: string;
}

interface Country {
  id: string;
  name: string;
}

interface Nationality {
  country: Country;
  countryId: number;
}

interface MaritalStatus {
  id: string;
  name: string;
}

interface UserData {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: LocalizedName;
  nationalId: NationalId;
  nationalities: Nationality[];
  maritalStatus: MaritalStatus;
  dependants: number;
}

export interface GET_USER_TYPE {
  user: UserData;
}
