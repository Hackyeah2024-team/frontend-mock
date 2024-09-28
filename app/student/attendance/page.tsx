function addDay(date: Date, n: number) {
  let lDate = new Date(date);
  lDate.setDate(lDate.getDate() + n);
  console.log(lDate)
  return lDate;
}


export default function StudentGrades() {
  const d: Date = new Date('2022-01-01')

  return <div className="flex flex-col items-center justify-center">
    {Array.from({ length: 10 }).map((e,i) => (
      <AttendanceRow key={i} d={addDay(d, i)}/>
    ))}
  </div>;
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




function AttendanceRow({ d }: { d: Date}) {
  return <div className="flex flex-row w-64 justify-between">
    <p className="m-1">{d.toISOString().split('T')[0]}</p>
    <div className="flex flex-row">
    {Array.from({ length: 5 }).map((e,i) => (
      <AttendanceDatacell key={i} d={d.toISOString().split('T')[0]}/>
  ))}
  </div>
  </div>;
}

function AttendanceDatacell({d}: {d:string}){
  if(fetchAttendance()['dates'].includes(d)){
    return <div className="w-8 h-8 m-1 flex items-center justify-center bg-red-500"></div>
  }else{
    return <div className="w-8 h-8 m-1 flex items-center justify-center bg-green-500"></div>

  }
}