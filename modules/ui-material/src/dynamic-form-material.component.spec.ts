import {describe, expect, inject, it, beforeEachProviders} from "@angular/core/testing";
import {
    DynamicFormMaterialComponent,
    DYNAMIC_FORM_UI_MATERIAL
} from "./dynamic-form-material.component";
import {MdUniqueSelectionDispatcher} from "@angular2-material/core";

describe("DynamicFormMaterialComponent test suite", () => {

    beforeEachProviders(() => [DynamicFormMaterialComponent, MdUniqueSelectionDispatcher]);

    it("tests if component initializes correctly", inject([DynamicFormMaterialComponent, MdUniqueSelectionDispatcher],
        (component) => {

            expect(component).toBeDefined();
            expect(component.type).toEqual(DYNAMIC_FORM_UI_MATERIAL);
        }));

});