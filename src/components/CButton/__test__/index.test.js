import React from 'react';
import { render } from '@testing-library/react';
import CButton from '../index';

test("Test Disabled CButton (button should has isDisabled props)", () => {
    const { container } = render(<CButton isDisabled/>);

    expect(container.querySelector("button.btn--disabled")).toBeInTheDocument();
});

test("Test Disabled CButton (button should has isRouded props)", () => {
    const { container } = render(<CButton isRounded/>);

    expect(container.querySelector("button.btn--rounded")).toBeInTheDocument();
});

test("Test Disabled CButton (button should has isSmall props)", () => {
    const { container } = render(<CButton isSmall/>);

    expect(container.querySelector("button.btn--small")).toBeInTheDocument();
});

test("Test Disabled CButton (button should has isBlock props)", () => {
    const { container } = render(<CButton isBlock/>);

    expect(container.querySelector("button.btn--block")).toBeInTheDocument();
});

test("Test Disabled CButton (button should has isTransparent props)", () => {
    const { container } = render(<CButton isTransparent/>);

    expect(container.querySelector("button.btn--transparent")).toBeInTheDocument();
});

test("Test Disabled CButton (button should as a link)", () => {
    const { container } = render(<CButton type="link"/>);

    expect(container.querySelector("a")).toBeInTheDocument();
});