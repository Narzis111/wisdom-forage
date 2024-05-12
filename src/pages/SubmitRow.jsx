

const SubmitRow = ({ sub }) => {
  const { tilte, marks, status, obtained_mark, feedback } = sub;
  console.log(sub);
  return (

    <tr>
      <th>
        <button className="btn btn-ghost btn-xs">{status}</button>
      </th>
      <td>{tilte}</td>
      <td>{marks}</td>
      <td>{obtained_mark}</td>
      <td>{feedback}</td>

    </tr>
  );
};

export default SubmitRow;