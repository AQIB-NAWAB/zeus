import React from 'react';
import { View } from 'react-native';
import { Row } from '../layout/Row';
import { themeColor, hexAverage } from '../../utils/ThemeUtils';

export function BalanceBar({
    left,
    center = 0,
    right,
    offline,
    percentOfLargest,
    showProportionally = true
}: {
    left: number;
    center: number;
    right: number;
    offline: boolean;
    // How big is this channel relative to the largest channel
    // A float from 0.0 -> 1.0, 1 being the largest channel
    percentOfLargest: number;
    showProportionally: boolean;
}) {
    const total = left + center + right;

    // If we're supposed to show proportionally set the miniumum to 20% of the width
    // Otherwise take the full width
    const width = showProportionally ? Math.max(0.03, percentOfLargest) : 1.0;
    return (
        <Row flex={width}>
            <View
                style={{
                    height: 8,
                    flex: left / total,
                    backgroundColor: offline
                        ? '#E5E5E5'
                        : themeColor('outbound'),
                    marginRight: 1
                }}
            />
            <View
                style={{
                    height: 8,
                    flex: center / total,
                    backgroundColor: offline
                        ? '#C6C7C9'
                        : hexAverage([
                              themeColor('outbound'),
                              themeColor('inbound')
                          ]),
                    marginRight: 1
                }}
            />
            <View
                style={{
                    height: 8,
                    flex: right / total,
                    backgroundColor: offline ? '#A7A9AC' : themeColor('inbound')
                }}
            />
        </Row>
    );
}
