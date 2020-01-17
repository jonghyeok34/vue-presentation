export default {
  props: ["veggies"],
  name: "veggies",
  template: `<div>
            <div>채소</div>
            <table>
                <tr v-for="(value, name) in veggies">
                    <th>{{ name }}</th>
                    <th>{{ value }}</th>
                </tr>
            </table>
        </div>`
};
