"use strict";

function first(cb) {
  setTimeout(() => {
    console.log(1);
    cb()
  }, 1000);
}

function second() {
  console.log(2);
}

first(second);

function edu(subject, callback) {
  console.log(`I wonna teach ${subject}`);
  callback();
}

function done() {
  console.log("That's great");
}

edu("Javascript", done);
