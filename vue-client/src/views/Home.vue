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
      setTimeout(() => {
        this.loading = false;
        this.finished = true;
        this.list = [
          {
            id: 1,
            img: "https://avatars2.githubusercontent.com/u/29670394?s=60&v=4",
            title: "文章标题",
            content: "文章内容",
            createTime: "2020/4/9 23:03"
          },
          {
            id: 2,
            img: "https://avatars2.githubusercontent.com/u/29670394?s=60&v=4",
            title: "文章标题",
            content: "文章内容",
            createTime: "2020/4/9 23:03"
          },
          {
            id: 3,
            img: "https://avatars2.githubusercontent.com/u/29670394?s=60&v=4",
            title: "文章标题",
            content: "文章内容",
            createTime: "2020/4/9 23:03"
          }
        ];
      }, 1000);
    }
  }
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