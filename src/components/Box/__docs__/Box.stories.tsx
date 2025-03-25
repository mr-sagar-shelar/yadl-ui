import type { Meta, StoryObj } from "@storybook/react";
import Box from "../Box";
import React from "react";

const meta: Meta<typeof Box> = { title: "Box/Gradient", component: Box };

export default meta;
type Story = StoryObj<typeof Box>;

export const Gradients: Story = {
  args: {
    classes: "bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600",
  },
  render: (args) => (
    <div className="grid xs:grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 overflow-auto">
      <Box classes="relative rounded-2xl p-24 from-red-500 via-orange-500 to-yellow-500 bg-linear-to-r" />
      <Box classes="relative rounded-2xl p-24 from-cyan-700 via-blue-500 to-indigo-600 bg-gradient-to-br" />
      <Box classes="relative rounded-2xl p-24 from-indigo-500 via-purple-500 to-pink-500 bg-linear-to-r" />
      <Box classes="relative rounded-2xl p-24 from-pink-500 via-red-500 to-orange-500 bg-linear-to-r" />
      <Box classes="relative rounded-2xl p-24 bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400" />
      <Box classes="relative rounded-2xl p-24 bg-linear-to-r from-yellow-500 via-orange-500 to-red-500" />
      <Box classes="relative rounded-2xl p-24 bg-linear-to-r from-green-500 via-emerald-500 to-teal-500" />
      <Box classes="relative rounded-2xl p-24 bg-linear-to-r from-amber-500 via-orange-500 to-red-500" />
      <Box classes="relative rounded-2xl p-24 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500" />
      <Box classes="relative rounded-2xl p-24 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500" />
      <Box classes="relative rounded-2xl p-24  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  " />
      <Box classes="relative rounded-2xl p-24 bg-linear-to-r from-rose-500 via-pink-500 to-red-500" />
    </div>
  ),
};
