<template>
  <div class="upload-container">
    <el-upload
      :action="action"
      :headers="headers"
      :multiple="false"
      :limit="1"
      :before-upload="beforeupload"
      :on-success="onSuccess"
      :on-error="onError"
      :on-remove="onRemove"
      :file-list="fileList"
      :on-exceed="onExceed"
      :disabled="disabled"
      drag="true"
      show-file-list
      accept="application/epub+zip"
      class="image-upload"
    >
      <i class="el-icon-upload" />
      <div v-if="fileList.length === 0" class="el-upload__text">
        请将电子书拖入或<em>点击上传</em>
      </div>
      <div v-else class="el-upload__text">图书已上传</div>
    </el-upload>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
export default {
  props: {
    fileList: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      action: `${process.env.VUE_APP_BASE_API}/book/upload`
    }
  },
  computed: {
    headers() {
      return {
        Authorization: `Bearer ${getToken()}`

      }
    }
  },
  methods: {
    beforeupload(file) {
      console.log(file)
      this.$emit('beforeupload', file)
    },
    onSuccess(response, file) {

    },
    onError(err) {
      const errMsg = err.message && JSON.parse(err.message)
      this.$message({
        message: (errMsg && errMsg.msg && ` 上传失败,失败原因: ${errMsg.msg} `) || '上传失败',
        type: 'error',
        showClose: 'true'
      })
    },
    onRemove() {

    },
    onExceed() {
      this.$message({
        message: '一次只能上传一本书',
        type: 'warning'
      })
    }

  }
}
</script>
<style scoped>
</style>
