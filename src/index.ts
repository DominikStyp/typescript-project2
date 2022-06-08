import "./styles.css";
import { person } from "./types/simple_types";

document.getElementById("app")!.innerHTML = `
<div>
  <table id="tbl">
    <thead>
      <tr><th>Name</th><th>Age</th><th>Birth Date</th>
    </thead>
    <tbody>
      <tr>
        <td>
          ${person.name}
        </td>
        <td>
          ${person.age}
        </td>
        <td>
          ${person.dateOfBirth.toUTCString()}
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
