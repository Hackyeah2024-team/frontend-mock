export default function ClassView({ params }: { params: { id: string } }) {
  return <p>{params.id}</p>;
}
