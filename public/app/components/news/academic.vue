<template>
    <!-- 学术活动 -->
    <div class="am-u-sm-12 am-u-md-6" style='padding-top: 2rem;padding-bottom: 2rem;'>
        <img src="./../../../img/xshd (1).png" class="am-center am-img-responsive" />
        <div class="am-u-sm-12 am-u-md-12 am-u-md-centered" id='academic'>
            <ul>
                <li v-for="ele in academic">
                    <a href={{ele.href}}>{{ele.title | title}}</a>
                    <span class="am-badge am-badge-success am-fr">{{ele.time}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    var $ = require('jquery');
    export default {
        data() {
            return {
                academic: []
            }
        },
        created() {
            var that = this;
            $.ajax({
                type: "get",
                url: "/api/academic",
                dataType: 'json',
                success: function(data) {
                    that.academic = data
                }
            });
        }
    }
</script>