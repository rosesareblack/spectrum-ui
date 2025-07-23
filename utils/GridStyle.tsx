'use client';

import { RefObject } from 'react';

export const GetDimensions = (refs: RefObject<(HTMLDivElement | null)[]>) => {
  const w = refs.current?.map((div) => (div ? div.clientWidth : 0));
  const h = refs.current?.map((div) => (div ? div.clientHeight : 0)).filter((w) => w !== undefined);

  return [h, w];
};

export const GridColumns = (
  gridRef: RefObject<HTMLDivElement>,
  containerRef: RefObject<HTMLDivElement>,
) => {
  const parentWidth = containerRef.current?.offsetWidth || 0;

  let columnWidth = '';
  let columns = 0;
  if (parentWidth >= 1200) {
    columnWidth = '23%';
    columns = 4;
  } else if (parentWidth >= 990) {
    columnWidth = '30.3333%';
    columns = 3;
  } else if (parentWidth >= 700) {
    columnWidth = '50%';
    columns = 2;
  } else if (parentWidth <= 619) {
    columnWidth = '100%';
    columns = 1;
  }

  return columns;
};

export const GridStyle = (heights: number[], columns: number) => {
  function getRowsAndHeights() {
    let gridHeights = [];
    let col2 = columns;

    for (let i = 0; i < heights.length; i = i + columns) {
      const slicedArr = heights.slice(i, col2);
      gridHeights.push(slicedArr);
      col2 = col2 + columns;
    }

    const rows: number = gridHeights.length;
    gridHeights = gridHeights.map((heights) => Math.max(...heights));

    return [rows, gridHeights];
  }

  function styling() {
    const [rows, rowHeights] = getRowsAndHeights() as [number, number[]];
    const heights: string[] = [];
    for (let i = 0; i < rows; i++) {
      heights.push(`${rowHeights[i]}px`);
    }
    return heights;
  }

  const heightsArr: string[] = styling();
  const gridTemplateRows = heightsArr.join(' ');

  return gridTemplateRows;
};

function mostCommonWidth(widths: number[]): number | null {
  if (widths.length === 0) return null;
  const freqMap: { [key: number]: number } = {};
  for (const width of widths) {
    freqMap[width] = (freqMap[width] || 0) + 1;
  }
  let maxFreq = 0;
  let mostCommonWidth: number | null = null;
  for (const width in freqMap) {
    if (freqMap[width] > maxFreq) {
      maxFreq = freqMap[width];
      mostCommonWidth = Number(width);
    }
  }
  return mostCommonWidth;
}

export const addGridStyle = (
  rowsTemplate: string,
  columns: number,
  columnsWidth: number[],
  gridRef: RefObject<HTMLDivElement>,
) => {
  const colWidth = mostCommonWidth(columnsWidth);
  const colArr: string[] = [];
  for (let i = 0; i < columns; i++) {
    colArr[i] = colWidth !== null && colWidth !== undefined ? `${colWidth.toString()}px` : '';
  }
  const colsTemplate = colArr.join(' ');


  if (gridRef.current) {
    gridRef.current.style.gridTemplateRows = rowsTemplate;
    gridRef.current.style.gridTemplateColumns = colsTemplate;
  }
};

function drawVerticalLine(ctx:CanvasRenderingContext2D , p1: number, p2: number , cHeight:number , index:number , columns:number) {
  p2 = p2 * (index - 1)
  const offset = p1 + (index!==1 ? p2 : 0) 
  console.log(offset)
  ctx.beginPath();
  ctx.moveTo(offset, 10);
  ctx.lineTo(offset , cHeight - 10);
  ctx.stroke();
}

function drawHorizontalLine(ctx:CanvasRenderingContext2D , offset:number , cWidth:number ) {
  const off = offset
  ctx.beginPath();
  ctx.moveTo(10, off);
  ctx.lineTo(cWidth - 10, off);
  ctx.stroke();
  
}

export const addGridBorders = (
  containerRef: RefObject<HTMLDivElement>,
  columns: number,
  widths: number[],
  gridTemplateRows: string,
) => {
  const canvas = containerRef.current?.children[0] as HTMLCanvasElement | undefined;
  const ctx = canvas?.getContext('2d');

  const width = mostCommonWidth(widths);
  if (canvas && width) canvas.width = width * columns + (columns - 1) * 32;

  const heights = gridTemplateRows.split('px');

  let height = 0;
  let rows = 0;
  heights.map((h) => {
    height = height + Number(h);
    rows++;
  });
  if (canvas && height) canvas.height = height + (rows - 1) * 32;

  // Clear canvas before drawing
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  if (ctx && width && canvas) {
    ctx.strokeStyle = '#262626';
    ctx.lineWidth = 1;
    for (let i = 1; i < columns; i++) {
      const point1 = width + 16;
      const point2 = 16 + width + 16;
      drawVerticalLine(ctx, point1, point2, canvas.height, i, columns);
    }
  }

  if (ctx && canvas && heights) {
    ctx.strokeStyle = '#262626';
    let offset = 0;
    heights.map((h, index) => {
      if (index === heights.length - 1) return;
      const point1 = Number(heights[0]) + 16;
      const point2 = index !== 0 ? Number(heights[index]) + 32 : 0;
      offset += index === 0 ? point1 : 0 + point2;

      index !== heights.length - 2 ? drawHorizontalLine(ctx, offset, canvas.width) : null;
    });
  }
};
