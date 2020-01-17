const fruitsTable = {
  props: ["fruits"],
  template: `<div>
            <div>과일</div>
            <table>
                <tr v-for="(value, name) in fruits">
                    <th>{{ key }}</th>
                    <th>{{ value }}</th>
                </tr>
            </table>
        </div>`
};
