import React from 'react'
import { css } from 'emotion'
import formatNumber from '@pndr/number-input/lib/utils/formatNumber'
import defaultEmptyRenderer from '../../defaultEmptyRenderer'
import isNil from 'lodash/isNil'

export default class NumberField extends React.Component {

    render() {

        const {
            allowNegativeNumbers,
            precisionId,
            numberFormatId
        } = this.props

        if (isNil(this.props.number)) {
            return defaultEmptyRenderer()
        }

        return (
            <div
                className={css`
                    position: relative;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-flex-wrap: wrap;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 100%;
                `}
            >
                <div
                    className={css`
                        position: relative;
                        max-width: 100%;
                    `}
                >
                    <div
                        className={css`
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `}
                    >
                        {formatNumber(this.props.number, {
                            allowNegative: allowNegativeNumbers,
                            precision: parseInt(precisionId, 10),
                            format: numberFormatId
                        })}
                    </div>
                </div>
            </div>
        )
    }
}