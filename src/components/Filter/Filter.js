export default function Filter({ filter, value }) {
  return <input type="text" value={value} onChange={filter} />;
}
