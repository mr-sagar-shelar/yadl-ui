import type { Meta, StoryObj } from "@storybook/react";
import Themeisle148 from "../Themeisle148";

const meta: Meta<typeof Themeisle148> = { title: "Themeisle/Themeisle148", component: Themeisle148 };

export default meta;
type Story = StoryObj<typeof Themeisle148>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
