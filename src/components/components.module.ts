import { NgModule } from '@angular/core';
import { CraftingComponent } from './crafting/crafting';
import { BlogComponent } from './blog/blog';
@NgModule({
	declarations: [CraftingComponent,
    BlogComponent],
	imports: [],
	exports: [CraftingComponent,
    BlogComponent]
})
export class ComponentsModule {}
