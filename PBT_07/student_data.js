const students = [
  { name: 'An', math: 8, physics: 7, cs: 9, gender: 'M' },
  { name: 'Binh', math: 6, physics: 9, cs: 7, gender: 'F' },
  { name: 'Chi', math: 9, physics: 6, cs: 8, gender: 'F' },
  { name: 'Dung', math: 5, physics: 5, cs: 6, gender: 'M' },
  { name: 'Em', math: 10, physics: 8, cs: 9, gender: 'F' },
  { name: 'Phong', math: 3, physics: 4, cs: 5, gender: 'M' },
  { name: 'Giang', math: 7, physics: 7, cs: 7, gender: 'F' },
  { name: 'Huy', math: 4, physics: 6, cs: 3, gender: 'M' },
];

function average(student) {
  return student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
}

function rank(avg) {
  if (avg >= 8) return 'Giỏi';
  if (avg >= 6.5) return 'Khá';
  if (avg >= 5) return 'Trung bình';
  return 'Yếu';
}

const rows = students.map((student, index) => ({
  ...student,
  stt: index + 1,
  avg: average(student),
  rank: rank(average(student)),
}));

console.table(rows.map(row => ({ STT: row.stt, Ten: row.name, TB: row.avg.toFixed(1), 'Xếp loại': row.rank })));

const counts = {};
for (const row of rows) counts[row.rank] = (counts[row.rank] || 0) + 1;

const byGender = {};
for (const row of rows) {
  if (!byGender[row.gender]) byGender[row.gender] = { total: 0, count: 0 };
  byGender[row.gender].total += row.avg;
  byGender[row.gender].count++;
}

console.log('Đếm xếp loại:', counts);
console.log('Cao nhất:', rows.reduce((a, b) => (a.avg > b.avg ? a : b)));
console.log('Thấp nhất:', rows.reduce((a, b) => (a.avg < b.avg ? a : b)));
console.log('TB môn:', {
  math: students.reduce((sum, student) => sum + student.math, 0) / students.length,
  physics: students.reduce((sum, student) => sum + student.physics, 0) / students.length,
  cs: students.reduce((sum, student) => sum + student.cs, 0) / students.length,
});
console.log('TB theo giới tính:', Object.fromEntries(Object.entries(byGender).map(([gender, value]) => [gender, value.total / value.count])));
