import type { Meta, StoryObj } from "@storybook/react";
import HomeScreen from "../HomeScreen";

const meta: Meta<typeof HomeScreen> = { title: "unDraw/HomeScreen", component: HomeScreen };

export default meta;
type Story = StoryObj<typeof HomeScreen>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
