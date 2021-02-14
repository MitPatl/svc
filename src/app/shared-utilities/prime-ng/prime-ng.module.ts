import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar'; // date picker
import { AutoCompleteModule } from 'primeng/autocomplete'; // to filter or auto complete in dropdown
import { MultiSelectModule } from 'primeng/multiselect'; //  to select multiple values in dropdown
import { InputMaskModule } from 'primeng/inputmask'; // to enter input in a certain format such as numeric, date, currency, email and phone
import { ButtonModule } from 'primeng/button'; // button
import { TableModule } from 'primeng/table'; // grid
import { PaginatorModule } from 'primeng/paginator'; // grid pagination
import { PanelModule } from 'primeng/panel'; //  for panel view
import { TabViewModule } from 'primeng/tabview'; //  for tabs view
import { TooltipModule } from 'primeng/tooltip'; //  to add tooltip on field
import { AccordionModule } from 'primeng/accordion'; /// just popup without fotter buttons
import { CardModule } from 'primeng/card'; // dialog popup
import { ToastModule } from 'primeng/toast'; /// to display messages in an overlay
import { RadioButtonModule } from 'primeng/radiobutton'; /// radio button
import { KeyFilterModule } from 'primeng/keyfilter'; /// to  restricts user input based on a regular expression
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';

import { InputSwitchModule } from 'primeng/inputswitch';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { StepsModule } from 'primeng/steps';

@NgModule({
  imports: [
    CommonModule,
    OverlayPanelModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    TooltipModule,
    AccordionModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ScrollPanelModule,
    TabViewModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    KeyFilterModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    MultiSelectModule,
    RadioButtonModule,
    SpinnerModule,
    ButtonModule,
    SplitButtonModule,
    PaginatorModule,
    TableModule,
    ToggleButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    ProgressSpinnerModule,
    TreeModule,
    StepsModule,
    SidebarModule
  ],
  exports: [
    OverlayPanelModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    TooltipModule,
    AccordionModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ScrollPanelModule,
    TabViewModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    KeyFilterModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    MultiSelectModule,
    RadioButtonModule,
    SpinnerModule,
    ButtonModule,
    SplitButtonModule,
    PaginatorModule,
    TableModule,
    ToggleButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    ProgressSpinnerModule,
    StepsModule,
    SidebarModule
  ],
  providers: [MessageService,
    ConfirmationService]
})
export class PrimeNgModule { }
