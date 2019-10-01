import * as React from "react"
import {
    Frame,
    Scroll,
    MotionValue,
    useMotionValue,
    useTransform,
    addPropertyControls,
    ControlType,
} from "framer"
import { useCallback, useEffect, useMemo } from "react"

export function ScrollBar(props) {
    const {
        children,
        railColor,
        railPadding,
        railWidth,
        knobColor,
        knobPadding,
        ...rest
    } = props
    const [content] = children

    // SCROLL

    const scrollY = useMotionValue(0)

    const scrollHeight = useRelative([props.height], v => v)

    // CONTENT

    const cHeight = content ? content.props.height : 0

    const contentHeight = useRelative([cHeight], cHeight => cHeight)

    // RAIL

    const railHeight = useRelative(
        [railPadding, scrollHeight],
        (railPadding, scrollHeight) => {
            return scrollHeight - railPadding * 2
        }
    )

    // KNOB MASK

    const maskWidth = railWidth - knobPadding * 2

    const maskHeight = useRelative(
        [railHeight, knobPadding],
        (railHeight, knobPadding) => {
            return railHeight - knobPadding * 2
        }
    )

    // KNOB

    const knobHeight = useRelative(
        [scrollHeight, contentHeight, maskHeight],
        (scrollHeight, contentHeight, maskHeight) => {
            return maskHeight * (scrollHeight / contentHeight)
        }
    )

    const knobY = useRelative(
        [scrollY, contentHeight, scrollHeight, maskHeight, knobHeight],
        (scrollY, contentHeight, scrollHeight, maskHeight, knobHeight) => {
            return (
                ((maskHeight - knobHeight) * -scrollY) /
                (contentHeight - scrollHeight)
            )
        }
    )

    // EVENTS

    function handleKnobPan(event, info) {
        scrollY.set(
            Math.max(
                Math.min(scrollY.get() - info.delta.y * 2, 0),
                -(contentHeight.get() - scrollHeight.get())
            )
        )
    }

    return (
        <Frame {...rest} background="none">
            <Scroll
                width="100%"
                opacity={1}
                contentOffsetY={scrollY}
                height={scrollHeight}
            >
                {content &&
                    React.cloneElement(content, {
                        width: "100%",
                        height: contentHeight,
                    })}
            </Scroll>
            <Frame
                name="rail"
                center={"y"}
                right={railPadding}
                width={railWidth}
                height={railHeight}
                borderRadius={railWidth / 2}
                background={railColor}
            >
                <Frame
                    name="knobMask"
                    center
                    width={maskWidth}
                    height={maskHeight}
                    borderRadius={maskWidth / 2}
                    overflow="hidden"
                    background={"none"}
                >
                    <Frame
                        name="knob"
                        y={knobY}
                        center={"x"}
                        width={"100%"}
                        height={knobHeight}
                        borderRadius={maskWidth / 2}
                        background={knobColor}
                        opacity={1}
                        onPan={handleKnobPan}
                    />
                </Frame>
            </Frame>
        </Frame>
    )
}

ScrollBar.defaultProps = {
    railWidth: 12,
    railPadding: 12,
    railColor: "#555",
    knobColor: "#FFF",
    knobPadding: 2,
}

addPropertyControls(ScrollBar, {
    railWidth: {
        type: ControlType.Number,
        min: 1,
        max: 24,
        defaultValue: 12,
    },
    railPadding: {
        type: ControlType.Number,
        min: 0,
        max: 24,
        defaultValue: 12,
    },
    railColor: {
        type: ControlType.Color,
        defaultValue: "#555",
    },
    knobPadding: {
        type: ControlType.Number,
        min: 0,
        max: 8,
        defaultValue: 2,
    },
    knobColor: {
        type: ControlType.Color,
        defaultValue: "#FFF",
    },
})

// CUSTOM HOOK

export const isMotionValue = (value: any): value is MotionValue => {
    return value instanceof MotionValue
}

const toValue: <T>(v: MotionValue<T> | T) => T = v =>
    isMotionValue(v) ? v.get() : v

export function useRelative<T>(
    values: (MotionValue<T> | T)[],
    callback: (...values: T[]) => T
) {
    // Compute the motion values's value by running
    // current values of its related values through
    // the callback function
    const getComputedValue = useCallback(
        currentValues => callback(...currentValues.map(toValue)),
        [callback, values]
    )

    // Create new motion value and initialize with computed values
    const computedValue = useMotionValue(getComputedValue(values))

    // When values change, compute and update change listeners
    useEffect(() => {
        const computeValue = () => computedValue.set(getComputedValue(values))

        // Compute motion value based on new values
        computeValue()

        // Add change events to each motion value, to compute the value
        // when that motion value changes
        const removers = values
            .map(v => isMotionValue(v) && v.onChange(computeValue))
            .filter(v => v) as (() => void)[]

        // Return removes for change events
        return () => removers.forEach(fn => fn())
    }, [values])

    return computedValue
}
