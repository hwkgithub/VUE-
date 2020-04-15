/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-11 20:18:17
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-15 22:56:33
 */
function Watcher(vm, exp, cb) {
  this.cb = cb; // 更新界面的回调函数
  this.vm = vm;
  this.exp = exp;
  this.depIds = {}; // {0: d0, 1: d1, 2: d2} 包含所有相关dep的容器对象
  this.value = this.get(); //得到表达式的初始值保存
}

Watcher.prototype = {
  update: function () {
    this.run();
  },
  run: function () {
    // 得到最新的值
    var value = this.get();
    // 得到旧值
    var oldVal = this.value;
    // 如果不相同
    if (value !== oldVal) {
      this.value = value;
      // 调用回调函数更新对应的界面
      this.cb.call(this.vm, value, oldVal);
    }
  },
  addDep: function (dep) {
    //判断dep和watcher之间的关系是否已经建立
    if (!this.depIds.hasOwnProperty(dep.id)) {
      // 建立dep到watcher
      dep.addSub(this);
      // 建立watcher到dep的关系
      this.depIds[dep.id] = dep;
    }
  },
  //得到表达式的值，但是会建立dep和watcher的关系
  get: function () {
    //给dep指定当前的watcher
    Dep.target = this;
    // 获取当前表达式的值, 内部会导致属性的get()调用
    var value = this.getVMVal();
    //去除dep中指定的当前watcher 因为关系已经建立了
    Dep.target = null;
    return value;
  },
  //得到表达时对应的值
  getVMVal: function () {
    var exp = this.exp.split('.');
    var val = this.vm._data;
    exp.forEach(function (k) {
      val = val[k];
    });
    return val;
  }
};
Dep.target = null;