// Store marks
const marks = [78, 85, 62, 90, 55];

// Process using map()
const processedMarks = marks.map(mark => mark);

// Calculate total
export const calculateTotal = (arr) =>
  arr.reduce((sum, mark) => sum + mark, 0);

// Calculate average
export const calculateAverage = (arr) =>
  arr.length ? calculateTotal(arr) / arr.length : 0;

// Pass/Fail
export const getResult = (avg) =>
  avg >= 40 ? "Pass ✅" : "Fail ❌";

// Display Report
const displayReport = () => {
  const total = calculateTotal(processedMarks);
  const average = calculateAverage(processedMarks);
  const result = getResult(average);

  console.log(`
📊 Student Marks Report
------------------------
Marks   : ${processedMarks.join(", ")}
Total   : ${total}
Average : ${average.toFixed(2)}
Result  : ${result}
`);
};

// 🔥 IMPORTANT: Call the function
displayReport();