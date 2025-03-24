import type { Meta, StoryObj } from "@storybook/react";
import Themeisle482 from "../Themeisle482";

const meta: Meta<typeof Themeisle482> = { title: "Themeisle/Themeisle482", component: Themeisle482 };

export default meta;
type Story = StoryObj<typeof Themeisle482>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
