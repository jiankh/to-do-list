(()=>{"use strict";const e=class{static createDialog(){const e=document.createElement("dialog");e.setAttribute("id","newTaskDialog");const t=document.createElement("div");t.className="form-container";const n=document.createElement("div");n.className="form-title",n.textContent="Add a new task";const d=document.createElement("form");d.className="new-task-form";const a=document.createElement("div"),c=document.createElement("input");c.type="text",c.placeholder="Task",c.name="task-title",c.id="task-title",c.required=!0,a.appendChild(c);const o=document.createElement("div"),i=document.createElement("textarea");i.placeholder="Description",i.name="description",i.id="description",o.appendChild(i);const l=document.createElement("div"),s=document.createElement("input");s.type="date",s.placeholder="Due Date",s.name="date",s.id="date",l.appendChild(s);const r=document.createElement("div");r.classList.add("priority-container");const m=document.createElement("label");m.textContent="High priority?",m.setAttribute("for","priority");const p=document.createElement("input");p.type="checkbox",p.name="priority",p.id="priority",r.appendChild(m),r.appendChild(p);const u=document.createElement("div");u.classList.add("dialog-btn-container");const h=document.createElement("button");h.type="submit",h.className="add-book-inner",h.textContent="Add Task";const C=document.createElement("button");C.className="close-window",C.textContent="Close",u.appendChild(h),u.appendChild(C),t.appendChild(n),d.appendChild(a),d.appendChild(o),d.appendChild(l),d.appendChild(r),d.appendChild(u),t.appendChild(d),e.appendChild(t),document.querySelector(".main-content").appendChild(e)}static showDialog(){document.querySelector("#newTaskDialog").show()}static hideDialog(){document.querySelector("#newTaskDialog").close()}},t={init(){const t=document.querySelector(".add-task-btn"),n=(document.querySelector(".all-task-btn"),document.querySelector(".today-task-btn"),document.querySelector(".priority-task-btn"),document.querySelector(".close-window"));t.addEventListener("click",(()=>{e.createDialog(),e.showDialog()})),n.addEventListener("click",(t=>{t.preventDefault(),e.hideDialog()}))}};new class{constructor(e,t,n,d){this.title=e,this.description=t,this.dueDate=n,this.priority=d}displayCard(){!function(e,t,n){const d=document.querySelector(".main-content"),a=document.createElement("div");a.classList.add("todo-card"),1===n&&a.classList.add("priority");const c=document.createElement("input");c.type="checkbox",c.name="isComplete",c.id="isComplete";const o=document.createElement("div");o.className="card-title",o.textContent=e;const i=document.createElement("div");i.className="card-details";const l=document.createElement("button");l.textContent="detail",i.appendChild(l);const s=document.createElement("div");s.className="card-date",s.textContent=t;const r=document.createElement("div");r.className="delete-card";const m=document.createElement("button");m.textContent="delete",r.appendChild(m),a.appendChild(c),a.appendChild(o),a.appendChild(i),a.appendChild(s),a.appendChild(r),d.appendChild(a)}(this.title,this.dueDate,this.priority)}}("bookTitle","blblab","feb 27",1).displayCard(),t.init()})();