export default {
  props: ["fruits"],
  name: "fruits",
  template: `<div>
            <div>과일</div>
            <table>
                <tr v-for="(value, name) in fruits">
                    <th>{{ name }}</th>
                    <th>{{ value }}</th>
                </tr>
            </table>
        </div>`
};
