import * as React from 'react';
import { storiesOf } from '@storybook/react';
// const { specs, describe, it } = require('../.storybook/facade');

import { Button } from '../components/Button';

// import {mount} from "enzyme";
// import * as expect from "expect";

const stories = storiesOf('Button', module);

stories.add('Hello World', function() {
    const story = <Button />;

    // specs(() => describe('Hello World', function () {
    //   it('Should have the Hello World label', function () {
    //     let output = mount(story);
    //     expect(output.text()).toContain('Hello World');
    //   });
    // }));

    return story;
});
