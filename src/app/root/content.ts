import { ItemConfigType } from 'golden-layout';

import { GL_COMPONENT_NAMES} from '../constants/common/gl-component-names';
import { GL_CONTENT_IDENTIFIERS } from '../constants/common/gl-content-identifiers';

export default [
    {
        type: 'row',
        id: GL_CONTENT_IDENTIFIERS.MAIN_ROW,
        content: [
            {
                type: 'column',
                id: GL_CONTENT_IDENTIFIERS.MAIN_COLUMN,
                content: [
                    {
                        type: 'stack',
                        id: GL_CONTENT_IDENTIFIERS.TREE_COLUMN,
                        content: [
                            {
                                type: 'component',
                                componentName: GL_COMPONENT_NAMES.COMPONENT1,
                                title: 'Models',
                                id: GL_COMPONENT_NAMES.COMPONENT1,
                                isClosable: false,
                                width: 15,
                                height: 70
                            }                            
                        ]
                    },
                    {
                        type: 'component',
                        componentName: GL_COMPONENT_NAMES.COMPONENT1,
                        title: 'Layouts',
                        id: GL_COMPONENT_NAMES.COMPONENT1,
                        isClosable: false,
                        height: 30
                    }
                ]
            },
            {
                type: 'component',
                componentName: 'app-test',
                title: 'Test plot',
                id: 'app-test',
                isClosable: false,
            },
        ]
    },
] as ItemConfigType[];
