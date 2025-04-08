import type { Meta, StoryObj } from "@storybook/react";
import Themeisle366 from "../Themeisle366";

const meta: Meta<typeof Themeisle366> = { title: "Themeisle/Themeisle366", component: Themeisle366 };

export default meta;
type Story = StoryObj<typeof Themeisle366>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
