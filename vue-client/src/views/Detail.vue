<template>
  <div>
    <van-panel :title="detail.title">
      <div>{{detail.content}}</div>
      <template #footer>{{detail.createTime}}</template>
    </van-panel>
  </div>
</template>
<script>
import { Panel } from "vant";
import axios from "axios";
import moment from "moment";
export default {
  name: "Detail",
  data() {
    return {
      detail: {}
    };
  },
  components: {
    [Panel.name]: Panel
  },
  created() {
    axios
      .get("http://localhost:7001/article/" + this.$route.query.id)
      .then(res => {
        res.data.msg.createTime = moment(res.data.msg.createTime).format("YYYY-MM-DD HH:mm:ss");
        this.detail = res.data.msg;
      });
  }
};
</script>
<style scoped>
</style>