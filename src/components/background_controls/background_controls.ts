/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import "../shared/expandable_content/expandable_tab.js";
import "../shared/dropdown/dropdown.js";
import "@polymer/paper-item";

import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { ConnectedLitElement } from "../connected_lit_element/connected_lit_element.js";
import { Dropdown } from "../shared/dropdown/dropdown.js";

const colors = [
  "None",
  "Red",
  "Cyan",
  "Blue",
  "DarkBlue",
  "LightBlue",
  "Purple",
  "Yellow",
  "Lime",
  "Magenta",
  "Pink",
  "White",
  "Silver",
  "Grey",
  "Black",
  "Orange",
  "Brown",
  "Maroon",
  "Green",
  "Olive",
  "Aquamarine",
];

/**
 * Background controls for gltf and model-viewer.
 */
@customElement("me-background-controls")
export class BackgroundControls extends ConnectedLitElement {
  render() {
    const tabHeader = "Background";
    return html`
      <me-expandable-tab tabName=${tabHeader} .open=${true}>
        <div slot="content">
          <me-dropdown
            id="background-name-selector"
            @select=${this.onBackgroundChange}
          >
            ${colors.map((item) => {
              return html` <paper-item value="${item}">${item}</paper-item>`;
            })}
          </me-dropdown>
        </div>
      </me-expandable-tab>
    `;
  }
  onBackgroundChange(event: CustomEvent) {
    // Autoplay must be enabled otherwise the animation won't play and the
    // console throws a warning.
    const dropdown = event.target as Dropdown;
    const value = dropdown.selectedItem?.getAttribute("value") || undefined;
    const ele = document.querySelector(".mvContainer") as HTMLElement;
    ele.style.background = `${value}`;
  }
}

declare global {
  interface BackgroundControls {
    "me-background-controls": BackgroundControls;
  }
}
