"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const description = "An interactive bar chart";

const chartData = [
  { multiplayer: 1, school: 59, county: 110, region: 120, country: 140 },
  { multiplayer: 2, school: 75, county: 130, region: 140, country: 160 },
  { multiplayer: 3, school: 78, county: 130, region: 150, country: 170 },
  // Additional data for full range
  { multiplayer: 42, school: 252, county: 290, region: 300, country: 320 }, // Highlight this
  { multiplayer: 50, school: 315, county: 240, region: 230, country: 250 },
  { multiplayer: 78, school: 490, county: 500, region: 520, country: 530 },
  { multiplayer: 100, school: 250, county: 270, region: 290, country: 310 },
];

const chartConfig = {
  views: {
    label: "Number",
  },
  school: {
    label: "School",
    color: "hsl(var(--chart-1))",
  },
  county: {
    label: "County",
    color: "hsl(var(--chart-2))",
  },
  region: {
    label: "Region",
    color: "hsl(var(--chart-3))",
  },
  country: {
    label: "Country",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function LevelChart() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>(
    "school"
  );

  const total = React.useMemo(
    () => ({
      school: chartData.reduce((acc, curr) => acc + curr.school, 0),
      county: chartData.reduce((acc, curr) => acc + curr.county, 0),
      region: chartData.reduce((acc, curr) => acc + curr.region, 0),
      country: chartData.reduce((acc, curr) => acc + curr.country, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total values for each region
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <Tabs defaultValue="school" onValueChange={(val) => setActiveChart(val as keyof typeof chartConfig)}>
          <TabsList className="float-right">
            <TabsTrigger value="school">School</TabsTrigger>
            <TabsTrigger value="county">County</TabsTrigger>
            <TabsTrigger value="region">Region</TabsTrigger>
            <TabsTrigger value="country">Country</TabsTrigger>
          </TabsList>
          <TabsContent value="school">
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
                  dataKey="multiplayer"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                    />
                  }
                />
                <Bar
                  dataKey="school"
                  fill={
                    activeChart === "school" && chartData.some((d) => d.multiplayer === 42)
                      ? "red"
                      : `var(--color-school)`
                  }
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="county">
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
                  dataKey="multiplayer"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                    />
                  }
                />
                <Bar
                  dataKey="county"
                  fill={
                    activeChart === "county" && chartData.some((d) => d.multiplayer === 42)
                      ? "green"
                      : `var(--color-county)`
                  }
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="region">
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
                  dataKey="multiplayer"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                    />
                  }
                />
                <Bar
                  dataKey="region"
                  fill={
                    activeChart === "region" && chartData.some((d) => d.multiplayer === 42)
                      ? "blue"
                      : `var(--color-region)`
                  }
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="country">
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
                  dataKey="multiplayer"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                    />
                  }
                />
                <Bar
                  dataKey="country"
                  fill={
                    activeChart === "country" && chartData.some((d) => d.multiplayer === 42)
                      ? "orange"
                      : `var(--color-country)`
                  }
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
