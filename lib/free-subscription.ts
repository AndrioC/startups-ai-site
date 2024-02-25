import { addYears } from "date-fns";

export function calculateFreeSubscriptionExpirationDate(): Date | null {
  const currentDate = new Date();
  const expirationDate = addYears(currentDate, 1);

  const maxExpirationDate = new Date("2024-12-31");
  if (currentDate > maxExpirationDate) {
    return null;
  }

  return expirationDate;
}
