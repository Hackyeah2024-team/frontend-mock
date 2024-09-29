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

  return <div>
    <div className="flex flex-row justify-center items-center">
        <div className="grid grid-rows-7 grid-flow-col gap-1 w-11/12">
            <p>PON</p>
            <p>WT</p>
            <p>ŚR</p>
            <p>CZW</p>
            <p>PT</p>
            <p>SOB</p>
            <p>ND</p>
          {Array.from({ length: 3 }).map((e,i) => (
            <div key={i}/>
          ))}
          {Array.from({ length: 365 }).map((e,i) => (
            <AttendanceDatacell key={i+3} d={addDay(d,i)} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
      <div className="flex justify-between w-10/12">
        <p>Sty</p>
        <p>Lut</p>
        <p>Mar</p>
        <p>Kwi</p>
        <p>Maj</p>
        <p>Czerw</p>
        <p>Lip</p>
        <p>Sie</p>
        <p>Wrz</p>
        <p>Paz</p>
        <p>Lis</p>
        <p>Gru</p>
        </div>
        </div>
      </div>

}

function fetchAttendance(){
  return {
    "dates": [
    "2022-01-03",
    "2022-01-15",
    "2022-01-28",
    "2022-02-04",
    "2022-02-18",
    "2022-02-23",
    "2022-03-02",
    "2022-03-16",
    "2022-03-30",
    "2022-04-05",
    "2022-04-12",
    "2022-04-27",
    "2022-05-03",
    "2022-05-17",
    "2022-05-25",
    "2022-06-06",
    "2022-06-15",
    "2022-06-29",
    "2022-07-07",
    "2022-07-20",
    "2022-07-28",
    "2022-08-04",
    "2022-08-12",
    "2022-08-25",
    "2022-09-03",
    "2022-09-15",
    "2022-09-27",
    "2022-10-06",
    "2022-10-14",
    "2022-10-28",
    "2022-11-09",
    "2022-11-18",
    "2022-11-30",
    "2022-12-03",
    "2022-12-12",
    "2022-12-21",
    "2022-12-30"
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
      <p>{ is_asbest ? "Nieobecność" : "Obecność" } - {date_string}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
}