"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
console.log(component);
console.log("user clicks a button");
component.onClick();
console.log(component);
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
