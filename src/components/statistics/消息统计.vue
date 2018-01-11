<template>
  <div>
      <div class="stitle">
        <div class="num">累计接收条数： 165006条</div>
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
            prop="pNum"
            label="消息发送人数">
          </el-table-column>
          <el-table-column
            prop="mNum"
            label="消息发送次数">
          </el-table-column>
          <el-table-column
            prop="adv"
            label="人均发送条数">
          </el-table-column>
        </el-table>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
          data: '2018-01-09'	,
          pNum: 108,
          mNum:119,
          adv:1.10
        },{
          data: '2018-01-09'	,
          pNum: 108,
          mNum:119,
          adv:1.10
        },{
          data: '2018-01-09'	,
          pNum: 108,
          mNum:119,
          adv:1.10
        },{
          data: '2018-01-09'	,
          pNum: 108,
          mNum:119,
          adv:1.10
        },{
          data: '2018-01-09'	,
          pNum: 108,
          mNum:119,
          adv:1.10
        },{
          data: '2018-01-09'	,
          pNum: 108,
          mNum:119,
          adv:1.10
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
        text: '消息接收分析',
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
        data:['消息接受条数','消息发送条数'],
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
            name:'消息接受条数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'消息发送条数',
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
