import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function addDay(date: Date, n: number) {
  let lDate = new Date(date);
  lDate.setDate(lDate.getDate() + n);
  return lDate;
}


export default function StudentGrades() {
  const d: Date = new Date('2022-01-01')

  return <div className="flex w-full justify-center items-center">
    <div className="grid grid-rows-7 grid-flow-col gap-[4px] w-11/12">
      {Array.from({ length: 3 }).map((e,i) => (
        <div key={i}/>
      ))}
      {Array.from({ length: 365 }).map((e,i) => (
        <AttendanceDatacell key={i+3} d={addDay(d,i)} />
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
        "2022-01-15",
        "2022-01-20",
        "2022-01-21",
        "2022-01-25",
        "2022-01-26",
        "2022-02-01",
        "2022-02-05",
        "2022-02-06",
        "2022-02-10",
        "2022-02-14",
        "2022-02-15",
        "2022-02-20",
        "2022-02-21",
        "2022-11-25",
        "2022-11-30",
        "2022-12-01",
        "2022-12-05",
        "2022-12-10",
        "2022-12-15",
        "2022-12-20",
        "2022-12-25"
    ]
    }
}

//    <p className="m-1">{d.toISOString().split('T')[0]}</p>

function AttendanceDatacell({d}: {d: Date}){
  const date_string = d.toISOString().split('T')[0];
  const is_asbest = fetchAttendance()['dates'].includes(date_string)

  return <TooltipProvider>
  <Tooltip>
    <TooltipTrigger><div className={`grow rounded-xl aspect-square ${is_asbest ? "bg-red-700" : "bg-green-500"}`} /></TooltipTrigger>
    <TooltipContent>
      <p>{ is_asbest ? "Asbest" : "Good" }</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
}