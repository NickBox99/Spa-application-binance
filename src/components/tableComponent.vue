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
                <td class="table__row__td">{{ fixNumber(element[0], 4)}}</td>
                <td class="table__row__td">{{ fixNumber(element[1], 7) }}</td>
                <td class="table__row__td hide-mobile">
                {{ fixNumber(element[0] * element[1], 8) }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "table",
  props: ["elements"],
  methods: {
    fixNumber(number, how){
      return parseFloat(number).toFixed(+how);
    }
  }
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
  padding: 0.65rem;
  /* padding: 10px; */
}
@media screen and (max-device-width: 840px) {
  /* .table__row__td {
    padding: 5px 0 5px 10px;
  } */
  .hide-mobile {
    display: none;
  }
}
@media screen and (max-device-width: 450px){
  .table__row__td,
  .table__row__th {
    padding: 0.3rem 0 0.3rem 0.3rem;
  }
}
</style>
