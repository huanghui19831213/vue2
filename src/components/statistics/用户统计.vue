<template>
  <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户增长" name="first">
      <div class="stitle">
        <div class="num">累计关注人数： 182536人</div>
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
            prop="data"
            label="时间">
          </el-table-column>
          <el-table-column
            prop="newNum"
            label="新关注人数">
          </el-table-column>
          <el-table-column
            prop="cancelNum"
            label="取消关注人数">
          </el-table-column>
          <el-table-column
            prop="addNum"
            label="净增关注人数">
          </el-table-column>
          <el-table-column
            prop="allNum"
            label="累计关注人数">
          </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="用户属性" name="second">用户属性</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
          data: '2018-01-09'	,
          newNum: '6',
          cancelNum:3,
          addNum:3,
          allNum:182549
        },{
          data: '2018-01-09'	,
          newNum: '6',
          cancelNum:3,
          addNum:3,
          allNum:182549
        },{
          data: '2018-01-09'	,
          newNum: '6',
          cancelNum:3,
          addNum:3,
          allNum:182549
        },{
          data: '2018-01-09'	,
          newNum: '6',
          cancelNum:3,
          addNum:3,
          allNum:182549
        },{
          data: '2018-01-09'	,
          newNum: '6',
          cancelNum:3,
          addNum:3,
          allNum:182549
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
        text: '新增人数分析',
        left: 'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['最新关注人数','取消关注人数'],
        bottom: 0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: 50,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['12.8','12.13','12.18','12.23','12.28','1.3','1.8']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'人数（人）'
        }
    ],
    series : [
        {
            name:'最新关注人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'取消关注人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
        });
    }
    }
  };
</script>
<<style lang="scss" scoped>
  .chart{
    height:500px;
    width:100%;
    margin:0 auto;
    padding-bottom:20px;
  }
  .stitle{
    display:flex;
    justify-content: space-between;
    align-items:center;
    background:rgba(66,185,131,.1);
    border-radius: 2px;
    padding: 16px;
    margin-bottom:20px;
    .num{
      color:#42b983;
    }
  }
</style>
