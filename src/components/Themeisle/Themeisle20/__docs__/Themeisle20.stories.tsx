import type { Meta, StoryObj } from "@storybook/react";
import Themeisle20 from "../Themeisle20";

const meta: Meta<typeof Themeisle20> = { title: "Themeisle/Themeisle20", component: Themeisle20 };

export default meta;
type Story = StoryObj<typeof Themeisle20>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
