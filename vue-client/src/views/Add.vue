<template>
  <div>
    <van-uploader :max-count="1" :after-read="afterRead" v-model="fileList" />
    <van-cell-group>
      <van-field v-model="title" placeholder="请输入文章标题" />
      <van-field v-model="content" placeholder="请输入文章内容" type="textarea" autosize />
    </van-cell-group>
    <van-button @click="addEvent" type="primary" class="b-submit">提交</van-button>
  </div>
</template>
<script>
import { Cell, CellGroup, Button, Uploader, Field } from "vant";
import axios from "axios";
export default {
  components: {
    [Uploader.name]: Uploader,
    [Button.name]: Button,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      fileList: [],
      title: "",
      content: "",
      img: ""
    };
  },
  methods: {
    afterRead(info) {
      this.img = info.content;
    },
    addEvent() {
      let data = {
        title: this.title,
        content: this.content,
        img: this.img
      };
      axios
        .post("http://localhost:7001/article", data)
        .then(
          this.$router.push({path:'/'})
        );
    }
  }
};
</script>
<style scoped>
.b-submit {
  width: 100%;
  margin-top: 50px;
}
</style>