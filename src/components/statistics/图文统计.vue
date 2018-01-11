<template>
  <div>
      <div class="stitle">
        <div class="num">2018/01/03 至 2018/01/09      图文浏览篇数： 1篇，  图文分享篇数：0篇，  不支持图文外链和图文应用的统计。</div>
        <div>
          <el-button>7天</el-button>
          <el-button>14天</el-button>
          <el-button>30天</el-button>
          <el-date-picker
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            default-value="2010-10-01">
        </el-date-picker>
        </div>
      </div>
      <div id="myChart" class="chart"></div>
      
      <span>详细信息</span>
      <el-table
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%" class="mt20">
          <el-table-column
            prop="name"
            label="分类名称">
          </el-table-column>
          <el-table-column
            prop="type"
            label="所属分类">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建日期">
          </el-table-column>
          <el-table-column
            prop="sort"
            label="排序">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                size="mini">编辑</el-button>
              <el-button
                size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '安心体检		'	,
          type: '体检',
          date:'2016/8/31 15:42:31',
          sort:'22'
        },{
          name: '安心体检		'	,
          type: '体检',
          date:'2016/8/31 15:42:31',
          sort:'22'
        },{
          name: '安心体检		'	,
          type: '体检',
          date:'2016/8/31 15:42:31',
          sort:'22'
        },{
          name: '安心体检		'	,
          type: '体检',
          date:'2016/8/31 15:42:31',
          sort:'22'
        },{
          name: '安心体检		'	,
          type: '体检',
          date:'2016/8/31 15:42:31',
          sort:'22'
        }]
      };
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
           title: {
                text: '图文浏览数与分享数统计',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['分享数', '阅读数'],
                bottom: 0
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: 50,
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['我们主要服务与产品']
            },
            series: [
                {
                    name: '分享数',
                    type: 'bar',
                    data: [18203]
                },
                {
                    name: '阅读数',
                    type: 'bar',
                    data: [0]
                }
            ]
        });
      }
    }
  };
</script>
<<style lang="scss" scoped>
  .chart{
    height:300px;
    width:100%;
    margin:0 auto;
    padding-bottom:20px;
  }
  .stitle{
    background:rgba(66,185,131,.1);
    border-radius: 2px;
    padding: 16px;
    margin-bottom:20px;
    .num{
      color:#42b983;
      margin-bottom:12px;
    }
  }
</style>
