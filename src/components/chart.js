import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines svgWidth={200} svgHeight={140} data={props.data}>
        <SparklinesLine color={props.color ? props.color : 'gray'} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}