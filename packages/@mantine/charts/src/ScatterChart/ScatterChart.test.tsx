import { patchConsoleWarn, tests } from '@mantine-tests/core';
import { ScatterChart, ScatterChartProps, ScatterChartStylesNames } from './ScatterChart';

const defaultProps: ScatterChartProps = {};

describe('@mantine/charts/ScatterChart', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<ScatterChartProps, ScatterChartStylesNames>({
    component: ScatterChart,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/ScatterChart',
    stylesApiSelectors: ['root'],
  });
});
