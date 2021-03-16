import { WebrErrorComponent } from './error.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed'
import {
  ComponentHarness,
  ContentContainerComponentHarness,
  HarnessLoader,
} from '@angular/cdk/testing'

class MyInputHarness extends ComponentHarness {
  static hostSelector = 'input[webr][type="text"]'

  async click() {
    const host = await this.host()
    host.click()
  }
}

class MyInputContainerHarness extends ContentContainerComponentHarness<string> {
  static hostSelector = 'webr-input-root'
}

describe('InputComponent', () => {
  let fixture: ComponentFixture<WebrErrorComponent>
  let loader: HarnessLoader
  let rootLoader: HarnessLoader


  let sectionInputHarness: MyInputContainerHarness

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrErrorComponent)
    loader = TestbedHarnessEnvironment.loader(fixture)
    rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture)
  })

  it('loads harnesses', async () => {
    // Load a harness for the bootstrapped component with `harnessForFixture`
    sectionInputHarness =
        await TestbedHarnessEnvironment.harnessForFixture(fixture, MyInputContainerHarness);

    // The button element is inside the fixture's root element, so we use `loader`.
    const inputHarness = await loader.getHarness(MyInputHarness);

    // Click the input to open the dialog
    await inputHarness.click();

    // The dialog is appended to `document.body`, outside of the fixture's root element,
    // so we use `rootLoader` in this case.
    const containerHarness = await rootLoader.getHarness(MyInputContainerHarness);

    // ... make some assertions
  });
})
