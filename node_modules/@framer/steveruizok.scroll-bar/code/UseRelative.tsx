import * as React from "react"
import { useLayoutEffect } from "react"
import { MotionValue, useMotionValue } from "framer"

/**
 * UseRelative
 * @description Declare a motion value with a value dependent on multiple other values.
 * @param parents An array of motion values or values.
 * @param transform A function that receives the current values and returns a computed value.
 * @example
 * ```jsx
 * const knobHeight = useRelative(
 *  [scrollHeight, contentHeight, maskHeight],
 *  (scrollHeight, contentHeight, maskHeight) => {
 *    return maskHeight * (scrollHeight / contentHeight)
 *  }
 *)
 *```
 */
export function useRelative<T>(
    parents: (MotionValue<T> | T)[],
    transform: (...parents: T[]) => T
) {
    const transformedValue = useMotionValue(transform(...parents.map(toValue)))

    useLayoutEffect(() => {
        const computeValue = () =>
            transformedValue.set(transform(...parents.map(toValue)))

        computeValue()

        const removers = parents
            .map(v => isMotionValue(v) && v.onChange(computeValue))
            .filter(v => v) as (() => void)[]

        return () => removers.forEach(fn => fn())
    }, [parents, transform])

    return transformedValue
}

// HELPERS

export const isMotionValue = (value: any): value is MotionValue => {
    return value instanceof MotionValue
}

const toValue: <T>(v: MotionValue<T> | T) => T = v =>
    isMotionValue(v) ? v.get() : v
