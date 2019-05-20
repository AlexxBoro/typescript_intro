import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
console.log(component);
console.log("user clicks a button");
component.onClick();
console.log(component);
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
