<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 数据报表区域 -->
      <div id="main" style="width: 750px;height:400px;" ref="map"></div>
    </el-card>
  </div>
</template>
<script>
// 1. 导入echarts
import echarts from 'echarts'
import _ from 'lodash'
export default {
  data() {
    return {
      options: {
        title: {
          text: '用户来源'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#E9EEF3'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ]
      }
    }
  },
  created() {},
  // 在dom元素执行完毕后
  async mounted() {
    var myChart = echarts.init(this.$refs.map)
    const { data: res } = await this.$http.get('reports/type/1')
    if (res.meta.status != 200) return this.$message.error(res.meta.msg)
    const result = _.merge(res.data, this.options)
    myChart.setOption(result)
  },
  methods: {
    // 获取权限列表
  }
}
</script>
<style lang="less" scoped>
</style>


