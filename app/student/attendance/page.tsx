function addDay(date: Date, n: number) {
  let lDate = new Date(date);
  lDate.setDate(lDate.getDate() + n);
  return lDate;
}


export default function StudentGrades() {
  const d: Date = new Date('2022-01-01')

  return <div className="flex w-full justify-center items-center">
    <div className="grid grid-rows-7 grid-flow-col  w-11/12">
      {Array.from({ length: 3 }).map((e,i) => (
        <div />
      ))}
      {Array.from({ length: 365 }).map((e,i) => (
        <AttendanceDatacell key={i} d={addDay(d,i)} />
      ))}
    </div>
  </div>
}

function fetchAttendance(){
  return {
        "dates": [
            "2022-01-01",
            "2022-01-05",
            "2022-01-06",
            "2022-01-07",
            "2022-01-08",
            "2022-01-14",
            "2022-01-15"
        ]
    }
}

//    <p className="m-1">{d.toISOString().split('T')[0]}</p>

function AttendanceDatacell({d}: {d: Date}){
  const date_string = d.toISOString().split('T')[0];
  const is_asbest = fetchAttendance()['dates'].includes(date_string)

   return <div className={`grow aspect-square m-[2px] ${is_asbest ? "bg-red-700" : "bg-green-500"}`} />
}