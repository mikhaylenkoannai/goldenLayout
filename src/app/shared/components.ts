import { ComponentType } from 'ngx-golden-layout';

import {
    TestComponent
} from '../components/test/test.component';

import { GL_COMPONENT_NAMES } from '../constants/common/gl-component-names';
import { Component1Component } from '../components/component1/component1.component';

export const GL_COMPONENTS: ComponentType[] = [
    {
        name: 'app-test',
        type: TestComponent,
    },
    {
        name: GL_COMPONENT_NAMES.COMPONENT1,
        type: Component1Component,
    }
];
