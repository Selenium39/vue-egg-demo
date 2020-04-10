<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.id" @click="clickEvent(item.id)">
        <div class="a-img">
          <img :src="item.img" />
        </div>
        <div class="a-text">
          <div>{{item.title}}</div>
          <div>{{item.createTime}}</div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import { List, Cell } from "vant";
import axios from "axios";
import moment from "moment";
export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    clickEvent(id) {
      this.$router.push({
        path: "detail",
        query: {
          id
        }
      });
    },
    onLoad() {
      axios.get("http://localhost:7001/article").then(res => {
        if (res.status == 200) {
          this.loading = false;
          this.finished = true;
          //对每个文章的时间进行格式化
          this.list = res.data.msg.map(item => {
            item.createTime = moment(item.createTime).format(
              "YYYY-MM-DD HH:mm:ss"
            );
            return item;
          });
        }
      });
    }
  },
  watch: {
    list(){
      this.onLoad();
    }
  },
};
</script>
<style scoped>
.a-img {
  float: left;
}
.a-text {
  float: right;
}
</style>