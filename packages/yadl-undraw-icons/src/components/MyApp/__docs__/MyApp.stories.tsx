import type { Meta, StoryObj } from "@storybook/react";
import MyApp from "../MyApp";

const meta: Meta<typeof MyApp> = { title: "unDraw/MyApp", component: MyApp };

export default meta;
type Story = StoryObj<typeof MyApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
