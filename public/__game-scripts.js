var Movement = pc.createScript("movement");
(Movement.prototype.initialize = function () {}),
  (Movement.prototype.update = function (t) {
    var e = this.app.keyboard,
      s = e.isPressed(pc.KEY_LEFT),
      i = e.isPressed(pc.KEY_RIGHT),
      n = e.isPressed(pc.KEY_UP),
      a = e.isPressed(pc.KEY_DOWN);
    s && this.entity.translate(-t, 0, 0),
      i && this.entity.translate(t, 0, 0),
      n && this.entity.translate(0, 0, -t),
      a && this.entity.translate(0, 0, t);
  });
