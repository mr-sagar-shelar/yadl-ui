import type { Meta, StoryObj } from "@storybook/react";
import Text from "../Text";
import React from "react";

const meta: Meta<typeof Text> = { title: "Text/Gradient", component: Text };

export default meta;
type Story = StoryObj<typeof Text>;

export const Gradients: Story = {
  args: {
    classes: "bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600",
  },
  render: (args) => (
    <div className="grid xs:grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 overflow-auto">
      <Text
        classes="border-2 p-2 mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
        text="Hello world"
      />
      <Text
        classes="mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        text="Hello world"
      />
      <Text
        classes="mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate bg-gradient-to-r from-violet-600  via-red-500 to-indigo-600 bg-clip-text text-transparent"
        text="Hello world"
      />
      <Text
        classes="border-indigo-600 mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
        text="Hello world"
      />
    </div>
  ),
};
