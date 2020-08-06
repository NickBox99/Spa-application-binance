<template>
    <div class="wraper">
        <table class="table" border="1">
            <caption ><slot></slot></caption>
            <thead>
              <tr class="table__row">
                  <th class="table__row__th">Price</th>
                  <th class="table__row__th">Ammount</th>
                  <th class="table__row__th hide-mobile">Total</th>
              </tr>
            </thead>
            <tbody class="table__tbody">
            <tr class="table__row" v-for="(element, index) in elements" :key="index">
                <td class="table__row__td">{{ element[0] }}</td>
                <td class="table__row__td">{{ element[1] }}</td>
                <td class="table__row__td hide-mobile">
                {{ element[0] * element[1] }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "table",
  props: ["elements"]
};
</script>

<style scoped>

.wraper {
  overflow: auto;
  width: 100%;
}
.table {
  width: 100%;
}
.table__row__th,
.table__row__td {
  border: 1px solid grey;
  padding: 10px;
}
@media screen and (max-device-width: 840px) {
  .hide-mobile {
    display: none;
  }
}
</style>
