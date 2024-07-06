export const calculateGPA = (marks) => {
  let totalCredits = 0;
  let totalPoints = 0;
  
  // Table = {}; [,,, ] for (let i = 0, i < 10; i++)
  let newTable = marks.map((module) => {
    let gradepoint = 0;

    if (module.mark >= 70 && module.mark <= 100) {
      gradepoint = 4.0;
    } else if (module.mark >= 65 && module.mark < 70) {
      gradepoint = 3.7;
    } else if (module.mark >= 60 && module.mark < 65) {
      gradepoint = 3.3;
    } else if (module.mark >= 50 && module.mark < 70) {
      gradepoint = 3.0;
    } else if (module.mark >= 45 && module.mark < 50) {
      gradepoint = 2.3;
    } else if (
      (module.mark >= 40 && module.mark <= 44.99) ||
      module.status === "Condone Pass"
    ) {
      gradepoint = 2.0;
    } else {
      gradepoint = 0.0;
    }

    totalCredits += module.credit;
    totalPoints += gradepoint * module.credit;
    return { ...module, gradepoint };
  });

  return (totalPoints / totalCredits).toFixed(2);
};
