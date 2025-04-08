import type { Meta, StoryObj } from "@storybook/react";
import Themeisle150 from "../Themeisle150";

const meta: Meta<typeof Themeisle150> = { title: "Themeisle/Themeisle150", component: Themeisle150 };

export default meta;
type Story = StoryObj<typeof Themeisle150>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
