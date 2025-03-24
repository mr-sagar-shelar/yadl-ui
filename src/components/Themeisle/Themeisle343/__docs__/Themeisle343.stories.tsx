import type { Meta, StoryObj } from "@storybook/react";
import Themeisle343 from "../Themeisle343";

const meta: Meta<typeof Themeisle343> = { title: "Themeisle/Themeisle343", component: Themeisle343 };

export default meta;
type Story = StoryObj<typeof Themeisle343>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
