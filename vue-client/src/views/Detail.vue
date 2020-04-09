<template>
  <div>
    <van-panel :title="detail.title">
  <div>{{detail.content}}</div>
  <template #footer>
    {{detail.createTime}}
  </template>
</van-panel>
  </div>
</template>
<script>
import { Panel } from "vant";
export default {
  name: "Detail",
  data() {
    return {
      detail: {
        id: 2,
        img: "https://avatars2.githubusercontent.com/u/29670394?s=60&v=4",
        title: "文章标题",
        content: "文章内容",
        createTime: "2020/4/9 23:03"
      }
    };
  },
  components: {
    [Panel.name]: Panel
  }
};
</script>
<style scoped>
</style>