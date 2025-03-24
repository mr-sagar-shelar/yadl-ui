import type { Meta, StoryObj } from "@storybook/react";
import Themeisle159 from "../Themeisle159";

const meta: Meta<typeof Themeisle159> = { title: "Themeisle/Themeisle159", component: Themeisle159 };

export default meta;
type Story = StoryObj<typeof Themeisle159>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
