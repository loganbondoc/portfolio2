import React, { useRef } from "react";
import Sketch from "react-p5";

export default function BoidFlock() {
  const flockRef = useRef(null);
  const lastAddTimeRef = useRef(0);

  class Boid {
    constructor(p5, x, y) {
      this.p5 = p5;
      this.acceleration = p5.createVector(0, 0);
      this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
      this.position = p5.createVector(x, y);

      // Assign size and strokeWeight randomly
      // const sizeOptions = [
      //   { radius: 3, strokeWeight: 2 },
      //   { radius: 6, strokeWeight: 3 },
      //   { radius: 9, strokeWeight: 4 },
      //   { radius: 12, strokeWeight: 5 },
      // ];
      const sizeOptions = [
        { radius: 8, strokeWeight: 2 },
        { radius: 12, strokeWeight: 1 },
        { radius: 16, strokeWeight: 3 },
        { radius: 16, strokeWeight: 4 },
        { radius: 28, strokeWeight: 4 },
      ];
      const idx = Math.floor(Math.random() * sizeOptions.length);
      const selected = sizeOptions[idx];
      this.r = selected.radius;
      this.strokeWeight = selected.strokeWeight;

      this.maxspeed = 3;
      this.maxforce = 0.05;
    }

    run(boids) {
      this.flock(boids);
      this.update();
      this.borders();
      this.render();
    }

    applyForce(force) {
      this.acceleration.add(force);
    }

    flock(boids) {
      const sep = this.separate(boids);
      const ali = this.align(boids);
      const coh = this.cohesion(boids);

      sep.mult(1.5);
      ali.mult(1.0);
      coh.mult(1.0);

      this.applyForce(sep);
      this.applyForce(ali);
      this.applyForce(coh);
    }

    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }

    seek(target) {
      const desired = this.p5.constructor.Vector.sub(target, this.position);
      desired.normalize().mult(this.maxspeed);
      const steer = this.p5.constructor.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    }

    render() {
      // this.p5.fill(239);
      this.p5.fill(47, 65, 87);
      // this.p5.noFill();
      this.p5.stroke(76, 158, 237);
      // this.p5.stroke(255, 255, 255);
      this.p5.strokeWeight(this.strokeWeight);
      this.p5.ellipse(this.position.x, this.position.y, this.r * 2);
    }

    borders() {
      if (this.position.x < -this.r) this.position.x = this.p5.width + this.r;
      if (this.position.y < -this.r) this.position.y = this.p5.height + this.r;
      if (this.position.x > this.p5.width + this.r) this.position.x = -this.r;
      if (this.position.y > this.p5.height + this.r) this.position.y = -this.r;
    }

    separate(boids) {
      const desiredSeparation = this.r * 1.5;
      const steer = this.p5.createVector(0, 0);
      let count = 0;

      for (let i = 0; i < boids.length; i++) {
        const other = boids[i];
        if (!other || !other.position) continue;

        const d = this.p5.constructor.Vector.dist(this.position, other.position);
        if (d > 0 && d < desiredSeparation) {
          const diff = this.p5.constructor.Vector.sub(this.position, other.position);
          diff.normalize().div(d);
          steer.add(diff);
          count++;
        }
      }

      if (count > 0) steer.div(count);
      if (steer.mag() > 0) {
        steer.normalize().mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
      }

      return steer;
    }

    align(boids) {
      // const neighborDist = 50;
      const neighborDist = this.r * 4;
      const sum = this.p5.createVector(0, 0);
      let count = 0;

      for (let i = 0; i < boids.length; i++) {
        const other = boids[i];
        if (!other || !other.velocity) continue;

        const d = this.p5.constructor.Vector.dist(this.position, other.position);
        if (d > 0 && d < neighborDist) {
          sum.add(other.velocity);
          count++;
        }
      }

      if (count > 0) {
        sum.div(count).normalize().mult(this.maxspeed);
        const steer = this.p5.constructor.Vector.sub(sum, this.velocity);
        steer.limit(this.maxforce);
        return steer;
      }

      return this.p5.createVector(0, 0);
    }

    cohesion(boids) {
      // const neighborDist = 50;
      const neighborDist = this.r * 4;
      const sum = this.p5.createVector(0, 0);
      let count = 0;

      for (let i = 0; i < boids.length; i++) {
        const other = boids[i];
        if (!other || !other.position) continue;

        const d = this.p5.constructor.Vector.dist(this.position, other.position);
        if (d > 0 && d < neighborDist) {
          sum.add(other.position);
          count++;
        }
      }

      if (count > 0) {
        sum.div(count);
        return this.seek(sum);
      }

      return this.p5.createVector(0, 0);
    }
  }

  class Flock {
    constructor() {
      this.boids = [];
    }

    run() {
      for (let boid of this.boids) {
        boid.run(this.boids);
      }
    }

    addBoid(boid) {
      if (this.boids.length > 300) {
        this.boids.shift();
      }
      this.boids.push(boid);
    }
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    flockRef.current = new Flock();
    for (let i = 0; i < 100; i++) {
      flockRef.current.addBoid(new Boid(p5, p5.width / 2, p5.height / 2));
    }
  };

  const draw = (p5) => {
    p5.background(47, 65, 87);
    if (flockRef.current) {
      flockRef.current.run();
    }
  };

  const mouseDragged = (p5) => {
    const now = Date.now();
    if (now - lastAddTimeRef.current > 100) {
      flockRef.current?.addBoid(new Boid(p5, p5.mouseX, p5.mouseY));
      lastAddTimeRef.current = now;
    }
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mouseDragged={mouseDragged}
      windowResized={windowResized}
    />
  );
}
