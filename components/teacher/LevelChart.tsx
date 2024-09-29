"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const description = "An interactive bar chart";

const chartData = [
  { multiplier: 1, school: 0, county: 0, region: 0, country: 5 },
  { multiplier: 2, school: 0, county: 1, region: 1, country: 3 },
  { multiplier: 3, school: 0, county: 2, region: 3, country: 2 },
  { multiplier: 4, school: 1, county: 3, region: 5, country: 1 },
  { multiplier: 5, school: 1, county: 4, region: 6, country: 0 },
  { multiplier: 6, school: 2, county: 5, region: 8, country: 0 },
  { multiplier: 7, school: 3, county: 6, region: 10, country: 0 },
  { multiplier: 8, school: 4, county: 8, region: 12, country: 0 },
  { multiplier: 9, school: 5, county: 9, region: 13, country: 0 },
  { multiplier: 10, school: 6, county: 10, region: 14, country: 0 },
  { multiplier: 11, school: 6, county: 11, region: 16, country: 0 },
  { multiplier: 12, school: 7, county: 12, region: 17, country: 0 },
  { multiplier: 13, school: 8, county: 14, region: 19, country: 0 },
  { multiplier: 14, school: 9, county: 15, region: 21, country: 0 },
  { multiplier: 15, school: 10, county: 17, region: 23, country: 0 },
  { multiplier: 16, school: 11, county: 18, region: 25, country: 0 },
  { multiplier: 17, school: 12, county: 20, region: 27, country: 0 },
  { multiplier: 18, school: 14, county: 21, region: 29, country: 0 },
  { multiplier: 19, school: 15, county: 22, region: 31, country: 0 },
  { multiplier: 20, school: 16, county: 24, region: 33, country: 0 },
  { multiplier: 21, school: 18, county: 26, region: 35, country: 0 },
  { multiplier: 22, school: 19, county: 27, region: 37, country: 0 },
  { multiplier: 23, school: 20, county: 29, region: 39, country: 0 },
  { multiplier: 24, school: 21, county: 30, region: 41, country: 0 },
  { multiplier: 25, school: 22, county: 31, region: 43, country: 0 },
  { multiplier: 26, school: 23, county: 33, region: 45, country: 0 },
  { multiplier: 27, school: 25, county: 34, region: 47, country: 0 },
  { multiplier: 28, school: 26, county: 36, region: 49, country: 0 },
  { multiplier: 29, school: 27, county: 37, region: 51, country: 0 },
  { multiplier: 30, school: 28, county: 39, region: 53, country: 0 },
  { multiplier: 31, school: 29, county: 40, region: 55, country: 0 },
  { multiplier: 32, school: 30, county: 41, region: 57, country: 0 },
  { multiplier: 33, school: 31, county: 43, region: 59, country: 0 },
  { multiplier: 34, school: 32, county: 44, region: 61, country: 0 },
  { multiplier: 35, school: 34, county: 45, region: 62, country: 0 },
  { multiplier: 36, school: 35, county: 46, region: 64, country: 0 },
  { multiplier: 37, school: 36, county: 48, region: 66, country: 0 },
  { multiplier: 38, school: 37, county: 49, region: 68, country: 0 },
  { multiplier: 39, school: 38, county: 50, region: 70, country: 0 },
  { multiplier: 40, school: 39, county: 52, region: 72, country: 0 },
  { multiplier: 41, school: 40, county: 53, region: 74, country: 0 },
  { multiplier: 42, school: 41, county: 55, region: 76, country: 1 },
  { multiplier: 43, school: 40, county: 54, region: 78, country: 1 },
  { multiplier: 44, school: 39, county: 52, region: 77, country: 1 },
  { multiplier: 45, school: 38, county: 51, region: 76, country: 1 },
  { multiplier: 46, school: 36, county: 50, region: 75, country: 1 },
  { multiplier: 47, school: 35, county: 49, region: 74, country: 1 },
  {
    multiplier: 48,
    school: 33,
    county: 48,
    region: 73,
    country: 1,
    isLocal: true,
  },
  { multiplier: 49, school: 31, county: 47, region: 72, country: 1 },
  { multiplier: 50, school: 30, county: 45, region: 70, country: 2 },
  { multiplier: 51, school: 29, county: 43, region: 68, country: 3 },
  { multiplier: 52, school: 28, county: 41, region: 66, country: 4 },
  { multiplier: 53, school: 27, county: 40, region: 65, country: 5 },
  { multiplier: 54, school: 26, county: 39, region: 63, country: 6 },
  { multiplier: 55, school: 25, county: 37, region: 61, country: 7 },
  { multiplier: 56, school: 24, county: 36, region: 59, country: 8 },
  { multiplier: 57, school: 23, county: 34, region: 58, country: 9 },
  { multiplier: 58, school: 22, county: 33, region: 56, country: 10 },
  { multiplier: 59, school: 20, county: 31, region: 54, country: 12 },
  { multiplier: 60, school: 19, county: 30, region: 53, country: 13 },
  { multiplier: 61, school: 18, county: 29, region: 52, country: 15 },
  { multiplier: 62, school: 17, county: 27, region: 50, country: 16 },
  { multiplier: 63, school: 16, county: 26, region: 48, country: 17 },
  { multiplier: 64, school: 15, county: 25, region: 46, country: 18 },
  { multiplier: 65, school: 14, county: 24, region: 45, country: 19 },
  { multiplier: 66, school: 12, county: 22, region: 43, country: 20 },
  { multiplier: 67, school: 11, county: 21, region: 41, country: 22 },
  { multiplier: 68, school: 10, county: 20, region: 39, country: 23 },
  { multiplier: 69, school: 9, county: 18, region: 37, country: 25 },
  { multiplier: 70, school: 8, county: 17, region: 35, country: 26 },
  { multiplier: 71, school: 6, county: 15, region: 33, country: 27 },
  { multiplier: 72, school: 5, county: 14, region: 31, country: 28 },
  { multiplier: 73, school: 4, county: 13, region: 29, country: 29 },
  { multiplier: 74, school: 3, county: 11, region: 27, country: 30 },
  { multiplier: 75, school: 2, county: 10, region: 25, country: 31 },
  { multiplier: 76, school: 2, county: 9, region: 23, country: 32 },
  { multiplier: 77, school: 1, county: 8, region: 21, country: 33 },
  { multiplier: 78, school: 1, county: 6, region: 19, country: 34 },
  { multiplier: 79, school: 1, county: 5, region: 17, country: 35 },
  { multiplier: 80, school: 0, county: 4, region: 15, country: 36 },
  { multiplier: 81, school: 0, county: 3, region: 13, country: 37 },
  { multiplier: 82, school: 0, county: 2, region: 11, country: 38 },
  { multiplier: 83, school: 0, county: 1, region: 9, country: 39 },
  { multiplier: 84, school: 0, county: 1, region: 7, country: 40 },
  { multiplier: 85, school: 0, county: 1, region: 5, country: 41 },
  { multiplier: 86, school: 0, county: 0, region: 3, country: 42 },
  { multiplier: 87, school: 0, county: 0, region: 2, country: 43 },
  { multiplier: 88, school: 0, county: 0, region: 1, country: 44 },
  { multiplier: 89, school: 0, county: 0, region: 0, country: 45 },
  { multiplier: 90, school: 0, county: 0, region: 0, country: 44 },
  { multiplier: 91, school: 0, county: 0, region: 0, country: 43 },
  { multiplier: 92, school: 0, county: 0, region: 0, country: 42 },
  { multiplier: 93, school: 0, county: 0, region: 0, country: 41 },
  { multiplier: 94, school: 0, county: 0, region: 0, country: 40 },
  { multiplier: 95, school: 0, county: 0, region: 0, country: 39 },
  { multiplier: 96, school: 0, county: 0, region: 0, country: 38 },
  { multiplier: 97, school: 0, county: 0, region: 0, country: 37 },
  { multiplier: 98, school: 0, county: 0, region: 0, country: 36 },
  { multiplier: 99, school: 0, county: 0, region: 0, country: 35 },
  { multiplier: 100, school: 0, county: 0, region: 0, country: 34 },
];

const chartConfig = {
  school: {
    label: "Szkoła",
    color: "hsl(var(--chart-1))",
  },
  county: {
    label: "Powiat",
    color: "hsl(var(--chart-2))",
  },
  region: {
    label: "Województwo",
    color: "hsl(var(--chart-3))",
  },
  country: {
    label: "Kraj",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function LevelChart() {
  return (
    <Card className="bg-muted/40 m-4">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>
            Jak ostatni sprawdzian twojej klasy wypada na tle innych uczniów
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <Tabs defaultValue="school">
          <TabsList className="float-right">
            {Object.entries(chartConfig).map(([id, category]) => (
              <TabsTrigger key={id} value={id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(chartConfig).map(([id]) => (
            <TabsContent key={id} value={id}>
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-[250px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="multiplier"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="w-[150px]"
                        nameKey="school"
                      />
                    }
                  />
                  <Bar dataKey={id}>
                    {chartData.map((entry: any, index: number) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.isLocal ? "red" : `var(--color-${id})`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
