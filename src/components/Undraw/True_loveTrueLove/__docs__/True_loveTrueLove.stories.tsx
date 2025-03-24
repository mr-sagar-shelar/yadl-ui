import type { Meta, StoryObj } from "@storybook/react";
import True_loveTrueLove from "../True_loveTrueLove";

const meta: Meta<typeof True_loveTrueLove> = { title: "unDraw/True_loveTrueLove", component: True_loveTrueLove };

export default meta;
type Story = StoryObj<typeof True_loveTrueLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
