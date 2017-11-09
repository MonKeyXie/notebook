<template>
  <div class="container">
   <div class="input">
     <input type="text" id="todo-input" @keydown.enter.prevent="handleSubmit"
     autofocus="autofocus" placeholder="What to do today?" v-model="value" >
     <div v-if="value.length > 0" @click="handleSubmit" class="add-btn">
       <i>+</i>
     </div>
   </div>
   <div class="todo-list">
     <ul>
       <li class="todo" v-for="todo in todos" :key='todo.id'>
         <!-- container for the completed button -->
         <div :class="['check-circle',{'check-circle-ative':todo.done}]" @click='handleDone(todo)'>
           <div class="circle">
            <div :class="['checkmark',{'checkmark-active':todo.done}]">&#10003</div>
           </div>
           <div :class="['text',{'text-done':todo.done}]">{{ todo.value }}</div>
         </div>
       </li>
     </ul>
   </div>
 </div>
</template>

<script type="ecmascript-6">
import Store from '@/localstorage'

  export default {
    data () {
      return {
        value : "",
        todos: Store.fetch('notebook-todo')||[]
      }
    },
    methods: {
      handleSubmit(){
        this.todos.unshift({
          done: false,
          value: this.value.trim()
        })
      if(this.todos.length > 15) {
        this.todos.pop()
      }
      this.value = ""
      },
      handleDone(todo){
        todo.done = !todo.done
      }
    },
    watch: {
      todos: {
        handler: function(todos) {                   ////////
          Store.save('notebook-todo',todos)
        },
        deep: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    width:100%
    overflow:hidden
    position:absolute
    top:45px
    bottom:0
    background: linear-gradient(to bottom,#7cba59,#bbed93)
    color:#fff
    .input
      position:absolute
      top:0
      left:0
      right:0
      margin:20px 0
      font-size:1.5em
      font-family: aileronthin;
      #todo-input
        display:inline-block
        width: 70%
        height:40px
        outline: none
        background: none
        border-bottom:1px solid rgba(255,255,255,.6)
        text-align:center
        margin-left:15%
        color:#fff
      #todo-input::-webkit-input-placeholder /* Chrome/Opera/Safari */
        color: rgba(255,255,255, 0.4)
      #todo-input::-moz-placeholder /* Firefox 19+ */
        color: rgba(255,255,255, 0.4)
      #todo-input:-ms-input-placeholder  /* IE 10+ */
        color: rgba(255,255,255, 0.4)
      #todo-input:-moz-placeholder /* Firefox 18- */
        color: rgba(255,255,255, 0.4)
      .add-btn
        display:inline-block
        width:28px
        height:28px
        border-radius:50%
        font-style:normal
        text-align:center
        font-family: 'Times New Roman';
        line-height:28px
        font-size:2.1em
        font-weight:bolder
        background:rgba(255,255,255,.6)
        color:rgba(0,111,111,.5)
    .todo-list
      position:absolute
      top:81px
      left:0
      right:0
      bottom:0
      padding-left:12%
      overflow-y:scroll
      overflow-x:hidden
      .todo
        width:100%
        .check-circle-ative
          border-color: #515151
          color:#515151
        .check-circle
          display:flex
          width:100%
          margin:20px 0 0 0
          text-align:center
          .circle
            width:20%
            font-size:1.9em
            .checkmark
              width: 32px
              height: 32px
              height: 32px
              border-radius:50%
              border:1px solid rgba(255 ,255 ,255, 0.4)
            .checkmark-active
              border-color: #515151
          .text
            width:70%
            line-height: 32px
            text-align:left
            font-size: 1.4em
          .text-done 
            text-decoration: line-through
</style>