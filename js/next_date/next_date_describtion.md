# Guardian of the Calendar

In the Kingdom of Chronia, the royal timekeeper Aurelius guards the **Great Calendar of Eternity**. Each day, the calendar reveals the next date, ensuring the kingdom runs in harmony.

But after a violent storm, the calendar’s magic faltered. It now risks producing the wrong **“tomorrow.”** If this happens, festivals may vanish, markets may collapse, and even the King’s birthday could be lost in time.

Aurelius has asked for your help.

## Your Task
You are not to repair the calendar yourself. Instead, you must design a comprehensive set of test cases.

These test cases will be handed to Aurelius, who will use them to uncover the flaws and restore the Great Calendar.

Your test cases should clearly specify:
- The input date provided to the calendar(format of **dd-mm-yyyy**).
- The expected next date (or outcome).

Consider normal cases, edge cases and error cases.(Expected for error cases "Invalid Date")

## Expected Format
| Description | Input | Output |
| --- | --- | --- |
| Simple increment of a normal day | 15-03-2021 | 16-03-2021 |

/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * This means the first two characters will be digits for the day (e.g., 01, 23), 
 * followed by a hyphen (-), the next two characters will be digits for the month (e.g., 01, 12), 
 * followed by another hyphen, and the remaining four characters will be digits for the year 
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
 */
