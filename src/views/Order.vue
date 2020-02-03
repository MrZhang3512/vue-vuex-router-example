<template>
    <div id="app">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有订单" name="所有订单">
                <el-table :data="orders" size="small">
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="下单时间" prop="orderTime"></el-table-column>
                    <el-table-column label="总价" prop="total"></el-table-column>
                    <el-table-column label="状态" prop="status"></el-table-column>
                    <el-table-column label="顾客id" prop="customerId"></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="未支付" name="待支付">
                <el-table :data="filterOrdersByStatus(activeName)" size="small">
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="下单时间" prop="orderTime"></el-table-column>
                    <el-table-column label="总价" prop="total"></el-table-column>
                    <el-table-column label="状态" prop="status"></el-table-column>
                    <el-table-column label="顾客id" prop="customerId"></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="待派单" name="待派单">
                <el-table :data="filterOrdersByStatus(activeName)" size="small">
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="下单时间" prop="orderTime"></el-table-column>
                    <el-table-column label="总价" prop="total"></el-table-column>
                    <el-table-column label="状态" prop="status"></el-table-column>
                    <el-table-column label="顾客id" prop="customerId"></el-table-column>
                    <el-table-column label="操作">
                        <template v-slot="slot">
                            <a href="" @click.prevent="paidanHandler(slot.row.id)">派单</a>
                        </template>
                        </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="未服务" name="待服务">
                <el-table :data="filterOrdersByStatus(activeName)" size="small">
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="下单时间" prop="orderTime"></el-table-column>
                    <el-table-column label="总价" prop="total"></el-table-column>
                    <el-table-column label="状态" prop="status"></el-table-column>
                    <el-table-column label="顾客id" prop="customerId"></el-table-column>
                    <el-table-column label="操作">
                        <template v:slot="slot">
                            <a href="" @click.prevent="to">取消</a>
                        </template>
                        </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="未评价" name="待评价">
                <el-table :data="filterOrdersByStatus(activeName)" size="small">
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="下单时间" prop="orderTime"></el-table-column>
                    <el-table-column label="总价" prop="total"></el-table-column>
                    <el-table-column label="状态" prop="status"></el-table-column>
                    <el-table-column label="顾客id" prop="customerId"></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="已完成">
                <el-table :data="filterOrdersByStatus(activeName)" size="small">
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="下单时间" prop="orderTime"></el-table-column>
                    <el-table-column label="总价" prop="total"></el-table-column>
                    <el-table-column label="状态" prop="status"></el-table-column>
                    <el-table-column label="顾客id" prop="customerId"></el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <!-- 模态框 -->
            <el-dialog :title="title" :visible="visible" @close="handlerClose">
                {{waiters}}
            <el-radio-group v-model="waiterId">
                <el-radio :label="w.id" v-for="w in waiters" :key="w.id">{{w.realname}}</el-radio>
            
            </el-radio-group>
                <div slot="footer">
                    <el-button size="small" @click="handlerClose">取消</el-button>
                    <el-button size="small" type="primary" @click="handlerSubmit(waiterId)">确定</el-button>
                </div>
            </el-dialog>
            <!-- /模态框 -->
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{
            activeName:"所有订单",
            visible:false,
            order:{},
            title:"派单",
            waiterId:0
        }
    },
    methods:{
        ...mapActions("order",["findAllOrders"]),
        handleClick(tab){
            this.activeName=tab.name;

        },
        paidanHandler(orderId){
            this.visible=true
        },
        handlerClose(){
            this.visible=false;
        },
        handlerSubmit(){
            this.handlerClose();
        }
    },
    created(){
        this.findAllOrders();
    },
    computed:{
        ...mapState("order",["orders"]),
        ...mapState("waiter",["waiters"]),

        ...mapGetters("order",["filterOrdersByStatus"]),
    
    }

}
</script>
<style scoped>

</style>