import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";
import { TabsPageRoutingModule } from "./tabs.router.module";
import { AboutPageModule } from "../about/about.module";

@NgModule({
    imports: [
        AboutPageModule,
        CommonModule,
        FormsModule,
        IonicModule,
        TabsPageRoutingModule,
        TabsPage,
    ],
})
export class TabsPageModule {}
