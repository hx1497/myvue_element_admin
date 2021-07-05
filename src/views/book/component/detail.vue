<template>

  <el-form ref="postForm" :model="postForm">
    <sticky :class-name=" 'sub-navbar' ">
      <el-button v-if="!isEdit" @click="showGuide"> 显示帮助 </el-button>
      <el-button
        v-loading="loading"
        type="success"
        style="margin-left: 10px"
        @click="submitForm"
      >
        {{ isEdit ? '编辑电子书' : '新增电子书' }}
      </el-button>
    </sticky>

    <div class="detail-container">
      <el-row>
        <warning />
        <el-col :span="24">
          <!-- 表单控件的具体样式 -->
          <ebook-upload />
        </el-col>
        <el-col :span="24" />
      </el-row>
    </div>
  </el-form>

</template>
<script>
import Sticky from '../../../components/Sticky'
import Warning from './warning.vue'
import EbookUpload from '../../../components/EbookUpload'

export default {
  components: { Sticky, Warning, EbookUpload },
  props: {
    isEdit: Boolean
  },
  data() {
    return {
      loading: false,
      postForm: {

      }
    }
  },
  methods: {
    showGuide() {
      this.$message(
        {
          message: 'show guide...',
          showClose: true
        }
      )
    },
    submitForm() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$message({
          message: '上传成功!',
          type: 'success',
          showClose: true
        })
      }, 1000)
    }
  }

}
</script>
<style scoped>
.detail-container {
    padding: 40px 50px 20px;
}
</style>
