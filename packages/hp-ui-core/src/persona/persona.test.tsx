import * as React from 'react'

import { render, testStories } from '@hp-ui/test-utils'
import * as stories from '../stories/persona.stories'

testStories<typeof stories>(stories)
