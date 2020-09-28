!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){},function(t,e,o){"use strict";o.r(e);o(0);function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.todos=JSON.parse(localStorage.getItem("todos"))||[]}var e,o,i;return e=t,(o=[{key:"bindTodoListChanged",value:function(t){this.onTodoListChanged=t}},{key:"save",value:function(t){this.onTodoListChanged(t),localStorage.setItem("todos",JSON.stringify(t))}},{key:"create",value:function(t){var e={id:this.todos.length>0?this.todos[this.todos.length-1].id+1:1,name:t,status:!1};this.todos.push(e),this.save(this.todos)}},{key:"update",value:function(t,e){this.todos=this.todos.map((function(o){return o.id===t?{id:o.id,name:e,status:o.status}:o})),this.save(this.todos)}},{key:"remove",value:function(t){this.todos=this.todos.filter((function(e){return e.id!==t})),this.save(this.todos)}},{key:"toggleStatus",value:function(t){this.todos=this.todos.map((function(e){return e.id===t?{id:e.id,name:e.name,status:!e.status}:e})),this.save(this.todos)}}])&&n(e.prototype,o),i&&n(e,i),t}();function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.app=this.getElement("#app"),this.form=this.createElement("form","todo-form"),this.input=this.createElement("input","todo-form__input"),this.input.type="text",this.input.placeholder="Add todo",this.input.name="todo",this.submitButton=this.createElement("button","todo-button"),this.submitButton.textContent="Add",this.form.append(this.input,this.submitButton),this.title=this.createElement("h1","todo-title"),this.title.textContent="Todos",this.todoList=this.createElement("ul","todo-list"),this.app.append(this.title,this.form,this.todoList),this.temporaryTodoName="",this.initLocalListeners()}var e,o,n;return e=t,(o=[{key:"resetInput",value:function(){this.input.value=""}},{key:"createElement",value:function(t,e){var o=document.createElement(t);return e&&o.classList.add(e),o}},{key:"getElement",value:function(t){return document.querySelector(t)}},{key:"render",value:function(t){for(var e=this;this.todoList.firstChild;)this.todoList.removeChild(this.todoList.firstChild);if(0===t.length){var o=this.createElement("p");o.textContent="Nothing to do! Good Job 🏆",this.todoList.append(o)}else t.forEach((function(t){var o=e.createElement("li","todo-item");o.id=t.id;var n=e.createElement("input","todo-item__checkbox");n.type="checkbox",n.checked=t.status;var i=e.createElement("span","todo-item__text");if(i.contentEditable=!0,i.classList.add("editable"),t.status){var r=e.createElement("s");r.textContent=t.name,i.append(r)}else i.textContent=t.name;var s=e.createElement("button","todo-button--delete");s.textContent="Delete",o.append(n,i,s),e.todoList.append(o)}))}},{key:"initLocalListeners",value:function(){var t=this;this.todoList.addEventListener("input",(function(e){"editable"===e.target.className&&(t.temporaryTodoName=e.target.innerText)}))}},{key:"onAddTodo",value:function(t){var e=this;this.form.addEventListener("submit",(function(o){o.preventDefault(),e.todoText&&(t(e.todoText),e.resetInput())}))}},{key:"onDeleteTodo",value:function(t){this.todoList.addEventListener("click",(function(e){if("todo-button--delete"===e.target.className){var o=parseInt(e.target.parentElement.id);t(o)}}))}},{key:"onEditTodo",value:function(t){var e=this;this.todoList.addEventListener("focusout",(function(o){if(e.temporaryTodoName){var n=parseInt(o.target.parentElement.id);t(n,e.temporaryTodoName),e.temporaryTodoName=""}}))}},{key:"onToggleTodo",value:function(t){this.todoList.addEventListener("change",(function(e){if("checkbox"===e.target.type){var o=parseInt(e.target.parentElement.id);t(o)}}))}},{key:"todoText",get:function(){return this.input.value}}])&&r(e.prototype,o),n&&r(e,n),t}();new function t(e,o){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.model=e,this.view=o,this.model.bindTodoListChanged((function(t){n.view.render(t)})),this.view.onAddTodo((function(t){n.model.create(t)})),this.view.onEditTodo((function(t,e){n.model.update(t,e)})),this.view.onDeleteTodo((function(t){n.model.remove(t)})),this.view.onToggleTodo((function(t){n.model.toggleStatus(t)})),this.view.render(this.model.todos)}(new i,new s)}]);